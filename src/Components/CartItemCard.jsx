import { MapPin, Calendar, Star } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker"; // Install react-datepicker if not already installed
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the date picker

const CartItemCard = ({ item, onDateChange }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        onDateChange(item.id, { startDate: date, endDate });
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
        onDateChange(item.id, { startDate, endDate: date });
    };

    return (
        <div className="flex flex-col md:flex-row items-center p-4">
            {/* Image Section */}
            <div className="w-full md:w-1/3">
                <img
                    className="w-full h-48 object-cover rounded-lg"
                    src={item.image}
                    alt={item.title}
                />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <div className="flex items-center mt-2 text-gray-600">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">{item.location}</span>
                </div>
                <div className="flex items-center mt-2 text-gray-600">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="ml-2">{item.duration}</span>
                </div>
                <div className="flex items-center mt-2 text-gray-600">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span className="ml-2">{item.rating}</span>
                </div>
                <div className="mt-4 text-lg font-semibold text-blue-600">
                    ${item.price}
                </div>

                {/* Date Range Picker */}
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Select Start Date:
                    </label>
                    <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        minDate={new Date(item.schedule.startDate)} // Restrict to package's schedule
                        maxDate={new Date(item.schedule.endDate)} // Restrict to package's schedule
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Select End Date:
                    </label>
                    <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate || new Date(item.schedule.startDate)} // Ensure end date is after start date
                        maxDate={new Date(item.schedule.endDate)} // Restrict to package's schedule
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItemCard;