
import { Link } from "react-router-dom";
import { Shirt } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="py-6 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md fixed top-0 w-full z-50">
      <Link to="/" className="text-2xl font-bold tracking-tight">
        kozzie
      </Link>
      <div className="flex items-center gap-8">
        <Link to="#shirts" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
          <Shirt className="w-5 h-5" />
          <span>Shirts</span>
        </Link>
        <Link to="#hoodies" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
          <Shirt className="w-5 h-5 rotate-180" />
          <span>Hoodies</span>
        </Link>
        <Link to="#beanies" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
          <Shirt className="w-5 h-5 -rotate-90" />
          <span>Beanies</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
