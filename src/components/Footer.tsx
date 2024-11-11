import React from 'react';
import { Palette, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Palette className="h-6 w-6" />
            <span className="text-xl font-serif">Salyers Interiors</span>
          </div>
          <p className="text-gray-400">
            Creating beautiful spaces that inspire and delight since 2010.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link to="/services" className="block text-gray-400 hover:text-white transition">Services</Link>
            <a href="/#about" className="block text-gray-400 hover:text-white transition">About</a>
            <a href="/#testimonials" className="block text-gray-400 hover:text-white transition">Testimonials</a>
            <a href="/#contact" className="block text-gray-400 hover:text-white transition">Contact</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-gray-400">
            <p>(555) 123-4567</p>
            <p>contact@salyersinteriors.com</p>
            <p>123 Design Street<br />Creative City, ST 12345</p>
          </div>
        </div>
      </div>
    </footer>
  );
}