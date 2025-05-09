
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-serif font-semibold no-underline flex items-center gap-2">
            <span className="text-primary">Химиялық байланыстар</span>
            <span className="text-xs text-gray-500">Энциклопедия</span>
          </Link>
          
          <div className="hidden md:flex space-x-4 text-sm">
            <Link to="/" className="hover:text-primary hover:underline">Басты бет</Link>
            <Link to="/overview" className="hover:text-primary hover:underline">Жалпы шолу</Link>
            <Link to="/types" className="hover:text-primary hover:underline">Байланыс түрлері</Link>
            <Link to="/ionic" className="hover:text-primary hover:underline">Иондық байланыс</Link>
            <Link to="/covalent" className="hover:text-primary hover:underline">Коваленттік байланыс</Link>
            <Link to="/application" className="hover:text-primary hover:underline">Қолданылуы</Link>
            <Link to="/gallery" className="hover:text-primary hover:underline">Галерея</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
