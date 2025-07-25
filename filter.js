// Global array to store filtered books
let filteredBooks = [];

// Function to filter books based on input
function filterBooks() {
    const input = document.getElementById('filterInput').value.toLowerCase();
    
    // Filter books by title
    filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(input)
    );
    
    // Update the global books array temporarily for display
    const originalBooks = books;
    books = filteredBooks;
    displayBooks();
    books = originalBooks; // Restore original books array
}
