import { Metadata } from 'next';
import { seoData, sharedKeywords } from '@/lib/seo';
import RulesClient from './RulesClient';

export const metadata: Metadata = {
  title: seoData.rules.title,
  description: seoData.rules.description,
  keywords: sharedKeywords,
};

export default function Page() {
  return <RulesClient />;
}