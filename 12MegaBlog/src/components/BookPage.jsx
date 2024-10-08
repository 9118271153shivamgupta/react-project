import React from 'react';

// Sample book data with online images and titles
const books = [
  { id: 1, title: "The Great Gatsby", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg", url: "#" },
  { id: 2, title: "1984", image: "https://covers.openlibrary.org/b/id/1532570-L.jpg", url: "#" },
  { id: 3, title: "To Kill a Mockingbird", image: "https://covers.openlibrary.org/b/id/8222116-L.jpg", url: "#" },
  { id: 4, title: "The Catcher in the Rye", image: "https://covers.openlibrary.org/b/id/8230283-L.jpg", url: "#" },
];

function BookPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Books Collection</h1>
      <div className="container mx-auto px-4">
        {/* Display books in a grid with exactly 4 columns */}
        <div className="grid grid-cols-4 gap-8">
          {books.map((book) => (
            <div key={book.id} className="group relative cursor-pointer">
              {/* Clickable Book Image */}
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-semibold">
                  {book.title}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookPage;
