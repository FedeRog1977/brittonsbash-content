import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Class: test Library class
 *
 * @author (Lewis Britton)
 */
public class LibraryTest {

    /**
     * Create new library object
     */
    private Library library = new Library();

    /**
     * Test setting of library resources
     */
    @Test
    void setResources() {
	// Adding a book resource
	library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
        assert library.resources.length == 1;
    }

    /**
     * Test setting of library members
     */
    @Test
    void setMembers() {
	// Adding a member
	library.setMembers(Member("226", "Bram", "Moolenaar", "Loyalist", false));
        assert library.members.length == 1;
    }

    /**
     * Test returning of a resource in the library using string ISBN criteria (this example demonstrates a missmatch)
     */
    @Test
    void searchReturn() {
	// Adding a book resource
	library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
	library.searchReturn("1169");
        assert library.searchReturn == null;
    }

    /**
     * Test printing of a resource in the library using string ISBN critera
     */
    @Test
    void searchIsbnPrint() {
	// Adding an ebook resource
	library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "ebook"));
	library.searchIsbnPrint("6911");
	// Not found as <type == ebook>, although ISBNs match
	assert library.searchIsbnPrint.out.println("Resourse not found.");
	// There is one enrty matching the ISBN input
        assert library.searchIsbnPrint().out.println(1);
    }

    /**
     * Test printing of a resource in the library using string author criteria
     */
    @Test
    void searchAuthPrint() {
	// Adding a book resource
        library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
        library.searchAuthPrint("Bram Moolenaar");
	// Not found as author input does not match entry
	assert library.searchAuthPrint.equals("Resource not found.");
	// There are no entrys matching the author input
	assert library.searchAuthPrint().out.println(0);
    }

    /**
     * Test editing of the title of a specific resource in the library
     */
    @Test
    void editResourceTitle() {
	// Adding a book resource
        library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
        library.editResourceTitle("6911", "Vim Tutor Tutorial V.2");
	// Successfull title change as ISBN input matches entry
	assert library.setResourceTitle().equals("6911", "Vim Tutor Tutorial V.2", "Vim Diesel", "Vi Improved", "book");
    }

    /**
     * Test removing a resource from the library
     */
    @Test
    void removeResource() {
        // Adding a book resource
	library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
	library.removeResource("6911");
	assert library.removeResource().out.println("Resource 6911 successfully removed.");
    }

    /**
     * Test removing a resource from the library in a specific position
     */
    @Test
    void removeResourcePosition() {
	// Adding two book resources
        library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
	library.setResources(Resource("6912", "Vim Tutor Tutorial V.2", "Vim Diesel", "Vi Improved", "book"));
	library.removeResourcePosition(1);
	assert library.removeResourcePosition().out.println("Resource 1 successfully removed.");
    }

    /**
     * Test returning of number of resources in the library
     */
    @Test
    void nResources() {
	assert library.setResources == 0;
        // Adding a book resource
        library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
	assert library.setResources == 1;
    }

    /**
     * Test printing of available resources in the library
     */
    @Test
    void printResourcesAvailable() {
        // Adding a book resource
        library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
	library.Book.id = null;
	// Resource is of <type == book> and <available == true>, so resource printed
	assert library.printResourcesAvailable.out.println("\nTitle: Vim Tutor Tutorial\nAuthor: Vim Diesel\nISBN/Serial Code: 6911\nCategory/Academic Field: Vi Improved");
    }

    /**
     * Test printing of the library
     */
    @Test
    void printLibrary() {
        // Adding a book resource
        library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
        // Adding a member
        library.setMembers(Member("226", "Bram", "Moolenaar", "Loyalist", false));
	assert library.printLibrary().length == 2;
    }

    /**
     * Test adding a resource to the library
     */
    @Test
    void addResource() {
        library.addResource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved");
	assert library.resources.length == 1;
    }

    /**
     * Test lending of a resource to a member
     */
    @Test
    void lendResource() {
	// Adding a book resource
        library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
        // Adding a member
        library.setMembers(Member("226", "Bram", "Moolenaar", "Loyalist", false));
	library.lendResource("6911", "226");
        library.Book.available = true;
	assert Book.id.equals("226");
    }

    /**
     * Test returning of a resource from a member
     */
    @Test
    void returnResource() {
        // Adding a book resource
        library.setResources(Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book"));
	library.returnResource("6911", "true", "Not neoVim, so inefficient.");
	assert library.Book.damages.length == 1;
	assert library.Book.id == null;
    }

    /**
     * Test sending message all users
     */
    @Test
    void sendMessage() {
        // Adding a member
        library.setMembers(Member("226", "Bram", "Moolenaar", "Loyalist", false));
	library.sendMessage("Good evening, yes a quite.");
	assert library.Member.notifications.length = 1;
    }

}
