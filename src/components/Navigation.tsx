
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export function Navigation() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-batanga-darkblue py-4 px-6 shadow-lg relative">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/06268ca8-7d64-471d-bb7f-b17469e98617.png" 
            alt="Batanga Analytics Logo" 
            className="h-8 md:h-10 mr-2 md:mr-4" 
          />
          <span className="text-white text-lg md:text-xl font-bold">Batanga Analytics</span>
        </Link>
        
        {isMobile ? (
          <>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-batanga-skyblue transition-colors"
            >
              <Menu size={24} />
            </button>
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-batanga-darkblue shadow-lg py-4 px-6 flex flex-col gap-4 z-50">
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
            )}
          </>
        ) : (
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
        )}
      </div>
    </nav>
  );
}
