import { Metadata } from 'next';
import { seoData, sharedKeywords } from '@/lib/seo';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: seoData.gallery.title,      // Page ke hisaab se change kar lena
  description: seoData.gallery.description,
  keywords: sharedKeywords,
};

export default function Page() {
  return <GalleryClient />;
}