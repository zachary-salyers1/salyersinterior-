import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';
import type { Database } from './database.types';

const supabaseUrl = 'https://jfydsewaztosuxciopsl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmeWRzZXdhenRvc3V4Y2lvcHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzNDg1ODksImV4cCI6MjA0NjkyNDU4OX0.ARHnSFJBX5l_XEQRZHfJ7hTBd3pHfODeOSW8b3QbZ8c';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export type Project = Database['public']['Tables']['projects']['Row'];

export async function uploadProjectImages(projectId: string, files: File[]): Promise<string[]> {
  const uploadedUrls: string[] = [];

  for (const file of files) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `projects/${projectId}/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('project-images')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw uploadError;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('project-images')
      .getPublicUrl(filePath);

    uploadedUrls.push(publicUrl);
  }

  return uploadedUrls;
}