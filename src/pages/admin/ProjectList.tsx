import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pencil, Trash2, LogOut, Plus } from 'lucide-react';
import { supabase, type Project } from '../../lib/supabase';
import { toast } from 'sonner';

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      toast.error('Error loading projects');
      return;
    }

    setProjects(data || []);
  }

  async function deleteProject(id: string) {
    const confirmed = window.confirm('Are you sure you want to delete this project?');
    if (!confirmed) return;

    const { error } = await supabase.from('projects').delete().eq('id', id);

    if (error) {
      toast.error('Error deleting project');
      return;
    }

    toast.success('Project deleted');
    loadProjects();
  }

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error('Error signing out');
      return;
    }
    navigate('/admin');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <div className="flex gap-4">
            <Link
              to="/admin/projects/new"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              <Plus className="h-5 w-5" />
              Add New Project
            </Link>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-500">No projects yet. Create your first project!</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600">{project.location}</p>
                </div>
                <div className="flex gap-4">
                  <Link
                    to={`/admin/projects/${project.id}/edit`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <Pencil size={20} />
                  </Link>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}