import { Metadata } from 'next';
import { seoData, sharedKeywords } from '@/lib/seo';
import InquireClient from './InquireClient';

export const metadata: Metadata = {
  title: seoData.inquire.title,      // Page ke hisaab se change kar lena
  description: seoData.inquire.description,
  keywords: sharedKeywords,
};

export default function Page() {
  return <InquireClient />
}