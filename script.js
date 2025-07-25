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
function loadLibrary(library) {
    // Update active button
    document.querySelectorAll('.library-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') === `loadLibrary('${library}')`) {
            btn.classList.add('active');
        }
    });

    // Determine CSV file based on library
    let csvFile;
    if (library === 'pavel') {
        csvFile = 'goodreads_export.csv';
    } else if (library === 'daniela') {
        csvFile = 'goodreads_export_daniela.csv';
    } else if (library === 'library') {
        csvFile = 'kniznica.csv';
    }

    fetch(csvFile)
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
                    // Reset filter input
                    document.getElementById('filterInput').value = '';
                    filterBooks(); // Apply filter (empty initially)
                }
            });
        })
        .catch(error => console.error('Error loading CSV:', error));
}

// Load Pavel's books by default when the page loads
window.onload = () => loadLibrary('pavel');
