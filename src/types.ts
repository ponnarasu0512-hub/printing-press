/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Business' | 'Marketing' | 'Large Format' | 'Custom Gifts' | 'Packaging';
  image: string;
  description: string;
  features: string[];
  pricingStartsAt: number;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  features: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Corporate' | 'Restaurant' | 'Education' | 'Wedding' | 'Packaging' | 'Signage';
  imageBefore?: string;
  imageAfter: string;
  client: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Branding' | 'Packaging' | 'Design' | 'Marketing';
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  salaryRange: string;
  requirements: string[];
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  companyName: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing' | 'File Prep' | 'Shipping';
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface PrintOrder {
  id: string;
  customerName: string;
  productName: string;
  quantity: number;
  paperType: string;
  size: string;
  finishing: string;
  status: 'Received' | 'Proof Approved' | 'In Production' | 'Dispatched' | 'Delivered';
  date: string;
  totalCost: number;
  estimatedDelivery: string;
  fileName?: string;
  specialInstructions?: string;
}
