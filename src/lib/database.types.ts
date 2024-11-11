export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string;
          created_at: string;
          title: string;
          description: string;
          main_image: string | null;
          location: string;
          year: string;
          scope: string;
          gallery_images: string[] | null;
        };
        Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['projects']['Insert']>;
      };
    };
  };
}