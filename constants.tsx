
import React from 'react';
import { 
  User, 
  Settings, 
  Bell, 
  Languages, 
  Home, 
  Briefcase, 
  GraduationCap, 
  Sprout, 
  CreditCard,
  FileText,
  Phone,
  Mail,
  MessageCircle,
  IdCard,
  Layers,
  Printer,
  TrendingUp,
  Landmark,
  Image as ImageIcon,
  Type
} from 'lucide-react';
import { Category, ServiceDetail } from './types';

export const SECTIONS = [
  { id: 'government', name: { en: 'Government Services', mr: 'शासकीय सेवा', hi: 'सरकारी सेवा' }, icon: 'Landmark' },
  { id: 'education', name: { en: 'Education Services', mr: 'शिक्षण सेवा', hi: 'शिक्षण सेवा' }, icon: 'GraduationCap' },
  { id: 'documents', name: { en: 'Maha-E-Seva Kendra', mr: 'महा-ई-सेवा केंद्र', hi: 'महा-ई-सेवा केंद्र' }, icon: 'FileText' },
  { id: 'digital', name: { en: 'Digital Services', mr: 'डिजिटल सेवा', hi: 'डिजिटल सेवा' }, icon: 'Printer' }
];

export const CATEGORIES: Category[] = [
  // Government Section
  { id: 'gov-job', sectionId: 'government', name: { en: 'Govt Job', mr: 'सरकारी नोकरी', hi: 'सरकारी नौकरी' }, icon: 'Briefcase', badge: 'NEW' },
  { id: 'exam-result', sectionId: 'government', name: { en: 'Exam Result', mr: 'परीक्षा निकाल', hi: 'परीक्षा परिणाम' }, icon: 'TrendingUp' },
  { id: 'hall-ticket', sectionId: 'government', name: { en: 'Hall Ticket', mr: 'हॉल तिकीट', hi: 'हॉल टिकट' }, icon: 'IdCard' },
  { id: 'farmer-scheme', sectionId: 'government', name: { en: 'Farmer Scheme', mr: 'शेतकरी योजना', hi: 'किसान योजना' }, icon: 'Sprout', badge: 'HOT' },
  
  // Education Section
  { id: 'college-form', sectionId: 'education', name: { en: 'College Form', mr: 'महाविद्यालयीन फॉर्म', hi: 'कॉलेज फॉर्म' }, icon: 'GraduationCap' },
  { id: 'exam-form', sectionId: 'education', name: { en: 'Exam Form', mr: 'परीक्षा फॉर्म', hi: 'परीक्षा फॉर्म' }, icon: 'FileText' },
  { id: 'scholarship', sectionId: 'education', name: { en: 'Scholarship', mr: 'शिष्यवृत्ती फॉर्म', hi: 'छात्रवृत्ति फॉर्म' }, icon: 'CreditCard' },
  { id: 'certificate', sectionId: 'education', name: { en: 'Certificates', mr: 'प्रमाणपत्र सेवा', hi: 'प्रमाणपत्र सेवा' }, icon: 'FileText' },

  // Maha-E-Seva Section (Formerly Document Section)
  { id: 'pancard', sectionId: 'documents', name: { en: 'PAN Card', mr: 'PAN कार्ड', hi: 'पैन कार्ड' }, icon: 'IdCard', badge: 'HOT' },
  { id: 'aadhar', sectionId: 'documents', name: { en: 'Aadhar Service', mr: 'आधार सेवा', hi: 'आधार सेवा' }, icon: 'User' },
  { id: 'pf-service', sectionId: 'documents', name: { en: 'PF Service', mr: 'PF सेवा', hi: 'पीएफ सेवा' }, icon: 'Landmark' },
  { id: 'other-form', sectionId: 'documents', name: { en: 'Other Forms', mr: 'इतर फॉर्म', hi: 'अन्य फॉर्म' }, icon: 'Layers' },

  // Digital Section - Only 2 Menu Items now
  { id: 'print', sectionId: 'digital', name: { en: 'Print Service', mr: 'प्रिंट सेवा', hi: 'प्रिंट सेवा' }, icon: 'Printer' },
  { id: 'typing', sectionId: 'digital', name: { en: 'Typing Service', mr: 'टायपिंग सेवा', hi: 'टाइपिंग सेवा' }, icon: 'Type' }
];

