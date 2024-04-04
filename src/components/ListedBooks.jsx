import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getBookInfo, getWishListInfo } from "../utilities/localStorage";

const ListedBooks = () => {

    const books = useLoaderData();

    const [tabIndex, setTabIndex] = useState(0);
    const [markReadBook, setMarkReadBook] = useState([]);
    const [markWishList, setMarkWishList] = useState([]);

    console.log( markReadBook, markWishList)

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

    const handleSortReadBookByPageCount = () => {
        markReadBook.sort((b1, b2) => (b1.totalPages < b2.totalPages) ? 1 : (b1.totalPages > b2.totalPages) ? -1 : 0);

    }
    const handleSortWishListByPageCount = () => {
        markWishList.sort((a1, a2) => (a1.totalPages < a2.totalPages) ? 1 : (a1.totalPages > a2.totalPages) ? -1 : 0);

    }

    const handleSortByPublishYear = () => {
        markReadBook.sort((b1, b2) => (b1.yearOfPublishing < b2.yearOfPublishing) ? 1 : (b1.yearOfPublishing > b2.yearOfPublishing) ? -1 : 0);

        markWishList.sort((a1, a2) => (a1.yearOfPublishing < a2.yearOfPublishing) ? 1 : (a1.yearOfPublishing > a2.yearOfPublishing) ? -1 : 0);
    }

    const handleSortByRating = () => {
        markReadBook.sort((b1, b2) => (b1.rating < b2.rating) ? 1 : (b1.rating > b2.rating) ? -1 : 0);

        markWishList.sort((a1, a2) => (a1.rating < a2.rating) ? 1 : (a1.rating > a2.rating) ? -1 : 0);
    }

    return (
        <div className="p-4 lg:p-0 min-h-[calc(100vh-180px)]">
            <div className="bg-[#FCF5F8] p-8 rounded-2xl text-center font-work-sans font-bold text-3xl">
                <h1 className="text-purple-600">Books</h1>
            </div>
            <div className="flex justify-center mt-8 items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-purple-50 text-purple-600">
                        Sort By
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="font-medium text-purple-600"><Link onClick={() => {handleSortReadBookByPageCount(); () => handleSortWishListByPageCount()}}>Total Pages</Link></li>
                        <li className="font-medium text-purple-600"><Link onClick={handleSortByPublishYear}>Published Year</Link></li>
                        <li className="font-medium text-purple-600"><Link onClick={handleSortByRating}>Rating</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12">
                <div className="flex -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start ml-2 flex-nowrap ">
                    <Link to={''} onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border-2 border-b-0 ' : 'border-b-2 border-purple-600'} dark:border-purple-600 dark:text-gray-600 rounded-t-2xl`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className={`${tabIndex === 0 ? 'font-bold text-purple-600' : 'font-normal'}`}>Read Books</span>
                    </Link>
                    <Link to={`wishlist`} onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border-2 border-b-0 ' : 'border-b-2 border-purple-600'} dark:border-purple-600 dark:text-gray-600 rounded-t-2xl`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span className={`${tabIndex === 1 ? 'font-bold text-purple-600' : 'font-normal'}`}>Wishlist Books</span>
                    </Link>
                </div>
            </div>
            <Outlet context={[markReadBook, markWishList]} ></Outlet>
        </div>
    );
};

export default ListedBooks;