import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import { supabase } from '../lib/supabase';
import type { Project } from '../lib/supabase';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = React.useState<Project | null>(null);

  React.useEffect(() => {
    if (id) {
      loadProject();
    }
  }, [id]);

  async function loadProject() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error loading project:', error);
      return;
    }

    setProject(data);
  }

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img
            src={project.main_image || '/default-project.jpg'}
            className="w-full h-full object-cover"
            alt={project.title}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <Navbar />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {project.title}
          </h1>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/portfolio')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-12 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Portfolio
          </button>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <p className="text-gray-600 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-600">{project.location}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Year</h3>
                <p className="text-gray-600">{project.year}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scope</h3>
                <p className="text-gray-600">{project.scope}</p>
              </div>
            </div>
          </div>

          {project.gallery_images && project.gallery_images.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-serif mb-8">Project Gallery</h2>
              <ImageGallery images={project.gallery_images} />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}