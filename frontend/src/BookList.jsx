import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function BookList() {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const response = await fetch('http://localhost:8000/api/books/')
    const data = await response.json()
    setBooks(data)
  }

  const deleteBook = async (id) => {
    await fetch(`http://localhost:8000/api/books/${id}/`, { method: 'DELETE' })
    fetchBooks()
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Library Collection</h1>
        <Link 
          to="/" 
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 font-semibold"
        >
          Add New Book
        </Link>
      </div>
      
      {books.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-2xl mb-4">No books in library yet</p>
          <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Add your first book
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {books.map(book => (
            <div key={book.id} className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
                <p className="text-gray-600">by {book.author}</p>
                <p className="text-sm text-gray-500">ISBN: {book.isbn}</p>
              </div>
              <button
                onClick={() => deleteBook(book.id)}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
