import React, { useEffect, useState } from 'react';
import { supabase, type Project } from '../lib/supabase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Loader2 } from 'lucide-react';

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    setLoading(false);

    if (error) {
      console.error('Error loading projects:', error);
      return;
    }

    setProjects(data || []);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Portfolio header"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <Navbar />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Explore our collection of thoughtfully designed spaces
          </p>
        </div>
      </header>

      {/* Portfolio Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects available yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.main_image}
                  slug={project.id}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}