export const INITIAL_SERVICES: ServiceDetail[] = [
  {
    id: 'police-bharti-2025',
    category: 'gov-job',
    title: { 
      en: 'Maharashtra Police Bharti 2025', 
      mr: 'पोलीस भरती २०२५', 
      hi: 'पुलिस भर्ती 2025' 
    },
    description: {
      en: 'Large recruitment drive for Maharashtra Police.',
      mr: 'महाराष्ट्र पोलीस दलात विविध पदांसाठी मोठी भरती सुरू झाली आहे.',
      hi: 'महाराष्ट्र पुलिस बल में विभिन्न पदों के लिए बड़ी भर्ती शुरू हुई है।'
    },
    posts: '१७०००+',
    education: {
      en: '12th Pass',
      mr: '१२वी पास',
      hi: '१२वीं पास'
    },
    ageLimit: '१८-२८ वर्षे',
    startDate: 'लवकरच अपेक्षित',
    endDate: 'लवकरच अपेक्षित',
    fees: '₹४५० (जनरल) / ₹३५० (मागासवर्गीय) + १०० (कॅफे फी)',
    documents: {
      en: ['Aadhar Card', '10th & 12th Marksheets', 'TC / School Leaving', 'Caste Certificate (If applicable)', 'Domicile Certificate', 'Non-Creamy Layer (If applicable)', 'Passport Photo', 'Signature Specimen'],
      mr: ['आधार कार्ड', '१०वी आणि १२वी गुणपत्रिका व प्रमाणपत्र', 'शाळा सोडल्याचा दाखला (TC)', 'जातीचा दाखला (लागू असल्यास)', 'डोमिसाईल/रहिवासी प्रमाणपत्र', 'नॉन-क्रीमीलेयर (लागू असल्यास)', 'पासपोर्ट साईज फोटो', 'सहीचा नमुना'],
      hi: ['आधार कार्ड', '10वीं and 12वीं मार्कशीट', 'टीसी / स्कूल छोड़ने का प्रमाण पत्र', 'जाति प्रमाण पत्र (यदि लागू हो)', 'अधिवास प्रमाण पत्र', 'नॉन-क्रीमी लेयर (यदि लागू हो)', 'पासपोर्ट फोटो', 'हस्ताक्षर']
    },
    whatsappMessage: {
      en: 'Hello Sairam Cafe, I want to apply for Police Bharti 2025.',
      mr: 'नमस्कार साईराम कॅफे, मला पोलीस भरती २०२५ या पदासाठी अर्ज करायचा आहे.',
      hi: 'नमस्ते साईराम कैफे, मुझे पुलिस भर्ती 2025 के लिए आवेदन करना है।'
    }
  },
  {
    id: 'pm-kisan-16',
    category: 'farmer-scheme',
    title: { en: 'PM Kisan 16th Installment', mr: 'PM किसान १६वा हप्ता', hi: 'पीएम किसान 16वीं किस्त' },
    description: { en: 'Check beneficiary status for PM Kisan.', mr: 'पंतप्रधान किसान सन्मान निधी योजनेचा १६वा हप्ता जमा होण्यास सुरुवात.', hi: 'पीएम किसान सम्मान निधि की 16वीं किस्त जारी।' },
    fees: '₹५०',
    documents: {
      en: ['Aadhar Card', 'Bank Passbook', 'Mobile Number'],
      mr: ['आधार कार्ड', 'बँक पासबुक', 'मोबाईल नंबर'],
      hi: ['आधार कार्ड', 'बैंक पासबुक', 'मोबाइल नंबर']
    },
    whatsappMessage: { en: 'I want to check PM Kisan status.', mr: 'मला PM किसान हप्ता चेक करायचा आहे.', hi: 'मुझे पीएम किसान स्थिति की जांच करनी है।' }
  }
];

export const getIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Sprout': return <Sprout className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'CreditCard': return <CreditCard className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Bell': return <Bell className={className} />;
    case 'Languages': return <Languages className={className} />;
    case 'User': return <User className={className} />;
    case 'Home': return <Home className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'MessageCircle': return <MessageCircle className={className} />;
    case 'IdCard': return <IdCard className={className} />;
    case 'Printer': return <Printer className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Landmark': return <Landmark className={className} />;
    case 'ImageIcon': return <ImageIcon className={className} />;
    case 'Type': return <Type className={className} />;
    case 'Layers': return <Layers className={className} />;
    default: return <Settings className={className} />;
  }
};
