import { Link } from "react-router-dom";

const Navbar = () => {
  console.log('Navbar rendered');
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <div className="space-x-4">
        <Link
          to="/"
          className="px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Home
        </Link>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
