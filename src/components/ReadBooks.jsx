import { useOutletContext } from "react-router-dom";
import ReadBook from "./ReadBook";

const ReadBooks = () => {

    const[markReadBook, markWishList] = useOutletContext();
    
    return (
        <div>
            {
                markReadBook.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;