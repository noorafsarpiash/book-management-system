import React, { useEffect, useState } from 'react'
import { useBooks } from '../../context/BookContext'

const Home = () => {
    const { books,
        currentBook,
        loading,
        error } = useBooks();

    console.log(books)
    return (
        <div>
            Home
        </div>
    )
}

export default Home