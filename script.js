// Function to load and display the CSV data
function loadBooks() {
    // Fetch the CSV file
    fetch('goodreads_export.csv')
        .then(response => response.text())
        .then(data => {
            // Parse CSV data with Papa Parse
            Papa.parse(data, {
                header: true, // Use first row as headers
                skipEmptyLines: true, // Skip empty lines
                complete: function(results) {
                    const books = results.data.map(row => ({
                        title: row['Title'] || '', // Get Title from CSV
                        author: row['Author'] || '', // Get Author from CSV
                        pubYear: row['Original Publication Year'] || '', // Get Publication Year
                        dateRead: row['Date Read'] ? new Date(row['Date Read']).getFullYear() : '' // Get Year from Date Read
                    }));

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
                }
            });
        })
        .catch(error => console.error('Error loading CSV:', error));
}

// Load books when the page loads
window.onload = loadBooks;
