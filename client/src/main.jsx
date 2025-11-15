import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'
import Shop from './pages/shop/Shop.jsx'
import EditBook from './pages/editBook/EditBook.jsx'
import BookDetails from './pages/bookDetails/BookDetails'
import AddBook from './pages/addBook/AddBook.jsx'




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/ebooks" element={<div>Ebooks</div>} />
        <Route path="/membership " element={<div>Membership page</div>} />
        <Route path="/books" element={<Shop />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/book/add" element={<AddBook />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
