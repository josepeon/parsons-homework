import { notFound } from 'next/navigation';
import { midterm } from '@/data/midterm';
import MidtermPageComponent from '@/components/MidtermPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MidtermRoute({ params }: PageProps) {
  const { slug } = await params;

  if (slug !== midterm.slug) {
    notFound();
  }

  return <MidtermPageComponent essay={midterm} />;
}

export async function generateStaticParams() {
  return [{ slug: midterm.slug }];
}
