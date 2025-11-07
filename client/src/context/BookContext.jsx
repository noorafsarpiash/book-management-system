import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const BookContext = createContext()


export const BookProvider = ({ children }) => {

    const [books, setBooks] = useState([])
    const [currentBook, setCurrentBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const value = {
        books,
        currentBook,
        loading,
        error
    }



    const fetchBooks = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get("http://localhost:3000/books")
            console.log(response)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [])





    return (
        <BookContext.Provider value={value}>
            {children}
        </BookContext.Provider>


    )
}


export const useBooks = () => {
    const context = useContext(BookContext);

    if (!context) {
        throw new Error("useBooks must be used within a BookProvider")
    }

    return context;
}