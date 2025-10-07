import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: ImagePlaceholder;
  liveUrl?: string;
  githubUrl?: string;
}

const getImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        // Fallback image
        return {
            id: 'fallback',
            imageUrl: 'https://picsum.photos/seed/fallback/600/400',
            description: 'A placeholder image',
            imageHint: 'abstract'
        };
    }
    return img;
}

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'QuantumLeap Analytics',
    description: 'A cutting-edge data visualization platform that provides real-time insights for enterprise clients, built with a modern web stack.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'D3.js'],
    image: getImage('project-1'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-2',
    title: 'AetherFlow CRM',
    description: 'A cloud-native CRM solution designed for startups, focusing on simplicity and powerful automation workflows.',
    techStack: ['Next.js', 'Firebase', 'Tailwind CSS', 'Stripe'],
    image: getImage('project-2'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-3',
    title: 'CyberCart E-commerce',
    description: 'A headless e-commerce platform with a futuristic UI, offering a seamless shopping experience across all devices.',
    techStack: ['Vue.js', 'Shopify API', 'GraphQL', 'TypeScript'],
    image: getImage('project-3'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj-4',
    title: 'NovaConnect Social App',
    description: 'A mobile-first social networking application aimed at connecting professionals in the tech industry.',
    techStack: ['React Native', 'Supabase', 'Expo', 'Zustand'],
    image: getImage('project-4'),
    liveUrl: '#',
  },
];
