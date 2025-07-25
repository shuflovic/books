// Object to track sort direction for each column
let sortDirections = {
    title: 1,
    author: 1,
    pubYear: 1,
    dateRead: 1
};

// Current sorted column
let currentSortColumn = null;

// Function to update header classes
function updateHeaderClasses(column) {
    // Remove existing sort classes from all headers
    document.querySelectorAll('#booksTable th').forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
        th.classList.add('sortable');
    });
    
    // Add appropriate class to the sorted column
    const header = document.querySelector(`#booksTable th[onclick="sortTable('${column}')"]`);
    if (header) {
        header.classList.add(sortDirections[column] === 1 ? 'sorted-asc' : 'sorted-desc');
    }
}

// Function to sort the table by a column
function sortTable(column) {
    // Sort the global books array
    books.sort((a, b) => {
        let valA = a[column] || '';
        let valB = b[column] || '';
        
        // Handle numeric columns (pubYear, dateRead)
        if (column === 'pubYear' || column === 'dateRead') {
            valA = parseInt(valA) || 0;
            valB = parseInt(valB) || 0;
            return (valA - valB) * sortDirections[column];
        }
        
        // Handle string columns (title, author)
        return valA.localeCompare(valB) * sortDirections[column];
    });
    
    // Toggle sort direction for next click
    sortDirections[column] = -sortDirections[column];
    
    // Update current sort column
    currentSortColumn = column;
    
    // Update header classes
    updateHeaderClasses(column);
    
    // Redisplay the sorted books
    displayBooks();
}

// Initialize header classes on page load
window.addEventListener('load', () => {
    document.querySelectorAll('#booksTable th').forEach(th => {
        th.classList.add('sortable');
    });
});
