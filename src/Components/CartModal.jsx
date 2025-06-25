import { X } from "lucide-react";
import Footer from "./Footer";

const CartModal = ({ cart, onClose }) => {
    return (<>
    
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                {/* Background overlay */}
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose}></div>
                {/* Modal content */}
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-bold">Your Cart</h2>
                        <button onClick={onClose}>
                            <X className="h-6 w-6 text-gray-500" />
                        </button>
                    </div>
                    <div className="mt-4">
                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <div key={item.id} className="border-b py-2">
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-sm text-gray-600">${item.price}</p>
                                    <p className="text-sm text-gray-600">Travelers: {item.travelers}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Your cart is empty.</p>
                        )}
                    </div>
                    {cart.length > 0 && (
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Proceed
                        </button>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default CartModal;