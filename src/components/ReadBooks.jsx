import { useOutletContext } from "react-router-dom";
import ReadBook from "./ReadBook";

const ReadBooks = () => {

    const[markReadBook] = useOutletContext();
    
    return (
        <div className="">
            {
                markReadBook.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;