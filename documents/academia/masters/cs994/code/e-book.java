import java.util.ArrayList;

/**
 * Class: maintain information about an ebook
 *
 * @author (Lewis Britton)
 */
public class EBook extends Resource {

    // Defining fields
    private ArrayList<Device> devices;

    /**
     * Set ebook attributes
     *
     * @param ebookTitle to contain string title of e-book
     * @param ebookAuthor to contain string author of e-book
     * @param ebookGenre to contain string genre of e-book
     */
    public EBook(String ebookTitle, String ebookAuthor, String ebookGenre) {
        isbn = "";
        title = ebookTitle;
        author = ebookAuthor;
        genre = ebookGenre;
    }

    /**
     * Get and set values
     */
    public void setIsbn(String ebookIsbn) {
        if(ebookIsbn.length() < 6) {
            System.out.println("Serial code cannot be less than six digits.");
        } else
            isbn = ebookIsbn;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getGenre() {
        return genre;
    }

    /**
     * Append device to devices
     *
     * @param device relative to Device class
     */
    public void addDevice(Device device) {
        devices = new ArrayList<Device>();
        devices.add(device);
    }

    public void printEBook() {
        System.out.println("\nTitle: " + title + "\nAuthor: " + author + "Serial Code: " + isbn +  "\nAcademic Field: " + genre + "\nDevices Available: " + devices);
    }

}
