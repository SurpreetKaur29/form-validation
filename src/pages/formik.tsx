import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

interface LoginProps {
    name: string;
    email: string;
}

const validateschema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string().email("Invalid email address.").required("Email is required."),
});

const Login: React.FC<LoginProps> = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        validationSchema: validateschema,
        onSubmit: values => {
            console.log("values", values);
        }
    });
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-4 h-screen">
            <div className="mx-auto max-w-[300px]">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
                    Login
                </h2>
                <form onSubmit={formik.handleSubmit} className="mt-6">
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
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.name && <p className="text-[red] text-xs mt-1">{formik.errors.name}</p>}
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
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && <p className="text-[red] text-xs mt-1">{formik.errors.email}</p>}
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