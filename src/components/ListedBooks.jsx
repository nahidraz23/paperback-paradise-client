import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getBookInfo, getWishListInfo } from "../utilities/localStorage";

const ListedBooks = () => {

    const books = useLoaderData();

    const [tabIndex, setTabIndex] = useState(0);
    const [markReadBook, setMarkReadBook] = useState([]);
    const [markWishList, setMarkWishList] = useState([])

    useEffect(() => {
        const storedBookId = getBookInfo();

        if (books.length > 0) {

            const readBook = books.filter(book => storedBookId.includes(book.bookId));

            setMarkReadBook(readBook);
        }
    }, []);

    useEffect(() => {
        const storedBookId = getWishListInfo();

        if (books.length > 0) {

            const readBook = books.filter(book => storedBookId.includes(book.bookId));

            setMarkWishList(readBook);
        }
    }, []);

    return (
        <div>
            <div className="bg-[#1313130d] p-8 rounded-2xl text-center font-work-sans font-bold text-3xl">
                <h1>Books</h1>
            </div>
            <div className="flex justify-center mt-8 items-center">
                <button className="btn ">
                    Sort
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className="mt-12">
                <div className="flex -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
                    <Link to={''} onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600 rounded-t-2xl`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link to={`wishlist`} onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600 rounded-t-2xl`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>
                </div>
            </div>
            <Outlet context={[markReadBook, markWishList]} ></Outlet>
        </div>
    );
};

export default ListedBooks;