import { useOutletContext } from "react-router-dom";
import WishList from "./WishList";

const WishLists = () => {
    const[markReadBook ,markWishList] = useOutletContext();

    console.log(markWishList)
    
    return (
        <div>
            <div>
                {
                    markWishList.map(book => <WishList key={book.bookId} book={book}></WishList>)
                }
            </div>
        </div>
    );
};

export default WishLists;