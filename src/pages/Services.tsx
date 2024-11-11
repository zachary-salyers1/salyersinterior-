import React from 'react';
import { Palette, Sofa, PaintBucket, Lightbulb, Home, Building2, Ruler } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: Sofa,
    title: "Interior Decoration",
    description: "Transform your space with our expert interior decoration services. We carefully select furniture, colors, and accessories that reflect your style and enhance your living space.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
  },
  {
    icon: PaintBucket,
    title: "Color Consultation",
    description: "Our color specialists help you create the perfect palette for your space, considering lighting, architecture, and your personal preferences.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80"
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Enhance your space with expertly planned lighting that creates ambiance and functionality for every room and occasion.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80"
  },
  {
    icon: Home,
    title: "Residential Design",
    description: "Complete home interior design services, from single rooms to entire houses, creating cohesive and beautiful living spaces.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
  },
  {
    icon: Building2,
    title: "Commercial Design",
    description: "Professional interior design solutions for offices, restaurants, hotels, and other commercial spaces that enhance brand identity and functionality.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Optimize your space with our professional planning services, ensuring perfect flow and functionality for your specific needs.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Interior design services"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <Navbar />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Comprehensive interior design solutions tailored to your needs
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="h-6 w-6" />
                      <h3 className="text-xl font-serif">{service.title}</h3>
                    </div>
                    <p className="text-gray-200 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Transform Your Space?</h2>
          <p className="text-gray-600 mb-8">
            Contact us today to discuss your project and discover how we can help bring your vision to life.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}