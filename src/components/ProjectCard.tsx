import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  image: string;
  slug: string;
}

export default function ProjectCard({ title, image, slug }: ProjectCardProps) {
  return (
    <Link to={`/portfolio/${slug}`} className="group block relative overflow-hidden">
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/60">
        <h3 className="text-white text-2xl font-serif text-center px-6">
          {title}
        </h3>
      </div>
    </Link>
  );
}