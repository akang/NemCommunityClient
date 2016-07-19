package org.nem.ncc.model;

import org.nem.core.serialization.*;

public class Country implements SerializableEntity
{
    private static final String ID_NAME = "id";
    private static final String NAME_NAME = "name";
    private final int id;
    private final String name;
    
    public Country(final int id, final String name) {
        this.id = id;
        this.name = name;
    }
    
    public Country(final Deserializer deserializer) {
        this.id = deserializer.readInt("id");
        this.name = deserializer.readString("name");
    }
    
    public Country(final com.sharedobjects.client.Country country) {
        this(country.getId(), country.getName());
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeInt("id", this.id);
        serializer.writeString("name", this.name);
    }
    
    public int getId() {
        return this.id;
    }
    
    public String getName() {
        return this.name;
    }
    
    public static ObjectDeserializer<Country> getObjectDeserializer() {
        return (ObjectDeserializer<Country>)new ObjectDeserializer<Country>() {
            public Country deserialize(final Deserializer deserializer) {
                return new Country(deserializer);
            }
        };
    }
}
