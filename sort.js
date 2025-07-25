// Object to track sort direction for each column
let sortDirections = {
    title: 1,
    author: 1,
    pubYear: 1,
    dateRead: 1
};

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
    
    // Redisplay the sorted books
    displayBooks();
}
