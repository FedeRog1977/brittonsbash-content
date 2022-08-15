/**
 * Class: maintain information about an electronic device
 *
 * @author(Lewis Britton)
 */
public class Device {
    
    // Defining fields
    private String id, device, type, location;
    private boolean available;
    
    /**
     * Set device attributes
     *
     * @param deviceId to contain string ID of a device
     * @param deviceType to contain string of the type which is device is of
     * @param deviceLocation to contain string description of the location of a device
     * @param deviceAvailable boolean to indicate if a deice is/isn't being used
     */
    public Device(String deviceId, String deviceType, String deviceLocation, boolean deviceAvailable) {
        id = "";
        device = deviceId;
        type = deviceType;
        location = deviceLocation;
        available = deviceAvailable;
    }

    /**
     * Get and set values
     *
     * @param device relative to ID of a device being used by a member
     */
    public void setUserId(Member device) {
        if (Member.device == device) {
            id = Member.id;
        } else
            id = null;
    }

    public String getDevice() {
        return device;
    }

    public String getType() {
        return type;
    }
    
    public String getLocation() {
	return location;
    }

    /**
     * Check availability
     */
    public boolean Available() {
        if (id == null) {
            available = true;
        } else
            available = false;
    }
    
    /**
     * Print details
     */
    public void printDevice() {
        String availability = "";
        System.out.println("\nDevice ID: " + device + "\nDevice Type: " + type + "\nLocation: " + location);
        if (available == false) {
            availability = "\nThis device is not available to use, it's being used by (Member ID): " + id + "\n";
        }
        else if (available == true) {
            availability = "\nThis device is available to use" + "\n";
        }
        System.out.println(availability);
    }

}
