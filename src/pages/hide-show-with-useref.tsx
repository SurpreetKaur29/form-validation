import React, { useRef } from "react";

const Login: React.FC = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const handleShowClick = () => {
        if (formRef.current) {
            formRef.current.style.display = "block";
        }
    };

    const handleHideClick = () => {
        if (formRef.current) {
            formRef.current.style.display = "none";
        }
    };

    return (
        <>
            <div className="text-center">
                <button
                    type="button"
                    onClick={handleShowClick}
                    className={`mt-4 mr-2 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mx-auto`}
                >
                    Show
                </button>
                <button
                    type="button"
                    onClick={handleHideClick}
                    className={`mt-4 ml-2 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mx-auto`}
                >
                    Hide
                </button>
            </div>
            <div
                className={`relative isolate overflow-hidden bg-gray-900 py-4 mx-10 my-5`}
                ref={formRef}
                style={{ display: "block" }}
            >
                <div className="mx-auto max-w-[300px]">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
                        Login
                    </h2>
                    <form className="mt-6">
                        <div className="mt-4">
                            <label htmlFor="name" className="block mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 w-full"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email-address" className="block mb-2">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 w-full"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="mt-4 rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mx-auto"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
