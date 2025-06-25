const BookingConfirmation = ({ bookingDetails }) => {
    if (!bookingDetails) return <p>No booking details available.</p>;

    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
                <h1 className="text-3xl font-bold text-gray-900 text-center">Booking Confirmed!</h1>
                <div className="mt-8 bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800">{bookingDetails.title}</h2>
                    <p className="mt-4 text-gray-600">
                        <strong>Travel Date:</strong> {bookingDetails.date}
                    </p>
                    <p className="mt-2 text-gray-600">
                        <strong>Number of Travelers:</strong> {bookingDetails.travelers}
                    </p>
                    <p className="mt-2 text-gray-600">
                        <strong>Total Cost:</strong> ${bookingDetails.totalCost}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;