import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getBookInfo, getWishListInfo, saveBookInfo, saveWishList } from "../utilities/localStorage";

const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const book = books.find(book => book.bookId === parseInt(id));

    const { bookId, image, tags, bookName, author, category, rating, review, totalPages, publisher, yearOfPublishing } = book;

    const getWishList = getWishListInfo();
    const getReadBook = getBookInfo();

    console.log(getWishList, getReadBook);

    const handleRead = () => {

        const exist = getReadBook.find(book => book === bookId);

        if (!exist) {
            saveBookInfo(bookId);

            toast.success(`"${bookName}" book marked as read`,
                {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            )
        }
        else {
            toast.error(`You already marked "${bookName}" book as read`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    const handleWishList = () => {

        const exist = getReadBook.find(book => book === bookId);

        if (!exist) {
            saveWishList(bookId);

            toast(`"${bookName}" book added to wishtlist`,
                {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                }
            )
        }
        else {
            toast.error(`You already read "${bookName}" book`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <div className="grid lg:grid-cols-2 gap-12 p-4 lg:p-0">
            <div className="bg-[#1313130d] rounded-2xl flex items-center justify-center  shadow-xl">
                <img src={image} alt="" className="lg:p-20 lg:w-[600px] lg:h-[700px]" />
            </div>
            <div className="flex flex-col">
                <div className="space-y-5">
                    <h1 className="font-playfair font-bold text-4xl">{bookName}</h1>
                    <h2 className="font-work-sans text-xl font-medium text-[#131313cc]">By : {author}</h2>
                </div>
                <hr className="my-5" />
                <div>
                    <h1 className="text-xl font-work-sans font-medium text-[#131313cc]">{category}</h1>
                </div>
                <hr className="my-5" />
                <div>
                    <p className="font-work-sans text-[#131313b3]"><span className="font-work-sans font-bold text-black">Review: </span><span className="leading-relaxed">{review}</span></p>
                </div>
                <div className="flex items-center gap-6 mt-12">
                    <div className="">
                        <h1 className="font-work-sans font-bold">Tag</h1>
                    </div>
                    <div className="flex gap-3 ">
                        {
                            tags.map(tag =>
                                <div key={bookId} className="flex flex-row">
                                    <h1 className="font-work-sans font-medium text-[#23BE0A] bg-green-100 p-2 bg-opacity-40 rounded-full">#{tag}</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
                <hr className="my-5" /> 
                <div>
                    <div className="overflow-x">
                        <table className="table border-separate">

                            <tbody className="">
                                {/* row 1 */}
                                <tr>
                                    <td className="text-[#131313b3] font-work-sans">Number of Pages:</td>
                                    <td className="font-semibold text-black font-work-sans">{totalPages}</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td className="text-[#131313b3] font-work-sans">Publisher:</td>
                                    <td className="font-semibold text-black font-work-sans">{publisher}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td className="text-[#131313b3] font-work-sans">Year of Publishing:</td>
                                    <td className="font-semibold text-black font-work-sans">{yearOfPublishing}</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <td className="text-[#131313b3] font-work-sans">Rating:</td>
                                    <td className="font-semibold text-black font-work-sans">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex gap-4 mt-8">
                    <Link><button onClick={() => handleRead()} className="btn bg-white border-1 font-work-sans text-lg font-semibold">Read</button></Link>
                    <Link><button onClick={() => handleWishList()} className="btn bg-[#50b1c9] text-white font-work-sans text-lg font-semibold">Wishlist</button></Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;