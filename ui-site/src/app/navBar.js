import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link href="/">MyLogo</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-white">Home</Link>
          <Link href="/about" className="text-white">About</Link>
          <Link href="/services" className="text-white">Services</Link>
          <Link href="/contact" className="text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
