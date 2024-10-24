import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <Link href="/">Blissful Pages</Link>
        </div>
        <div className="space-x-4">
          <Link href="/about" className="text-white hover:text-gray-400">About</Link>
          <Link href="/research" className="text-white hover:text-gray-400">Research</Link>
          <Link href="/personas" className="text-white hover:text-gray-400">Personas</Link>
          <Link href="/scenario" className="text-white hover:text-gray-400">Scenario</Link>
          <Link href="/storyboard" className="text-white hover:text-gray-400">Storyboard</Link>
          <Link href="/moodboard" className="text-white hover:text-gray-400">Moodboard</Link>
          <Link href="/flowchart" className="text-white hover:text-gray-400">Flowchart</Link>
          <Link href="/wireframe" className="text-white hover:text-gray-400">Wireframe</Link>
          <Link href="/gui" className="text-white hover:text-gray-400">GUI</Link>
          <Link href="/prototype" className="text-white hover:text-gray-400">Prototype</Link>
          <Link href="/references" className="text-white hover:text-gray-400">References</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
