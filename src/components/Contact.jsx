import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const notify = () => toast.success("Your Request send Successfully", {
        autoClose: 2000,
    });

    return (
        <div>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
                <div className="flex flex-col items-center">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold text-center leading-tight lg:text-5xl">Let's talk!</h2>
                    </div>
                    <div className="flex justify-center">
                        <img src="https://i.ibb.co/6mVxTB4/contact-us.png" alt="" className="lg:p-6" />
                    </div>
                </div>
                <div className="flex w-full items-center">
                    <div novalidate="" className="space-y-6 w-full items-center">
                        <div>
                            <label for="name" className="text-sm">Full name</label>
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
                        <button onClick={notify} className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default Contact;