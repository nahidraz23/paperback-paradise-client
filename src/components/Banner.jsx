import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="p-4">
            <div className="h-[555px] bg-[#1313130d] rounded-2xl ">
                <div className="flex flex-col-reverse lg:flex-row items-center p-5 lg:px-32 lg:py-20">
                    <div className="space-y-12">
                        <p className="font-playfair text-lg lg:text-5xl font-bold leading-normal">Embark on a Literary Journey: Explore Captivating Worlds Through Timeless Stories</p>
                        <div>
                            <Link to={`/listed-books`}><button className="btn bg-[#23BE0A] text-xl font-bold text-white">View The List</button></Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/Z2LmyjS/thealchemsit.png" alt="" className="w-1/2 lg:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;