import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Class: test Device class
 *
 * @author (Lewis Britton)
 */
public class DeviceTest {

    /**
     * Create new device object
     */
    private Device device = new Device("696226", "Console", "Vi Wagon", true);

    /**
     * Test setting user ID
     */
    @Test
    void setUserId() {
	assert device.id().equals(null);
	device.setUserId("226696");
	assert device.id().equals("226696");
    }
    
    /**
     * Test getting device ID
     */
    @Test
    void getDevice() {
        assert device.getDevice().equals("696226");
    }

    /**
     * Test getting type of device
     */
    @Test
    void getType() {
        assert device.getType().equals("Console");
    }

    /**
     * Test getting location
     */
    @Test
    void getLocation() {
	assert device.getLocation.equals("Vi Wagon");
    }

    /**
     * Test whether a device is available when assigned a user ID
     */
    @Test
    void Available() {
	assert device.available == true;
	device.setUserId("226696");
	assert device.available == false;
    }

}
