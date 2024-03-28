import { useLoaderData } from "react-router-dom";
import BengaliBook from "./BengaliBook";

const BengaliBooks = () => {

    const bengaliBooks = useLoaderData();

    return (
        <div className="lg:mt-24 p-4 lg:p-0">
            <div className="mb-10">
                <h1 className="text-4xl font-playfair font-bold text-center text-purple-600">Books</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    bengaliBooks.map(book => <BengaliBook key={book.bookId} book={book}></BengaliBook>)
                }
            </div>
        </div>
    );
};

export default BengaliBooks;