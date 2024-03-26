const Book = ({ book }) => {

    const {bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <div className="card bg-base-100 border-2 p-6">
            <div className="p-5 flex justify-center bg-[#f3f3f3] rounded-2xl">
                <img src={image} alt="Shoes" className="rounded-xl h-[230px]" />
            </div>
            <div className="card-body">
                <div>
                    {
                        tags.map(tag => 
                            <div key={bookId} className="flex flex-row">
                                <h1>{tag}</h1>
                            </div>
                        )
                    }
                </div>
                <h2 className="text-2xl font-playfair font-bold">{bookName}</h2>
                <p className="font-work-sans font-medium text-[#131313cc]">By : {author}</p>
                <hr className="my-5 border-dashed" />
                <div className="flex justify-between">
                    <div className="font-work-sans font-medium text-[#131313cc]">
                        <p>{category}</p>
                    </div>
                    <div className="flex gap-2 justify-center text-[#131313cc] font-medium font-work-sans">
                        <p>{rating}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;