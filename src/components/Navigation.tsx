
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="bg-batanga-darkblue py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          Batanga Analytics
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
