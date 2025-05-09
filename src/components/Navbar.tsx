
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold no-underline">
            Химиялық байланыстар
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-opacity-80 no-underline">Басты бет</Link>
            <Link to="/overview" className="hover:text-opacity-80 no-underline">Жалпы шолу</Link>
            <Link to="/types" className="hover:text-opacity-80 no-underline">Байланыс түрлері</Link>
            <Link to="/ionic" className="hover:text-opacity-80 no-underline">Иондық байланыс</Link>
            <Link to="/covalent" className="hover:text-opacity-80 no-underline">Коваленттік байланыс</Link>
            <Link to="/application" className="hover:text-opacity-80 no-underline">Қолданылуы</Link>
            <Link to="/gallery" className="hover:text-opacity-80 no-underline">Галерея</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
