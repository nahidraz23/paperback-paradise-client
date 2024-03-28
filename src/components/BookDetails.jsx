import { Link, useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
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
                    autoClose: 2000,
                }
            )
        }
        else {
            toast.error(`You already marked "${bookName}" book as read`, {
                autoClose: 2000,
            });
        }
    };

    const handleWishList = () => {

        const exist = getReadBook.find(book => book === bookId);

        if (!exist) {
            saveWishList(bookId);

            toast.success(`"${bookName}" book added to wishtlist`,
                {
                    autoClose: 2000,
                }
            )
        }
        else {
            toast.error(`You already read "${bookName}" book`, {
                autoClose: 2000,
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
                    <h1 className="font-playfair font-bold text-4xl text-[#6C106C]">{bookName}</h1>
                    <h2 className="font-work-sans text-xl font-medium text-[#ffac33]">By : {author}</h2>
                </div>
                <hr className="my-5" />
                <div>
                    <h1 className="text-xl font-work-sans font-medium text-[#328eff]">{category}</h1>
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
                                    <h1 className="font-work-sans font-medium text-[#9333ea] bg-[#FFF0FF] p-2 bg-opacity-40 rounded-full">{tag}</h1>
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
                    <Link onClick={() => handleRead()} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white hover:font-semibold text-lg font-semibold">Read</span>
                    </Link>
                    <Link onClick={() => handleWishList()} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-[#50b1c94d] text-[#50b1c9] inline-block">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#50b1c9] group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white hover:font-semibold text-lg font-semibold">Wishlist</span>
                    </Link>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default BookDetails;