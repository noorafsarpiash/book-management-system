import { createContext, useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

const BookContext = createContext()


export const BookProvider = ({ children }) => {

    const [books, setBooks] = useState([])
    const [currentBook, setCurrentBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);




    const [filters, setFilters] = useState({
        page: 1,
        limit: 8,
        genre: "",
        minYear: "",
        maxYear: "",
        author: "",
        maxPrice: "",
        minPrice: "",
        sortBy: "title",
        order: "asc",
        search: "",

    })

    const [pagination, setPagination] = useState({
        totalBooks: 0,
        currentPage: 1,
        totalpages: 1

    })








    const fetchBooks = useCallback(async () => {
        try {
            setLoading(true)
            setError(null)


            const params = new URLSearchParams();
            Object.entries(filters).forEach(([key, value]) => {
                if (value !== "") {
                    params.append(key, value)
                }
            })

            const response = await axios.get(`http://localhost:3000/books?${params}`)
            setBooks(response.data.books)
            setPagination({
                totalBooks: response.data.totalBooks,
                currentPage: response.data.currentPage,
                totalpages: response.data.totalpages
            })


        } catch (error) {
            setError(error);
        } finally {
            setLoading(false)
        }
    }, [filters])

    const clearCurrentBook = useCallback(() => {
        setBooks(null);
    }, [])

    useEffect(() => {
        fetchBooks();
    }, [filters,])

    const value = {
        books,
        currentBook,
        loading,
        error,
        filters,
        pagination,
        fetchBooks,
        clearCurrentBook,
    }




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