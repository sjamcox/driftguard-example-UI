import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

function About() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Paws & Home</h1>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-amber-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At Paws & Home, we believe every puppy deserves a loving forever home. Our mission is to connect
          wonderful puppies with caring families, ensuring happy and healthy relationships that last a lifetime.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We work with trusted breeders and rescue organizations to provide you with healthy, well-socialized
          puppies ready to join your family. Each puppy receives proper veterinary care, vaccinations, and lots
          of love before finding their new home.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-amber-600 mb-6">Adoption Process</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800 mb-1">Browse Our Puppies</h3>
              <p className="text-gray-600">Explore our available puppies and find the perfect match for your family.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800 mb-1">Submit Application</h3>
              <p className="text-gray-600">Fill out our adoption application to help us understand your home and lifestyle.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800 mb-1">Meet & Greet</h3>
              <p className="text-gray-600">Schedule a visit to meet your potential new family member in person.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800 mb-1">Welcome Home</h3>
              <p className="text-gray-600">Complete the adoption and bring your new furry friend home!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Button onClick={() => navigate('/')}>View Available Puppies</Button>
      </div>
    </div>
  );
}

export default About;
