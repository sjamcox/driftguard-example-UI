import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="text-2xl font-bold text-amber-600 hover:text-amber-700">
                Paws & Home
              </Link>
              <div className="flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
