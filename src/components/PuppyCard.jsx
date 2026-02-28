import Button from './Button';

function PuppyCard({ puppy }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={puppy.image}
        alt={puppy.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{puppy.name}</h3>
        <p className="text-amber-600 font-semibold mb-1">{puppy.breed}</p>
        <p className="text-gray-600 text-sm mb-3">{puppy.age} old</p>
        <p className="text-gray-700 mb-4">{puppy.description}</p>
        <Button onClick={() => alert(`Thank you for your interest in ${puppy.name}! Our team will contact you soon.`)}>
          Adopt Me
        </Button>
      </div>
    </div>
  );
}

export default PuppyCard;
