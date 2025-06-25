import Footer from "./Footer";

const AboutUs = () => {
    return (
        <>
        
        <div className= " mt-5 bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        About Us
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Learn more about who we are and what we do.
                    </p>
                </div>

                <div className="mt-12 space-y-8">
                    {/* Section 1: Introduction */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Who We Are
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Welcome to <strong>TravelExplorer</strong>, your trusted partner in creating unforgettable travel experiences. Founded in <strong>2010</strong>, we specialize in curating personalized travel packages that cater to your unique preferences and needs. Whether you're looking for a relaxing beach getaway, an adventurous mountain trek, or a cultural city tour, we've got you covered.
                        </p>
                    </div>

                    {/* Section 2: Mission */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Our Mission
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Our mission is to inspire and enable people to explore the world by providing exceptional travel services and experiences. We aim to make travel accessible, enjoyable, and stress-free for everyone.
                        </p>
                    </div>

                    {/* Section 3: Vision */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Our Vision
                        </h2>
                        <p className="mt-4 text-gray-600">
                            We envision a world where travel is a source of joy, learning, and connection. Our goal is to become the leading travel company globally, known for our innovation, customer satisfaction, and commitment to sustainability.
                        </p>
                    </div>

                    {/* Section 4: Founding Details */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Our Story
                        </h2>
                        <p className="mt-4 text-gray-600">
                            TravelExplorer was founded in <strong>2010</strong> by a group of passionate travelers who wanted to share their love for exploration with the world. Over the years, we have grown into a team of dedicated professionals who work tirelessly to bring your travel dreams to life.
                        </p>
                    </div>

                    {/* Section 5: Why Choose Us */}
                    <div className="bg-white shadow-lg rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800">
                            Why Choose Us?
                        </h2>
                        <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                            <li>Over a decade of experience in the travel industry.</li>
                            <li>Personalized travel packages tailored to your needs.</li>
                            <li>24/7 customer support to assist you at every step.</li>
                            <li>Commitment to sustainable and responsible tourism.</li>
                            <li>Exclusive deals and offers for our valued customers.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default AboutUs;