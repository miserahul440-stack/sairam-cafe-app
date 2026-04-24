
export type Language = 'en' | 'mr' | 'hi';

export interface ServiceDetail {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: string;
  posts?: string;
  education?: Record<Language, string>;
  fees?: string;
  documents?: Record<Language, string[]>;
  ageLimit?: string;
  startDate?: string;
  endDate?: string;
  whatsappMessage: Record<Language, string>;
}

export interface Category {
  id: string;
  sectionId: string;
  name: Record<Language, string>;
  icon: string;
  badge?: string;
}
