package org.nem.ncc.broker.manager;

import com.sharedobjects.broker.*;
import org.nem.deploy.*;
import org.zeromq.*;
import java.util.*;
import com.sharedobjects.*;
import org.nem.ncc.broker.*;
import org.nem.core.model.*;
import com.sharedobjects.network.*;

public class SocketsManager
{
    private static final int LISTENER_WAIT_MILLS = 30000;
    private final Map<Port, RequestManager> socketManagers;

    public SocketsManager(final CommonConfiguration config) {
        final ZMQ.Context context = ZMQ.context(1);
        (this.socketManagers = new HashMap<>()).put(Port.ADDITIONAL_INFO_LISTENER, new BrokerReqSocketManager(context, config.getBrokerConnectAddress(), Port.ADDITIONAL_INFO_LISTENER));
        this.socketManagers.put(Port.ORDER_SERVER, new BrokerReqSocketManager(context, config.getBrokerConnectAddress(), Port.ORDER_SERVER));
        this.socketManagers.put(Port.BROKER_OPERATIONS_LISTENER, new BrokerReqSocketManager(context, config.getBrokerConnectAddress(), Port.BROKER_OPERATIONS_LISTENER));
        this.socketManagers.put(Port.WITHDRAW_DEPOSIT_LISTENER, new BrokerReqSocketManager(context, config.getBrokerConnectAddress(), Port.WITHDRAW_DEPOSIT_LISTENER));
        this.socketManagers.put(Port.ORDER_SERVER, new DealerClient(context, config.getBrokerConnectAddress(), 30000, Port.ORDER_SERVER));
        this.initSockets();
    }

    private void initSockets() {
        for (final Port port : this.socketManagers.keySet()) {
            this.socketManagers.get(port).initSocket();
        }
    }

    public <T> T request(final IKryoSerializable request, final Port port, final Class<T> classInstance) {
        try {
            return (T)this.socketManagers.get(port).request(request, (Class)classInstance);
        }
        catch (ServerNotAvailable e2) {
            throw new BrokerException(BrokerException.Code.BROKER_NOT_AVAILABLE);
        }
        catch (BrokerConnectionException e) {
            throw new BrokerException(e.getCode(), e.getMessage());
        }
    }

    public <T> T signedRequest(final Account account, final IKryoSerializable request, final Port port, final Class<T> classInstance) {
        try {
            return (T)this.socketManagers.get(port).signedRequest(account, request, (Class)classInstance);
        }
        catch (ServerNotAvailable e2) {
            throw new BrokerException(BrokerException.Code.BROKER_NOT_AVAILABLE);
        }
        catch (BrokerConnectionException e) {
            throw new BrokerException(e.getCode(), e.getMessage());
        }
    }

    private class BrokerReqSocketManager extends ReqSocketManager
    {
        protected BrokerReqSocketManager(final ZMQ.Context context, final String connectAddress, final Port port) {
            super(context, connectAddress, 30000, port);
        }
    }
}
