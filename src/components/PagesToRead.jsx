import { useLoaderData } from "react-router-dom";
import { getBookInfo } from "../utilities/localStorage";
import { useEffect, useState } from "react";
import CustomShapeBarChart from "./CustomShapeBarChart";

const PagesToRead = () => {

    const books = useLoaderData();

    const [markReadBook, setMarkReadBook] = useState([]);

    useEffect(() => {
        const storedBookId = getBookInfo();

        if (books.length > 0) {

            const readBook = books.filter(book => storedBookId.includes(book.bookId));

            setMarkReadBook(readBook);
        }
    }, [])

    return (
        <div className="p-4 lg:p-0">
            <div className="flex justify-center bg-[#1313131a]  rounded-3xl">
                <CustomShapeBarChart markReadBook={markReadBook}></CustomShapeBarChart>
            </div>
        </div>
    );
};

export default PagesToRead;