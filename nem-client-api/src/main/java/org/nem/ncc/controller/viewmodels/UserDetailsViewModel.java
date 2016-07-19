package org.nem.ncc.controller.viewmodels;

import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class UserDetailsViewModel implements SerializableEntity
{
    private final UserDetails userDetails;
    private final boolean submitted;
    private final Status status;
    
    public UserDetailsViewModel(final Status status) {
        this(null, status);
    }
    
    public UserDetailsViewModel(final UserDetails userDetails) {
        this(userDetails, Status.PRESENT);
    }
    
    public UserDetailsViewModel(final UserDetails userDetails, final Status status) {
        this.userDetails = userDetails;
        this.status = status;
        this.submitted = (status == Status.PRESENT);
    }
    
    public void serialize(final Serializer serializer) {
        if (this.userDetails != null) {
            this.userDetails.serialize(serializer);
        }
        serializer.writeInt("status", this.status.getCode());
        serializer.writeInt("submitted", (int)(this.submitted ? 1 : 0));
    }
    
    public UserDetails getUserDetails() {
        return this.userDetails;
    }
    
    public Status getStatus() {
        return this.status;
    }
    
    public enum Status
    {
        PRESENT(0), 
        PROCESSING(1), 
        EMPTY(2);
        
        private final int code;
        
        private Status(final int code) {
            this.code = code;
        }
        
        public int getCode() {
            return this.code;
        }
    }
}
