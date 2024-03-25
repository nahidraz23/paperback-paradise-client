const Banner = () => {
    return (
        <div className="h-[555px] bg-[#1313130d] rounded-2xl">
            <div className="flex items-center px-32 py-20">
                <div className="space-y-12">
                    <h1 className="font-playfair text-5xl font-bold  leading-normal">Embark on a Literary Journey: Explore Captivating Worlds Through Timeless Stories</h1>
                    <button className="btn bg-[#23BE0A] text-xl font-bold text-white">View The List</button>
                </div>
                <div className="">
                    <img src="../../public/the-alchemsit.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;