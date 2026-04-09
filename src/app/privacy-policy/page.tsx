import { Metadata } from 'next';
import { seoData, sharedKeywords } from '@/lib/seo';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: seoData.privacy.title,
  description: seoData.privacy.description,
  keywords: sharedKeywords,
};

export default function Page() {
  return <PrivacyClient />;
}