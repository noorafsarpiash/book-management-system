import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home.jsx'




createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/ebooks" element={<div>Ebooks</div>} />
        <Route path="/membership " element={<div>Membership page</div>} />
        <Route path="/books" element={<div>Shop page</div>} />
        <Route path="/books/add" element={<div>Add Book page</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
