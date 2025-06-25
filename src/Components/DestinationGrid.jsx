import DestinationCard from './DestinationCard';
import Footer from './Footer';
import { Card } from './ui/card';

const DestinationsGrid = ({ destinations, onSelectDestination, onBook }) => {
  return (
    <>
      <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <DestinationCard
                destination={destination}
                onSelect={onSelectDestination}
                onBook={onBook}
              />
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DestinationsGrid;