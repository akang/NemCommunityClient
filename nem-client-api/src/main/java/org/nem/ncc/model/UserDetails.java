package org.nem.ncc.model;

import java.util.*;
import org.nem.core.crypto.*;
import org.nem.core.serialization.*;

public class UserDetails implements SerializableEntity
{
    private final String firstName;
    private final String lastName;
    private final Date dateOfBirth;
    private final Country country;
    private final String passport;
    private final String address;
    private final String contactNumber;
    private final String email;
    private final UUID id;
    private final PublicKey publicKey;
    
    public UserDetails(final UUID id, final String firstName, final String lastName, final Date dateOfBirth, final Country country, final String passport, final String address, final String contactNumber, final String email, final String publicKeyHex) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.country = country;
        this.passport = passport;
        this.address = address;
        this.contactNumber = contactNumber;
        this.email = email;
        this.publicKey = PublicKey.fromHexString(publicKeyHex);
    }
    
    public PublicKey getPublicKey() {
        return this.publicKey;
    }

    @SuppressWarnings("unchecked")
    public UserDetails(final Deserializer deserializer) {
        this.id = UUID.fromString(deserializer.readString("id"));
        this.firstName = deserializer.readString("firstName");
        this.lastName = deserializer.readString("lastName");
        this.dateOfBirth = new Date(deserializer.readLong("dateOfBirth"));
        this.country = (Country)deserializer.readObject("country", (ObjectDeserializer<Country>)Country.getObjectDeserializer());
        this.passport = deserializer.readString("passport");
        this.address = deserializer.readString("address");
        this.contactNumber = deserializer.readString("contactNumber");
        this.email = deserializer.readString("email");
        this.publicKey = PublicKey.fromHexString(deserializer.readString("publicKey"));
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeString("id", this.id.toString());
        serializer.writeString("firstName", this.firstName);
        serializer.writeString("lastName", this.lastName);
        serializer.writeLong("dateOfBirth", this.dateOfBirth.getTime());
        serializer.writeObject("country", (SerializableEntity)this.country);
        serializer.writeString("passport", this.passport);
        serializer.writeString("address", this.address);
        serializer.writeString("contactNumber", this.contactNumber);
        serializer.writeString("email", this.email);
    }
    
    public String getFirstName() {
        return this.firstName;
    }
    
    public String getLastName() {
        return this.lastName;
    }
    
    public Date getDateOfBirth() {
        return this.dateOfBirth;
    }
    
    public Country getCountry() {
        return this.country;
    }
    
    public String getPassport() {
        return this.passport;
    }
    
    public String getAddress() {
        return this.address;
    }
    
    public String getContactNumber() {
        return this.contactNumber;
    }
    
    public String getEmail() {
        return this.email;
    }
    
    public UUID getId() {
        return this.id;
    }
}
