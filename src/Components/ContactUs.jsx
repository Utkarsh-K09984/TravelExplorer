import { useState } from "react";
import Footer from "./Footer";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setIsSubmitted(true);
        }
    };

    return (
        <>
        
            <div className=" mt-5 bg-gradient-to-r from-blue-600 to-blue-800 py-16">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="mt-4 text-lg text-blue-200">
                        Have questions or feedback? We'd love to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
                    </p>
                </div>
                {isSubmitted ? (
                    <div className="mt-10 text-center text-white font-medium text-lg">
                        Thank you for reaching out! We'll get back to you soon.
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 bg-white shadow-lg rounded-lg p-8 space-y-6"
                    >
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                className="mt-1 py-3 px-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="mt-1 py-3 px-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Enter your message"
                                rows="4"
                                className="mt-1 py-3 px-4 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ContactUs;