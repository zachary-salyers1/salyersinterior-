import React from 'react';
import { Palette, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-8 max-w-7xl mx-auto">
      <Link to="/" className="flex items-center gap-2 text-white">
        <Palette className="h-8 w-8" />
        <span className="text-2xl font-serif">Salyers Interiors</span>
      </Link>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-8 text-white">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/services" className="hover:text-gray-200 transition">Services</Link>
          <Link to="/portfolio" className="hover:text-gray-200 transition">Portfolio</Link>
          <a href="/#about" className="hover:text-gray-200 transition">About</a>
          <a href="/#testimonials" className="hover:text-gray-200 transition">Testimonials</a>
          <a href="/#contact" className="hover:text-gray-200 transition">Contact</a>
        </div>
        <Link 
          to="/admin" 
          className="flex items-center gap-1 text-white/70 hover:text-white transition text-sm"
          title="Admin Portal"
        >
          <Lock className="h-3 w-3" />
          <span>Admin</span>
        </Link>
      </div>
    </nav>
  );
}