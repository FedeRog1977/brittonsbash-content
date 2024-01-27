import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Class: test EBook class
 *
 * @author (Lewis Britton)
 */
public class EBookTest {

    /**
     * Create new e-book object
     */
    private EBook ebook = new EBook("Vim Tutor Tutorial", "Vim Diesel", "Vi Improved");

    /**
     * test getting title
     */
    @Test
    void getTitle() {
	assert ebook.getTitle().equals("Vim Tutor Tutorial");
    }

    /**
     * Test getting author
     */
    @Test
    void getAuthor() {
        assert ebook.getAuthor().equals("Vim Diesel");
    }

    /**
     * Test getting genre
     */
    @Test
    void getGenre() {
        assert ebook.getGenre().equals("Vi Improved");
    }

    /**
     * Test setting ISBN (`serial')
     */
    @Test
    void setIsbn() {
        ebook.setIsbn("696226");
	assert ebook.isbn.equals("696226");
    }

    /**
     * Test adding a device
     */
    @Test
    void addDevice() {
        ebook.addDevice(Device("226696", "226", "console", "Vi Wagon", true));
	assert ebook.devices.length == 1;
    }

}
