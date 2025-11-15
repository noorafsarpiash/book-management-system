import React, { useEffect } from 'react'
import { useBooks } from '../../context/BookContext'
import BookGrid from './BookGrid';
import CategoryNav from './CategoryNav';
import SortBooks from './SortBooks';
import Pagination from './Pagination';
import axios from 'axios';
import { baseUrl } from '../../utils/baseUrl';

const Shop = () => {
    const { books,
        currentBook,
        loading,
        error,
        filters,
        pagination,
        fetchBooks,
        clearCurrentBook,
        updateFilters,
    } = useBooks();

    const categories = ["All Collections", "Fiction", "Adventure", "Romance", "Dystopian", "Historical", "Non-Fiction"]

    useEffect(() => {
        fetchBooks();

    }, [filters, fetchBooks])

    const handleCategoryChange = (category) => {
        updateFilters({
            genre: category === "All Collections" ? "" : category,
            page: 1
        })
    }


    const handleSortChange = (sortConfig) => {
        updateFilters({
            sortBy: sortConfig.sortBy,
            sortOrder: sortConfig.order,
            page: 1
        })
    }


    const handlePageChange = (newPage) => {
        updateFilters({
            page: newPage,
        })

    }

    const handleDeleteBook = async (id) => {
        try {
            await axios.delete(`${baseUrl}/books/${id}`);
            alert('Book deleted successfully');
        } catch (error) {
            console.error('Error deleting book:', error.message);
            alert("Error deleting book");
        }
    };





    return (
        <div className='container mx-auto px-4 py-12 min-h-screen'>

            <div className='flex justify-between items-center flex-wrap border-b border-gray-200 pb-4'>

                <CategoryNav
                    categories={categories}
                    activeCategory={filters.genre || "All Collections"}
                    onCategoryChange={handleCategoryChange}
                />

                <div className='py-4 flex justify-end px-4'>
                    <SortBooks currentSort={{
                        sortBy: filters.sortBy,
                        order: filters.order
                    }}
                        onSortChange={handleSortChange}
                    />
                </div>

            </div>

            <div className='py-4 text-gray-600 px-4'>
                Showing {pagination?.totalBooks > 0 ? (pagination.currentPage - 1) * filters.limit + 1 : 0} - <span>{Math.min(pagination.currentPage * filters.limit, pagination.totalBooks)} </span> of {pagination.totalBooks} books

            </div>

            <div className='py-8 md:px-4'>
                <BookGrid books={books} loading={loading} error={error} onDeleteBook={handleDeleteBook} />
            </div>


            {pagination.totalpages > 1 && (<Pagination
                totalPages={pagination.totalpages}
                currentPage={pagination.currentPage}
                onPageChange={handlePageChange}

            />)}




        </div>
    )
}

export default Shop