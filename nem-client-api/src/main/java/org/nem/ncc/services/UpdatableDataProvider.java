package org.nem.ncc.services;

import java.time.*;
import java.time.temporal.*;

public abstract class UpdatableDataProvider<T>
{
    private Instant lastUpdate;
    private T data;
    private final long UPDATE_IN_SEC;
    
    public UpdatableDataProvider(final long update_in_sec) {
        this.UPDATE_IN_SEC = update_in_sec;
    }
    
    protected abstract T fetchDataFromRemote();
    
    public synchronized T getData() {
        if (!this.needUpdate()) {
            return this.data;
        }
        this.data = this.fetchDataFromRemote();
        this.lastUpdate = Instant.now();
        return this.data;
    }
    
    private boolean needUpdate() {
        return this.data == null || this.lastUpdate == null || this.lastUpdate.plus(this.UPDATE_IN_SEC, (TemporalUnit)ChronoUnit.SECONDS).isBefore(Instant.now());
    }
}
