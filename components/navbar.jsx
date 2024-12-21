import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyWebsite</Link>
        </div>
        
        {/* Menu Items */}
        <div className="space-x-6 hidden md:flex">
          <Link href="/" className="hover:text-purple-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-purple-300">
            About
          </Link>
          <Link href="/services" className="hover:text-purple-300">
            Services
          </Link>
          <Link href="/contact" className="hover:text-purple-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
