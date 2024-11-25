export default function AboutPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 text-white">
            <div className="max-w-3xl text-center px-6 py-12 bg-gray-900 rounded shadow-md">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-lg mb-6">
                    Welcome to our video editing service! We specialize in turning your raw footage into professionally polished videos that capture your vision perfectly.
                </p>
                <p className="text-lg mb-6">
                    Whether you need help with personal projects, business promotions, or social media content, our team is dedicated to delivering high-quality results tailored to your needs.
                </p>
                <p className="text-lg mb-6">
                    With years of experience in video editing and a passion for creativity, we strive to provide exceptional service and ensure your satisfaction.
                </p>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                    <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md">
                        <li>Fast turnaround time</li>
                        <li>Affordable pricing</li>
                        <li>Customizable edits based on your requirements</li>
                        <li>Expertise in modern editing tools and techniques</li>
                    </ul>
                </div>
                <div className="mt-6">
                    <p className="text-lg">
                        Let us help you bring your ideas to life. We look forward to working with you!
                    </p>
                </div>
            </div>
        </div>
    );
}
