import { notFound } from 'next/navigation';
import { midterm } from '@/data/midterm';
import { finalProject } from '@/data/finalProject';
import MidtermPageComponent from '@/components/MidtermPage';

const essays = [midterm, finalProject];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MidtermRoute({ params }: PageProps) {
  const { slug } = await params;
  const essay = essays.find(e => e.slug === slug);

  if (!essay) {
    notFound();
  }

  return <MidtermPageComponent essay={essay} />;
}

export async function generateStaticParams() {
  return essays.map(e => ({ slug: e.slug }));
}
