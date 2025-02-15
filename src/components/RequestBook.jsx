import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestBook = () => {

    const notify = () => toast.success("Book Request Successful", {
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

    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col justify-between">
                    <h2 className="text-4xl font-bold text-center leading-tight lg:text-5xl">Request Book</h2>
                </div>
                <div className="">
                    <div novalidate="" className="space-y-6">
                        <div>
                            <label for="name" className="text-sm">Book Title</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label for="name" className="text-sm">Author</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label for="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
                        </div>
                        <button onClick={notify} className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Request</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RequestBook;