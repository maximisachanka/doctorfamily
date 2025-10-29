export interface ServiceData {
    title: string;
    category: string;
    description: string;
    image: string;
    price?: string;
    breadcrumbs: Array<{ label: string; path?: string }>;
    fullDescription: string;
    faq: Array<{ question: string; answer: string }>;
    gallery: string[];
    doctors: Array<{
      id: string;
      name: string;
      position: string;
      experience: string;
      image: string;
    }>;
    reviews: Array<{
      id: string;
      name: string;
      rating: number;
      text: string;
      date: string;
    }>;
  };