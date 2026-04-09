import { Metadata } from 'next';
import { seoData, sharedKeywords } from '@/lib/seo';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: seoData.about.title,
  description: seoData.about.description,
  keywords: sharedKeywords,
};

export default function Page() {
  return <AboutClient />;
}