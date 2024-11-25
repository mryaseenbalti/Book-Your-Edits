"use client";

import { useRouter } from "next/navigation";
import { auth } from "@/confiq/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";

export default function HomePage() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleGetStarted = async () => {
        if (user) {
            router.push("/contact"); // Redirect to contact page if logged in
        } else {
            try {
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                if (result.user) {
                    router.push("/contact"); // Redirect to contact page after login
                }
            } catch (error) {
                console.error("Login Error:", error);
            }
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Video Editing Services</h1>
                <p className="mb-6 text-lg">
                    High-quality video editing tailored to your needs. Book now to transform your videos!
                </p>
                <button
                    onClick={handleGetStarted}
                    className="bg-blue-500 px-6 py-2 rounded text-lg hover:bg-blue-600"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}
