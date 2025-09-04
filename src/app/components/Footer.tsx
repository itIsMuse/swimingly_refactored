export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img src="/MUSEE.png" alt="Swimingly logo" width={80} height={80} />
          </div>
  
          {/* Links */}
          <ul className="flex space-x-6 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#classes" className="hover:text-white">Classes</a></li>
            <li><a href="#packages" className="hover:text-white">Packages</a></li>
            <li><a href="https://wa.link/9ha1kh" target="_blank" className="hover:text-white">Book a Class</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
  
          {/* Copyright */}
          <p className="mt-4 md:mt-0 text-sm">&copy; 2025 Swimingly. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  