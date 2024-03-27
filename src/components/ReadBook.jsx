import { Link } from "react-router-dom";

const ReadBook = ({ book }) => {

    const { bookId, image, tags, bookName, author, category, rating, totalPages, publisher, yearOfPublishing } = book;

    return (
        <div className="mt-8 border-2 p-6 rounded-2xl flex flex-col lg:flex-row gap-10">
            <div className="bg-[#1313130d] p-8 rounded-2xl">
                <img src={image} alt="" className="w-[230px] h-[250px]" />
            </div>
            <div className="w-full space-y-5 flex flex-col justify-center">
                <div>
                    <h1 className="font-playfair font-bold text-2xl">{bookName}</h1>
                    <h2 className="font-work-sans font-medium">By: {author}</h2>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                    <div className="">
                        <h1 className="font-work-sans font-bold">Tag :</h1>
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
                    <div className="flex gap-2 text-[#131313cc]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="font-work-sans">Year of Publishing: {yearOfPublishing}</p>
                    </div>
                </div>
                <div className="flex gap-5 text-[#13131399] font-work-sans">
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <p>Publisher: {publisher}</p>
                    </div>
                    <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>

                        <p>Pages: {totalPages}</p>
                    </div>
                </div>
                <hr className="my-5" />
                <div className="flex items-center gap-3 font-work-sans">
                    <div className="bg-[#328eff26] p-3 rounded-full">
                        <h1 className="text-[#328eff] text-center">Category: {category}</h1>
                    </div>
                    <div className="bg-[#ffac3326] p-3 rounded-full">
                        <h1 className="text-[#ffac33] text-center">Rating: {rating}</h1>
                    </div>
                    <Link to={`/book/${bookId}`}><button className="btn rounded-full bg-[#23be0a] text-white font-medium">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ReadBook;