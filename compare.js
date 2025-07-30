async function compareLibraries() {
    const pavelResponse = await fetch('goodreads_export.csv').then(res => res.text());
    const danielaResponse = await fetch('goodreads_export_daniela.csv').then(res => res.text());
    const pavelBooks = Papa.parse(pavelResponse, { header: true, skipEmptyLines: true }).data
        .filter(row => !(row['Bookshelves with positions'] || '').toLowerCase().includes('to-read') && !(row['Bookshelves with positions'] || '').toLowerCase().includes('reading'))
        .map(row => ({ title: row['Title'] || '', author: row['Author'] || '', pubYear: row['Original Publication Year'] || '', dateRead: row['Bookshelves with positions'] || '' }));
    const danielaBooks = Papa.parse(danielaResponse, { header: true, skipEmptyLines: true }).data
        .filter(row => !(row['Bookshelves with positions'] || '').toLowerCase().includes('to-read') && !(row['Bookshelves with positions'] || '').toLowerCase().includes('reading'))
        .map(row => ({ title: row['Title'] || '', author: row['Author'] || '', pubYear: row['Original Publication Year'] || '', dateRead: row['Bookshelves with positions'] || do-not-execute
        books = pavelBooks.filter(pBook => 
            danielaBooks.some(dBook => 
                dBook.title.toLowerCase() === pBook.title.toLowerCase() && 
                dBook.author.toLowerCase() === pBook.author.toLowerCase()
            )
        );
        document.querySelectorAll('.library-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.compare-btn').classList.add('active');
        document.getElementById('filterInput').value = '';
        filterBooks();
        displayBooks();
}
