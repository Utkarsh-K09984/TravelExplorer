import { useState, useEffect, useRef } from "react";
import { Search, MapPin, Phone } from "lucide-react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Hero = ({ setSearchQuery }) => {
  const [tempQuery, setTempQuery] = useState("");
  const typedElement = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(tempQuery);
  };

  const handleScrollToPackages = () => {
    const packagesSection = document.getElementById("popular-travel-packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Discover Your Perfect Journey",
        "Explore Amazing Destinations",
        "Plan Unforgettable Experiences",
        "Find Your Dream Vacation",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center dark:bg-gray-800"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-white/10 dark:from-black/90 dark:via-black/70 dark:to-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold dark:text-gray-100">
          <span ref={typedElement}></span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 dark:text-gray-300">
          Explore amazing destinations and plan unforgettable experiences
        </p>

        {/* Tagline */}
        <p className="mt-2 text-sm md:text-base text-gray-300 italic">
          "Your journey begins here. Let us take you to your dream destination."
        </p>

        {/* Search Bar */}
        <div className="mt-8 w-full max-w-lg mx-auto">
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-3 bg-white/20 backdrop-blur-md rounded-xl shadow-xl overflow-hidden p-2 border border-white/30"
          >
            <div className="flex items-center flex-1 px-4">
              <Search className="h-5 w-5 text-white" />
              <input
                type="text"
                placeholder="Search destinations..."
                className="ml-3 flex-1 bg-transparent text-white placeholder-gray-300 focus:outline-none"
                value={tempQuery}
                onChange={(e) => setTempQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 text-sm md:text-base font-medium rounded-lg"
            >
              Search
            </button>
          </form>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 text-sm md:text-base font-medium rounded-lg"
          >
            Explore Packages
          </button>
          <button
            
            className="bg-gray-700 hover:bg-gray-800 transition-all text-white px-6 py-3 text-sm md:text-base font-medium rounded-lg"
          >
            Contact Us
          </button>
        </div>

        {/* Features Section */}
          <div className="mt-12 max-w-xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-500" />
                <span>Top Destinations</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-blue-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Search className="h-6 w-6 text-blue-500" />
                <span>Affordable Prices</span>
              </div>
            </div>
          </div>

        
      </motion.div>
    </div>
  );
};

export default Hero;
