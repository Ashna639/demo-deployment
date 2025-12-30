import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function AddBook() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ title: '', author: '', isbn: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://demo-deployment-hxuv.onrender.com/api/books/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    navigate('/books')  // Redirect to book list
  }

  return (
    <div className="max-w-lg max-h-full mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg relative flex ">
      {/* Top Right Button */}
      <div>
        <Link
            to="/books"
            className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 font-semibold transition-colors"
        >
            View Books
        </Link>
      </div>
      
      
      <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-lg shadow-lg relative">
        <h1 className="text-3xl font-bold mb-8 text-center">Add New Book</h1>
        <form onSubmit={handleSubmit}>
            <input
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Book Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
            />
            <input
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Author"
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
            required
            />
            <input
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ISBN (e.g., 9780062315007)"
            value={formData.isbn}
            onChange={(e) => setFormData({...formData, isbn: e.target.value})}
            required
            />
            <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 font-semibold"
            >
            Add Book & View Library
            </button>
        </form>
      </div>
      
    </div>
  )
}
