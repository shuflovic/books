# Books Overview

A simple web app to manage and view reading lists, hosted at https://shuflovic.github.io/books/.

## Features
- View book collections for Pavel, Daniela, and Owned Library.
- Load data from Goodreads CSV exports (`goodreads_export.csv`, `goodreads_export_daniela.csv`, `kniznica.csv`).
- Filter books by title or author.
- Sort table by Title, Author, Year Published, or Year Read.
- Responsive design with a clean, green-and-gray theme.

## Setup
1. Clone the repository.
2. Ensure CSV files are in the root directory.
3. Open `index.html` in a browser or deploy to GitHub Pages.

## Files
- `index.html`: Page structure.
- `style.css`: Styling.
- `script.js`, `sort.js`, `filter.js`: Data loading, sorting, and filtering.
- CSV files: Book data (e.g., `goodreads_export.csv`).

## Note
The `dateRead` column may need updating to use the correct Goodreads CSV field (`Date Read`).
