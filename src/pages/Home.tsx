import React from 'react';
import { ChevronDown, Phone, Mail, MapPin, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Luxurious interior"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <Navbar />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Transform Your Space Into
            <br />
            Something Extraordinary
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Elevating spaces with timeless design and unparalleled attention to detail
          </p>
          <a
            href="#contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Get Started
          </a>
          <a href="#about" className="absolute bottom-8 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Crafting Beautiful Spaces Since 2010</h2>
              <p className="text-gray-600 mb-6">
                At Salyers Interiors, we believe that your home should be a reflection of your personality
                and lifestyle. Our team of experienced designers works closely with you to create spaces
                that are both beautiful and functional.
              </p>
              <p className="text-gray-600">
                With over a decade of experience in interior design, we've transformed countless homes
                across the country, earning a reputation for excellence and attention to detail.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
                alt="Interior design project"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
                alt="Interior design project"
                className="rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Working with Salyers Interiors was an absolute pleasure. They transformed our house into a home we love.",
                author: "Sarah Johnson",
                role: "Homeowner"
              },
              {
                text: "The attention to detail and creativity brought to our project exceeded all expectations.",
                author: "Michael Chen",
                role: "Property Developer"
              },
              {
                text: "Professional, creative, and incredibly talented. I couldn't be happier with the results.",
                author: "Emily Williams",
                role: "Restaurant Owner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <Star className="h-6 w-6 text-yellow-400 mb-4" />
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">Let's Create Something Beautiful Together</h2>
              <p className="text-gray-600 mb-8">
                Ready to transform your space? Contact us today for a consultation and let's bring your
                vision to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span>contact@salyersinteriors.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span>123 Design Street, Creative City, ST 12345</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}