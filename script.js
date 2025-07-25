// Function to load and display the CSV data
function loadBooks() {
    // Fetch the CSV file
    fetch('goodreads_export.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data
            const rows = data.split('\n').slice(1); // Skip header row
            const books = rows.map(row => {
                // Simple CSV parsing (assumes no commas in fields)
                const cols = row.split(',');
                return {
                    title: cols[1], // Title is usually in column 2
                    author: cols[2], // Author is usually in column 3
                    pubYear: cols[5], // Publication Year is usually in column 6
                    dateRead: cols[8] ? new Date(cols[8]).getFullYear() : '' // Date Read is usually in column 9
                };
            });

            // Get the table body
            const tableBody = document.getElementById('booksBody');
            
            // Add each book to the table
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
        })
        .catch(error => console.error('Error loading CSV:', error));
}

// Load books when the page loads
window.onload = loadBooks;
window.onload = loadBooks;
