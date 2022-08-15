import java.util.ArrayList;

/**
 * Class: maintain information about resources (books and ebooks)
 *
 * @author (Lewis Britton)
 */
public class Resource {

    // Defining fields
    private String isbn, id, title, author, genre, type;

    /**
     * Set resource attributes
     */
    public Resource() {
        isbn = "";
        title = "";
        author = "";
        genre = "";
	type = "";
    }

    /**
     * Set resource type
     */
    public void setType() {
	if (Resource.has(Book.available)) {
            type = "book";
	} else
	    type = "ebook";
    }

    /**
     * Set ISBN/Serial relative to type
     */
    public void setRisbn() {
        if (type == "book") {
            isbn = Book.isbn;
	} else if (type == "ebook") {
            isbn = EBook.isbn;
	}
    }

    /**
     * Set title relative to type
     */
    public void setRtitle() {
        if (type == "book") {
            isbn = Book.title;
        } else if (type == "ebook") {
            isbn = EBook.title;
        }
    }

    /**
     * Set author relative to type
     */
    public void setRauthor() {
        if (type == "book") {
            isbn = Book.author;
        } else if (type == "ebook") {
            isbn = EBook.author;
        }
    }

    /**
     * Set genre relative to type
     */
    public void setRgenre() {
        if (type == "book") {
            isbn = Book.genre;
        } else if (type == "ebook") {
            isbn = EBook.genre;
        }
    }

    /**
     * Print resource details
     */
    public void printResource() {
        System.out.println("\nTitle: " + title + "\nAuthor: " + author + "\nISBN/Serial Code: " + isbn +  "\nCategory/Academic Field: " + genre);
    }

}
