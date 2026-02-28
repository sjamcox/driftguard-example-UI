import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import PuppyCard from '../components/PuppyCard';
import { puppies } from '../data/puppies';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Paws & Home</h1>
          <p className="text-2xl mb-8">Find your perfect furry companion today!</p>
          <Button onClick={() => navigate('/about')}>Learn About Us</Button>
        </div>
      </div>

      {/* Puppies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Meet Our Adorable Puppies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puppies.map(puppy => (
            <PuppyCard key={puppy.id} puppy={puppy} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
