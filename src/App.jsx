import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-secondary">
        <nav className="bg-bg shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                to="/"
                className="text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
              >
                Paws & Home
              </Link>
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="text-text-secondary hover:text-primary font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-text-secondary hover:text-primary font-medium transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-text-secondary hover:text-primary font-medium transition-colors"
                >
                  Contact
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
  )
}

export default App
