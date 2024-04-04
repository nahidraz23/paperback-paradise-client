import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Root = () => {
    return (
        <div className="">
            <div className="container mx-auto ">
                <div className="h-32">
                    <Header></Header>
                </div>
                <div className="min-h-[calc(100vh-180px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;