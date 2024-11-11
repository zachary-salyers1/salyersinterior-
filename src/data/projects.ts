export interface Project {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  images: {
    url: string;
    caption: string;
  }[];
  details: {
    location: string;
    year: string;
    scope: string;
  };
}

export const projects: Project[] = [
  {
    id: 'contemporary-hyde-park-condo',
    title: 'Contemporary Hyde Park Condo',
    description: 'A modern transformation of a Hyde Park condominium, featuring clean lines, custom cabinetry, and a sophisticated neutral palette that maximizes both style and functionality.',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
        caption: 'Custom kitchen with modern fixtures and clean lines'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
        caption: 'Open concept living space with natural light'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80',
        caption: 'Minimalist dining area with custom lighting'
      }
    ],
    details: {
      location: 'Hyde Park, Chicago',
      year: '2023',
      scope: 'Full Interior Design, Custom Cabinetry, Lighting Design'
    }
  },
  {
    id: 'one-mercer-place',
    title: 'One Mercer Place',
    description: 'A luxurious residential project that combines contemporary design with classic elements, creating a sophisticated and comfortable living space.',
    mainImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
        caption: 'Elegant living room with custom furnishings'
      },
      {
        url: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80',
        caption: 'Master bedroom suite with bespoke details'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80',
        caption: 'Gourmet kitchen with premium finishes'
      }
    ],
    details: {
      location: 'Mercer Island, WA',
      year: '2023',
      scope: 'Interior Design, Space Planning, Custom Furniture'
    }
  },
  {
    id: '580-building',
    title: '580 Building',
    description: 'A modern urban oasis featuring contemporary design elements and custom solutions for optimal city living.',
    mainImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
        caption: 'Contemporary dining space with city views'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&q=80',
        caption: 'Modern living area with custom millwork'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
        caption: 'Sleek kitchen design with integrated appliances'
      }
    ],
    details: {
      location: 'Downtown Seattle',
      year: '2022',
      scope: 'Full Interior Design, Space Planning, Lighting Design'
    }
  }
];