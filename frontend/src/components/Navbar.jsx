
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Benjamin.dev</h1>
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#about" className="hover:text-blue-600 transition">À propos</a></li>
          <li><a href="#projects" className="hover:text-blue-600 transition">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
