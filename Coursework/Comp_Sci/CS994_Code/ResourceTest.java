import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Class: test Resource class
 *
 * @author (Lewis Britton)
 */
public class ResourceTest {

    /**
     * Create new resource object
     */
    private Resource resource = new Resource("6911", "Vim Tutor Tutorial", "Vim Diesel", "Vi Improved", "book");

    /**
     * Test setting of resource type
     */
    @Test
    void setType() {
        assert resource.setType().equals("book");
    }

    /**
     * Test setting of resource ISBN/`serial'
     */
    @Test
    void setRisbn() {
	assert resource.setRisbn().equals("6911");
    }

    /**
     * Test setting of resource title
     */
    @Test
    void setRtitle() {
	assert resource.setRtitle().equals("Vim Tutor Tutorial");
    }

    /**
     * Test setting of resource author
     */
    @Test
    void setRauthor() {
	assert resource.setRauthor().equals("Vim Diesel");
    }

    /**
     * Test setting of resource genre
     */
    @Test
    void setRgenre() {
	assert resource.setRgenre().equals("Vi Improved");
    }

}
