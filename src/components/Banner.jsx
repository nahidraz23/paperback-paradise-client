import { Link } from "react-router-dom";
import banner from "../assets/banner.png"

const Banner = () => {

    const bannerStyle = {
        // background: "linear-gradient(128deg, rgba(245,220,255,1) 0%, rgba(255,227,252,1) 46%, rgba(237,238,238,1) 100%)"
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
    }

    return (
        <div className="p-4">
            <div className="h-[555px] rounded-2xl" style={bannerStyle}>
                <div className="flex flex-col-reverse lg:flex-row items-center p-5 lg:px-32 lg:py-20">
                    <div className="space-y-12">
                        <p className="font-playfair lg:text-white text-lg lg:text-5xl font-bold lg:w-2/3 leading-relaxed">Embark on a Literary Journey: Explore Captivating Worlds Through Timeless Stories</p>
                        <div className="flex justify-center lg:justify-start">
                            <Link to={`/listed-books`} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full lg:border-white shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 lg:text-white transition-all duration-300 transform group-hover:translate-x-full ease font-semibold">View The List</span>
                                <span className="relative invisible">View The List</span>
                            </Link>
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