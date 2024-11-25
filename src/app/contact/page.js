"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage("");

        try {
            // Mock API or Firebase logic for form submission
            console.log("Message Sent: ", formData);

            // Simulate successful form submission
            setTimeout(() => {
                setIsSubmitting(false);
                setResponseMessage("Your message has been sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            }, 1500);
        } catch (error) {
            setIsSubmitting(false);
            setResponseMessage("Failed to send the message. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
            <div className="w-full max-w-lg bg-gray-900 p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 px-4 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none ${isSubmitting && "opacity-50 cursor-not-allowed"
                            }`}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
                {responseMessage && (
                    <p
                        className={`mt-4 text-center ${responseMessage.includes("successfully")
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                    >
                        {responseMessage}
                    </p>
                )}
            </div>
        </div>
    );
}
