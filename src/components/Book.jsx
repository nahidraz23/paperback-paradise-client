const Book = ({ book }) => {

    const { image, tags, bookName, author, category, rating } = book;

    return (
        <div className="card bg-base-100 border-2 p-6">
                <div className="p-5 flex justify-center bg-[#f3f3f3] rounded-2xl">
                    <img src={image} alt="Shoes" className="rounded-xl h-[230px]" />
                </div>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By : </p>
                <hr className="my-5 border-dashed" />
            </div>
        </div>
    );
};

export default Book;