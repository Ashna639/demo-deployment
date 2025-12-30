import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import AddBook from './AddBook'
import BookList from './BookList'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<AddBook />} />
          <Route path="/books" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
