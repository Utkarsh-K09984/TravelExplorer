import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import DestinationsGrid from "./Components/DestinationGrid";
import DestinationModal from "./Components/DestinationModel";
import CartModal from "./Components/CartModal";
import Footer from "./Components/Footer";
import { destinationsData } from "./Data/DestinationsData";
import CustomerReviews from "./Components/CustomerReviews";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import CartPage from "./Components/CartPage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

function App() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDestinations, setFilteredDestinations] = useState(destinationsData);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredDestinations(destinationsData);
    } else {
      const lowercaseQuery = searchQuery.toLowerCase();
      const filtered = destinationsData.filter(
        (destination) =>
          destination.title.toLowerCase().includes(lowercaseQuery) ||
          destination.location.toLowerCase().includes(lowercaseQuery) ||
          destination.description.toLowerCase().includes(lowercaseQuery)
      );
      setFilteredDestinations(filtered);
    }
  }, [searchQuery]);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleCloseDestinationModal = () => {
    setSelectedDestination(null);
  };

  const handleOpenCart = () => setShowCart(true);

  const handleCloseCart = () => setShowCart(false);

  const handleBookPackage = (destination) => {
    if (!cart.some((item) => item.id === destination.id)) {
      setCart([...cart, { ...destination, travelers: 1 }]);
    } else {
      alert("This package is already in your cart.");
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar openCart={handleOpenCart} cartCount={cart.length} />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                {/* Hero Section */}
                <Hero setSearchQuery={setSearchQuery} />

                {/* Popular Travel Packages Section */}
                <section id="popular-destinations" className="py-16 bg-gray-100">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                      Popular Travel Packages
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {destinationsData.slice(0, 6).map((destination) => (
                        <Card key={destination.id} className="shadow-lg p-3">
                          <img
                            src={destination.image}
                            alt={destination.title}
                            className=" w-full h-48 object-cover rounded-t-lg"
                          />
                          <CardHeader>
                            <CardTitle className="text-lg font-semibold text-gray-900">
                              {destination.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600">{destination.location}</p>
                            <p className="text-sm text-gray-600">{destination.duration}</p>
                            <p className="text-sm text-gray-600">${destination.price}</p>
                            <Button
                              className="mt-4 w-full cursor-pointer"
                              onClick={() => handleBookPackage(destination)}
                            >
                              Book Now
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Why Choose Us Section */}
                <section id="why-choose-us" className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                      Why Choose Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <Card className="text-center shadow-lg">
                        <CardHeader>
                          <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHF1YWxpdHl8ZW58MHx8fHwxNjg0MjkzNjYz&ixlib=rb-1.2.1&q=80&w=400"
                            alt="Quality Service"
                            className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                          />
                          <CardTitle>Quality Service</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            We provide top-notch services to ensure your travel experience is
                            unforgettable.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="text-center shadow-lg">
                        <CardHeader>
                          <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFmZm9yZGFibGV8ZW58MHx8fHwxNjg0MjkzNzE2&ixlib=rb-1.2.1&q=80&w=400"
                            alt="Affordable Prices"
                            className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                          />
                          <CardTitle>Affordable Prices</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Enjoy the best travel packages at the most competitive prices.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="text-center shadow-lg">
                        <CardHeader>
                          <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHN1cHBvcnR8ZW58MHx8fHwxNjg0MjkzNzYx&ixlib=rb-1.2.1&q=80&w=400"
                            alt="24/7 Support"
                            className="mx-auto mb-4 rounded-full w-24 h-24 object-cover"
                          />
                          <CardTitle>24/7 Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">
                            Our team is available around the clock to assist you with your travel
                            needs.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>

                {/* Customer Reviews Section */}
                <section id="customer-reviews" className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                      What Our Customers Say
                    </h2>
                    <CustomerReviews />
                  </div>
                </section>

                {/* Footer Section */}
                <Footer />
              </div>
            }
          />

          {/* Other Routes */}
          <Route path="/destinations" element={<DestinationsGrid destinations={filteredDestinations} onSelectDestination={handleSelectDestination} onBook={handleBookPackage} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

        {/* Destination Modal */}
        {selectedDestination && (
          <DestinationModal destination={selectedDestination} onClose={handleCloseDestinationModal} />
        )}

        {/* Cart Modal */}
        {showCart && <CartModal onClose={handleCloseCart} cart={cart} />}
      </div>
    </Router>
  );
}

export default App;