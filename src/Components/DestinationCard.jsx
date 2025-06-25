import { useState } from "react";
import { MapPin, Calendar, Star, Heart } from "lucide-react";

const DestinationCard = ({ destination, onSelect, onToggleFavorite, onBook }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (onToggleFavorite) onToggleFavorite(destination);
  };

  const handleBookNow = (e) => {
    e.stopPropagation();
    if (onBook) onBook(destination); // Ensure onBook is called
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all hover:scale-105"
      onClick={() => onSelect(destination)}
    >
      <div className="relative">
        <img className="w-full h-48 object-cover" src={destination.image} alt={destination.title} />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 p-2 rounded-full bg-white opacity-90 hover:opacity-100"
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{destination.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{destination.rating}</span>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <MapPin className="h-4 w-4 text-gray-500" />
          <span className="ml-1 text-sm text-gray-600">{destination.location}</span>
        </div>
        <div className="mt-2 text-sm text-gray-600 line-clamp-2">{destination.description}</div>
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4" />
            <span className="ml-1 text-sm">{destination.duration}</span>
          </div>
          <div className="text-blue-600 font-semibold">${destination.price}</div>
        </div>
        <button
          onClick={handleBookNow}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;