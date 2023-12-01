import React, { useState } from "react";

interface LoginProps {
    name: string;
    email: string;
    nameError: string;
    emailError: string;
}

const Login: React.FC<LoginProps> = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState({
        nameError: "",
        emailError: "",
    });

    const handleNameChange = (e: any) => {
        setName(e.target.value);
        setError((prevError) => ({ ...prevError, nameError: "" }));
    }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
        setError((prevError) => ({ ...prevError, emailError: "" }));
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (name === "" && email === "") {
            setError({
                nameError: "Name is required.",
                emailError: "Email is required.",
            });
        } else if (name === "") {
            setError({
                nameError: "Name is required.",
                emailError: "",
            });
        } else if (email === "") {
            setError({
                nameError: "",
                emailError: "Email is required.",
            });
        } else {
            setName("");
            setEmail("");
            console.log("Form Submitted!", name, email)
        }
    }

    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-4 h-screen">
            <div className="mx-auto max-w-[300px]">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mt-4">
                        <label htmlFor="name" className="block mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 w-full"
                            placeholder="Name"
                        />
                        {error.nameError && <p className="text-[red] text-xs mt-1">{error.nameError}</p>}
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email-address" className="block mb-2">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            onChange={handleEmailChange}
                            value={email}
                            className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 w-full"
                            placeholder="Enter your email"
                        />
                        {error.emailError && <p className="text-[red] text-xs mt-1">{error.emailError}</p>}
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
        </div >
    )
}

export default Login;