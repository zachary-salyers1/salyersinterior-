import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { supabase, uploadProjectImages } from '../../lib/supabase';
import { toast } from 'sonner';
import ImageGallery from '../../components/ImageGallery';
import type { Database } from '../../lib/database.types';

type FormData = Database['public']['Tables']['projects']['Insert'];

export default function ProjectForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const { register, handleSubmit, reset } = useForm<FormData>();

  useEffect(() => {
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
      toast.error('Error loading project');
      return;
    }

    reset(data);
    if (data.gallery_images) {
      setGalleryImages(data.gallery_images);
    }
  }

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;
    
    setLoading(true);
    try {
      const files = Array.from(event.target.files);
      const projectId = id || 'new';
      const urls = await uploadProjectImages(projectId, files);
      setGalleryImages(prev => [...prev, ...urls]);
      toast.success('Images uploaded successfully');
    } catch (error) {
      toast.error('Error uploading images');
      console.error('Upload error:', error);
    } finally {
      setLoading(false);
    }
  }

  function removeImage(index: number) {
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
  }

  async function onSubmit(data: FormData) {
    setLoading(true);

    const projectData = {
      ...data,
      gallery_images: galleryImages
    };

    const { error } = id
      ? await supabase.from('projects').update(projectData).eq('id', id)
      : await supabase.from('projects').insert(projectData);

    setLoading(false);

    if (error) {
      toast.error('Error saving project');
      console.error('Error saving project:', error);
      return;
    }

    toast.success('Project saved successfully');
    navigate('/admin/projects');
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {id ? 'Edit Project' : 'New Project'}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            {...register('title')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register('description')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Main Image URL
          </label>
          <input
            {...register('main_image')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            type="url"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gallery Images
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="mt-1 block w-full"
          />
          <div className="mt-4">
            <ImageGallery images={galleryImages} onRemove={removeImage} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            {...register('location')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            {...register('year')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Scope</label>
          <input
            {...register('scope')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => navigate('/admin/projects')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Project'}
          </button>
        </div>
      </form>
    </div>
  );
}