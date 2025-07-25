// Global array to store books data
let books = [];

// Function to display books in the table
function displayBooks() {
    const tableBody = document.getElementById('booksBody');
    tableBody.innerHTML = ''; // Clear table
    books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pubYear}</td>
            <td>${book.dateRead}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to load and display the CSV data
function loadBooks() {
    fetch('goodreads_export.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data with Papa Parse
            Papa.parse(data, {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    books = results.data.map(row => ({
                        title: row['Title'] || '',
                        author: row['Author'] || '',
                        pubYear: row['Original Publication Year'] || '',
                        dateRead: row['Date Read'] ? new Date(row['Date Read']).getFullYear() : ''
                    }));
                    displayBooks(); // Display books initially
                }
            });
        })
        .catch(error => console.error('Error loading CSV:', error));
}

// Load books when the page loads
window.onload = loadBooks;
