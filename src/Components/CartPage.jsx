import { Link } from "react-router-dom";
import CartItemCard from "./CartItemCard"; // Import the CartItemCard component
import { useState } from "react";
import Footer from "./Footer";

const CartPage = ({ cart, setCart }) => { // Add setCart as a prop
    const [cartDates, setCartDates] = useState({}); // Store selected dates for each package

    const handleDateChange = (itemId, dates) => {
        setCartDates((prevDates) => ({
            ...prevDates,
            [itemId]: dates,
        }));
    };

    const handleRemoveItem = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId)); // Remove the item from the cart
    };

    return (
        <>
        <div className="mt-19 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Cart</h1>
            {cart.length > 0 ? (
                <div className="space-y-6">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
                        >
                            <CartItemCard
                                item={item}
                                onDateChange={handleDateChange} // Pass the date change handler
                            />
                            <button
                                className="mt-2 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
                                onClick={() => handleRemoveItem(item.id)} // Call the remove handler
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-lg font-semibold text-blue-600">
                            ${cart.reduce((sum, item) => sum + item.price, 0)}
                        </span>
                    </div>
                    <button
                        className="mt-4 w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                        onClick={() => console.log("Selected Dates:", cartDates)} // Log selected dates for now
                    >
                        Proceed to Checkout
                    </button>
                </div>
            ) : (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
            )}
            <Link
                to="/"
                className="mt-4 inline-block text-blue-600 hover:underline text-center"
            >
                Continue Shopping
            </Link>
        </div>
        <Footer />
        </>
    );
};

export default CartPage;