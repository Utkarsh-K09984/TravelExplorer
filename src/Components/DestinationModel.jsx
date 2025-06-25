import { useState } from "react";
import { MapPin, Calendar, Star, X } from "lucide-react";

const DestinationModal = ({ destination, onClose }) => {
  if (!destination) return null;

  const [selectedDate, setSelectedDate] = useState("");
  const [travelers, setTravelers] = useState(2);

  const handleBookNow = () => {
    alert(`Booking confirmed!\nDestination: ${destination.title}\nDate: ${selectedDate}\nTravelers: ${travelers}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-bold text-gray-900">{destination.title}</h3>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4">
              <img className="w-full h-64 object-cover rounded-lg" src={destination.image} alt={destination.title} />
              <div className="flex items-center mt-4">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span className="ml-1 text-gray-600">{destination.location}</span>
                <span className="mx-2 text-gray-400">•</span>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-gray-600">{destination.rating}</span>
                </div>
                <span className="mx-2 text-gray-400">•</span>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5" />
                  <span className="ml-1">{destination.duration}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{destination.description}</p>
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900">Book this trip</h4>
                <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Travel Date</label>
                    <input 
                      type="date" 
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Travelers</label>
                    <select 
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-gray-900">
                    <span className="text-2xl font-bold text-blue-600">${destination.price}</span>
                    <span className="text-gray-500 text-sm ml-1">/ person</span>
                  </div>
                  <div className="text-gray-900 font-semibold">
                    Total: ${destination.price * travelers}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleBookNow}
            >
              Book Now
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;