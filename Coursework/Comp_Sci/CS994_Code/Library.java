import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

/**
 * Class: maintain information about all library contents
 *
 * @author(Lewis Britton)
 */
public class Library {
    
    //Defining fields
    private ArrayList<Resource> resources;
    private ArrayList<Member> members;
    private Scanner input = new Scanner(System.in);

    public Library() {
    }

    /**
     * Set values
     *
     * @param resource relative to Resource class
     */
    public void setResources(Resource resource) {
        resources = new ArrayList<>();
	resources.add(resource);
    }

    /**
     * @param member relative to Member class
     */
    public void setMembers(Member member) {
        members = new ArrayList<>();
        members.add(member);
    }

    /**
     * Search and return resource from resources
     *
     * @param isbn to search for and potentially match a resource ISBN
     */
    public void searchReturn(String isbn) {
        for (Resource isbn: resources) {
            if (isbn.getIsbn() == isbn) {
                return isbn;
            } else
                return null;
        }
    }

    /**
     * Search by ISBN and print resource from resources
     *
     * @param isbn to search for and potentially match a resource ISBN
     */
    public void searchIsbnPrint(String isbn) {
        for (Resource isbn: resources) {
	    if (isbn.type == "book") {
                if (isbn.getIsbn() == isbn) {
                    isbn.printResource();
	        }
            } else
                System.out.println("Resource not found.");
	System.out.println(isbn.resources.size());
        }
    }

    /**
     * Search by author and print resource from resources
     *
     * @param author to search for and potentially match a resource author
     */
    public void searchAuthPrint(String author) {
        for (Resource author: resources) {
            if (author.getAuthor() == author) {
                author.printResource();
            } else
                System.out.println("Resource not found.");
        System.out.println(author.resources.size());
        }
    }

    /**
     * Simulate title editing
     *
     * @param isbn to search for and potentially match a resource ISBN
     * @param newTitle input string intended to replace title of target isbn resource
     */
    public void editResourceTitle(String isbn, String newTitle) {
        for (Resource isbn: resources) {
            if (isbn.getIsbn == isbn) {
                isbn.title = newTitle;
	    } else
		System.out.println("Resource not found.");
	}
    }

    /**
     * Remove resource w/ search criteria
     *
     * @param isbn to search for and potentially match a resource ISBN
     */
    public void removeResource(String isbn) {
        for (Resource isbn: resources) {
            if (isbn.getIsbn == isbn) {
                resources.remove(isbn);
		System.out.println("Resource " + isbn + " successfully removed.");
	    } else
                System.out.println("Resource not found.");
	}
    }	

    /**
     * Remove resource at index position
     *
     * @param index integer to represent a numerical position in the resources array
     */
    public void removeResourcePosition(int index) {
        if (index >=0 && index < resources.size()) {
            String resource = resources.get(index);
            resources.remove(index);
            System.out.println("Resource at index " + index + " successfully removed.");
        } else
            System.out.println("Position not found.");
    }

    /**
     * Return number of resources in the library
     *
     * @return N resources in library
     */
    public int nResources() {
        return resources.size();
    }

    /**
     * Print details of available books
     */
    public void printResourcesAvailable() {
        for (Resource resource: resources) {
	    if (resource.type == "book") {
                if (resource.available == true) {
	            resource.printResource();
	        } else
		    System.out.println("No resources available.");
	    } else if (resource.type == "ebook") {
		System.out.println("This is an e-resource.");
	    }
	}
    }

    /**
     * Print all details of library (resources and members)
     */
    public void printLibrary() {
	System.out.println("Resources in Library:\n");
        for (Resource resource: resources) {
            resource.printResource();
	}
	System.out.println("Members of Library:\n");
	for (Member member: members) {
	    member.printMember();
	}
    }

    /**
     * Add resource to library
     *
     * @param resource relative to Resource class
     */
    public void addResource(Resource resource) {
        String isbn, title, author, genre;
	Resource resource = new Resource(isbn, title, author, genre);
	resources.add(resource);
    }
   
    /**
     * Simulate lending of a resource (book)
     *
     * @param book relative to Book class
     * @param member relative to Member class
     */
    public void lendResource(Book book, Member member) {
	if (members.contains(member)) {
            for (Book book: resources) {
	        if (book.available == true); {
                    if (books.contains(book)) {
                        book.setBorrowerId(member.getId());
		    } else if (member.boorwed.size() > 5) {
                        System.out.println("You cannot borrow more than 5 books at a time.");
		    } else
		        System.out.println("Resource not found.");
	        }
	    }
	} else
	    System.out.println("Member not found.");
    }

    /**
     * Simulate returning of a resource (book)
     *
     * @param book relative to Book class
     * @param isDamaged to indicate whether the book being returned is/isn't damaged
     * @param damage to contain string indicating damage inflicted upon the book 
     */
    public void returnResource(Book book, Boolean isDamaged, String damage) {
        if (book.id == null) {
            System.out.println("Book is not out on loan.");
	} else if (resources.contains(book)) {
	    if (isDamaged == true) {
                for (Book book: books) {
                    book.setDamage(damage);
                    book.id = null;
		}
	    } else
		for (Book book: books) {
		    book.id = null;
		}
	} else
	    System.out.println("Resource not found.");
    }

    /**
     * Simulate sending message to library member
     *
     * @param message to contain string resembling a message being sent
     */
    public void sendMessage(String message) {
        for (Member member: members) {
            if (member.borrowed.isEmpty()) {
                continue;
	    } else
                member.setNotifications(message);
	}
    }

    /**
     * Print all details of physical books
     */
    public void printBooks() {
        for (Resource resource: resources) {
            if (resource.type == "book") {
                resource.printResource();
	    }
	}
    }

    /**
     * Print all details of ebooks
     */
    public void printEbooks() {
        for (Resource resource: resources) {
            if (resource.type == "ebook") {
                resource.printResource();
	    }
	}
    }
   
}    
