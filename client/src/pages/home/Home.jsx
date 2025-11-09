import React, { useEffect, useState } from 'react'
import { useBooks } from '../../context/BookContext'
import Hero from '../../components/Hero';

const Home = () => {
    const { books,
        currentBook,
        loading,
        error } = useBooks();

    // console.log(books)
    return (
        <div>
            <Hero />
        </div>
    )
}

export default Home