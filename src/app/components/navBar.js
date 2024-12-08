import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="flex items-center p-4 bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
        <img src="favicon.png" alt="Logo" className="w-8 h-8" />
          <Link href="/" className = "text-white font-semibold">BlissfulPages</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="text-white hover:text-gray-400">About Us</Link>
          <Link href="/research" className="text-white hover:text-gray-400">Research</Link>
          <Link href="/personas" className="text-white hover:text-gray-400">Personas</Link>
          <Link href="/scenario" className="text-white hover:text-gray-400">Scenario</Link>
          <Link href="/storyboard" className="text-white hover:text-gray-400">Storyboard</Link>
          <Link href="/moodboard" className="text-white hover:text-gray-400">Moodboard</Link>
          <Link href="/flowchart" className="text-white hover:text-gray-400">Flowchart</Link>
          <Link href="/wireframe" className="text-white hover:text-gray-400">Wireframe</Link>
          <Link href="/prototype" className="text-white hover:text-gray-400">Prototype</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
