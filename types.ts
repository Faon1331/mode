export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  isFeatured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconName: 'truck' | 'shield' | 'clock';
}

export type ViewMode = 'grid' | 'list';
export type Page = 'home' | 'products' | 'about' | 'contact';
