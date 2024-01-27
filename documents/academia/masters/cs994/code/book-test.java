import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Class: test Book class
 *
 * @author (Lewis Britton)
 */
public class BookTest {

    /**
     * Create new book object
     */
    private Book book = new Book("Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", true);

    /**
     * Test getting of title
     */
    @Test
    void getTitle() {
	assert book.getTitle().equals("Vim Tutor Tutorial");
    }

    /**
     * Test getting of author
     */
    @Test
    void getAuthor() {
        assert book.getAuthor().equals("Vim Diesel");
    }

    /**
     * Test getting of genre
     */
    @Test
    void getGenre() {
        assert book.getGenre().equals("Vi Improved");
    }

    /**
     * Test setting of ISBN
     */
    @Test
    void setIsbn() {
        book.setIsbn("6911");
	assert book.isbn.equals("6911");
    }

    /**
     * Test setting of damage
     */
    @Test
    void setDamages() {
        book.setDamages("Not neoVim.");
	assert book.damages.length == 1;
    }

    /**
     * Test setting of availability
     */
    @Test
    void setAvailable() {
        book.id = "226696";
	assert book.setAvailable() == false;
    }

}
