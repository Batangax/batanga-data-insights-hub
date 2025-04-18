
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="bg-batanga-darkblue py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/06268ca8-7d64-471d-bb7f-b17469e98617.png" 
            alt="Batanga Analytics Logo" 
            className="h-10 mr-4" 
          />
          <span className="text-white text-xl font-bold">Batanga Analytics</span>
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-white hover:text-batanga-skyblue transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-white hover:text-batanga-skyblue transition-colors">
            Services
          </Link>
          <Link to="/industries" className="text-white hover:text-batanga-skyblue transition-colors">
            Industries
          </Link>
          <Link to="/contact" className="text-white hover:text-batanga-skyblue transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
