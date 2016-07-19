package org.nem.specific.deploy.appconfig;

import org.nem.core.serialization.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.socket.server.support.*;
import org.eclipse.jetty.websocket.api.*;
import org.springframework.web.socket.server.jetty.*;
import org.springframework.context.annotation.*;
import org.springframework.web.socket.config.annotation.*;
import org.springframework.web.socket.server.*;
import org.springframework.messaging.simp.config.*;
import java.util.*;
import org.springframework.messaging.converter.*;
import org.nem.deploy.*;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer
{
    @Autowired
    private SimpleAccountLookup accountLookup;
    
    @Bean
    public DefaultHandshakeHandler handshakeHandler() {
        final WebSocketPolicy policy = new WebSocketPolicy(WebSocketBehavior.SERVER);
        policy.setInputBufferSize(8192);
        policy.setIdleTimeout(600000L);
        final JettyRequestUpgradeStrategy strategy = new JettyRequestUpgradeStrategy();
        return new DefaultHandshakeHandler((RequestUpgradeStrategy)strategy);
    }
    
    public void registerStompEndpoints(final StompEndpointRegistry registry) {
        registry.addEndpoint(new String[] { "/trade_info" }).setHandshakeHandler((HandshakeHandler)this.handshakeHandler()).withSockJS();
    }
    
    public void configureMessageBroker(final MessageBrokerRegistry config) {
        config.setApplicationDestinationPrefixes(new String[] { "/app" });
        config.enableSimpleBroker(new String[] { "/topic", "/queue" });
    }
    
    private static void addConvertersForPolicy(final List<MessageConverter> converters, final SerializationPolicy policy) {
        converters.add((MessageConverter)new DeserializerSocketMessageConverter(policy));
        converters.add((MessageConverter)new SerializableEntitySocketMessageConverter(policy));
        converters.add((MessageConverter)new DeserializableEntitySocketMessageConverter(policy));
    }
    
    public boolean configureMessageConverters(final List<MessageConverter> converters) {
        addConvertersForPolicy(converters, (SerializationPolicy)new JsonSerializationPolicy(this.accountLookup));
        return false;
    }
}
