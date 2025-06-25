const CustomerReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Alice Johnson",
            review:
                "The trip was absolutely amazing! Everything was well-organized, and the destinations were breathtaking. Highly recommend!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/1.jpg",
        },
        {
            id: 2,
            name: "Robert Brown",
            review:
                "I had a wonderful experience. The guides were knowledgeable, and the accommodations were top-notch. Will book again!",
            rating: 4,
            image: "https://randomuser.me/api/portraits/men/2.jpg",
        },
        {
            id: 3,
            name: "Sophia Martinez",
            review:
                "A fantastic journey! The itinerary was perfect, and the customer service was excellent. Thank you for an unforgettable trip!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/3.jpg",
        },
        {
            id: 4,
            name: "James Wilson",
            review:
                "The destinations were beautiful, and the trip was well-planned. I enjoyed every moment. Great value for money!",
            rating: 4,
            image: "https://randomuser.me/api/portraits/men/4.jpg",
        },
        {
            id: 5,
            name: "Emma Watson",
            review:
                "This was the best vacation I've ever had! The team was so helpful, and the locations were stunning. Can't wait to book again!",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/5.jpg",
        },
        {
            id: 6,
            name: "Liam Carter",
            review:
                "The trip exceeded my expectations. Everything was seamless, and the activities were so much fun. Highly recommended!",
            rating: 4,
            image: "https://randomuser.me/api/portraits/men/6.jpg",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
                >
                    <img
                        src={review.image}
                        alt={review.name}
                        className="w-24 h-24 rounded-full mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                    <p className="text-gray-600 mt-2">{review.review}</p>
                    <div className="mt-4">
                        {"⭐".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CustomerReviews;