/**
 * Class: maintain information about a book
 *
 * @author (Lewis Britton)
 */
public class Book extends Resource {

    // Defining fields
    private boolean available;
    private ArrayList<String> damages;

    /**
     * Set book attributes
     *
     * @param bookTitle to contain string title of book
     * @param bookAuthor to contain string author of book
     * @param bookGenre to contain string genre of book
     * @param bookAvailable boolean to indicate if book is/isn't out on loan
     */
    public Book(String bookTitle, String bookAuthor, String bookGenre, boolean bookAvailable) {
        isbn = "";
        id = "";
        title = bookTitle;
        author = bookAuthor;
        genre = bookGenre;
        available = bookAvailable;
    }

    /**
     * Get and set values
     *
     * @param borrowerId string of the ID of the member holding a book
     */
    public void setBorrowerId(String borrowerId) {
        id = borrowerId;
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

    public void setIsbn(String bookIsbn) {
        if(bookIsbn.length() < 4) {
            System.out.println("ISBN cannot be less than four digits.");
        } else
            isbn = bookIsbn;
    }

    /**
     * Append damage notes to damages
     */
    public void setDamages(String damage) {
        damages = new ArrayList<>();
        damages.add(damage);
    }

    /**
     * Check availability
     */
    public boolean setAvailable() {
        if (id == null) {
            available = true;
        } else
            available = false;
    }

    /**
     * Print details
     */
    public void printBook() {
        String availability = "";
        System.out.println("\nTitle: " + title + "\nAuthor: " + author + "\nISBN: " + isbn + "\nCategory: " + genre + "\nDamage/Condition Notes: " + damage);
        if (available == false) {
            availability = "\nThis book is not available to check-out, it's held by (Member ID): " + id.toString() + "\n";
        }
        else if (available == true) {
            availability = "\nThis book is available to check-out" + "\n";
        }
        System.out.println(availability);
    }

}
