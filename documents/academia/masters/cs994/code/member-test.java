import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Class: test Member class
 *
 * @author (Lewis Britton)
 */
public class MemberTest {

    /**
     * Create new member object
     */
    private Member member = new Member("226", "Bram", "Moolenaar", "Loyalist", false);

    /**
     * Test getting of member ID
     */
    @Test
    void getId() {
	assert member.getId().equals("226");
    }

    /**
     * Test getting of member first name
     */
    @Test
    void getForename() {
        assert member.getForename().equals("Bram");
    }

    /**
     * Test getting of member second name
     */
    @Test
    void getSurname() {
        assert member.getSurname().equals("Moolenaar");
    }

    /**
     * Test getting of member type
     */
    @Test
    void getType() {
	assert member.getType.equals("Loyalist");
    }

    /**
     * Test setting of decive used by member
     */
    @Test
    void setDevice() {
	Device.id = "696226";
        assert member.setDevice() == 696226;
    }

    /**
     * Test setting of books borrowed by member
     */
    @Test
    void setBorrowed() {
        member.setBorrowed(Book("Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", true));
	assert member.borrowed.length == 1;
    }

    /**
     * Test setting of notifications
     */
    @Test
    void setNotifications() {
        member.setNotifications("So Bram, tell me: how'd you come up with VIM?!?");
	assert member.notifications.length = 1;
    }

    /**
     * Test printing of notifications held by the member
     */
    @Test
    void printNotifications() {
        assert member.printNotifications() == 0;
        member.setNotifications("So Bram, tell me: how'd you come up with VIM?!?");
	assert member.printNotifications() = 1;
    }

    /**
     * Test printing of books borrowed by the member
     */
    @Test
    void printBooks() {
        assert member.printBooks() == 0;
	member.setBorrowed(Book("Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", true));
        assert member.printBooks() == 1;
    }

    /**
     * Test returning of number of books borrowed
     */
    @Test
    void nBorrowed() {
	assert member.nBorrowed == 0;
        member.setBorrowed(Book("Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", true));
	assert member.nBorrowed == 1;
    }

}
