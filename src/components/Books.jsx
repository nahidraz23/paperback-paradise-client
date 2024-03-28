import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="lg:mt-24 p-4 lg:p-0">
            <div className="mb-10">
                <h1 className="text-4xl font-playfair font-bold text-center text-purple-600">Books</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;