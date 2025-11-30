import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Devy logo" height={20} width={100}/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;