import java.util.ArrayList;
import java.util.Scanner;

/**
 * Class: maintain information about a library member
 *
 * @author(Lewis Britton)
 */
public class Member {
    
    // Defining fields
    private String id, forename, surname, type, device;
    private ArrayList<Book> borrowed;
    private boolean usingDevice;
    private ArrayList<String> notifications;
    
    /**
     * Set member attributes
     *
     * @param memberId to contain string ID of member
     * @param memberForename to contain string first-name of member
     * @param memberSurname to contain string second-name of member
     * @param memberType to contain string indicating type a member is of
     * @param memberUsingDevice boolean to indicate if member is/isn't using a device
     */
    public Member(String memberId, String memberForename, String memberSurname, String memberType, boolean memberUsingDevice) {
        id = memberId;
        forename = memberForename;
        surname = memberSurname;
        type = memberType;
        device = "";
        usingdevice = memberUsingDevice;
    }

    /**
     * Get and set values
     */
    public String getId() {
	return memberId;
    }

    public String getForename() {
        return memberForename;
    }

    public String getSurname() {
        return memberSurname;
    }

    public String getType() {
        return memberType;
    }

    public boolean getDevice() {
        return memberUsingDevice;
    }

    public void setDevice(Device id) {
        if (Device.id == id) {
            device = Device.device;
	} else
	    device = null;
    }

    /**
     * Append book to borrowed books
     *
     * @param borrow to contain details relative to a book
     */
    public void setBorrowed(Book borrow) {
        borrowed = new ArrayList<>();
        borrowed.add(borrow);
    }

    /**
     * Append notification to noifications
     *
     * @param notification to contain string details resembling a message
     */
    public void setNotifications(String notification) {
        notifications = new ArrayList<>();
        notifications.add(notification);
    }

    /**
     * Print all notifications
     */
    public void printNotifications() {
	if (notifications.isEmpty()) {
            System.out.println("No messages to print.");
        } else {
            for (String notification: notifications) {
                System.out.println(notification);
            }
        }
    }

    /**
     * Print books currently borrowed
     */
    public void printBooks() {
        if (borrowed.isEmpty()) {
            System.out.println("No book details to print.");
        } else {
            for (Book borrow: borrowed) {
                System.out.println(borrow.printBook());
            }
        }
    }

    /**
     * Number of books borrowed
     *
     * @return N books borrowed
     */
    public int nBorrowed() {
        return borrowed.size();
    }

    /**
     * Print member details
     */
    public void printMember() {
        System.out.println("\nMember ID: " + id + "\nMember Forename: " + forename + "\nMember Surname: " + surname + "\nMember Type: " + type + "\n");
    }

}
