import { notFound } from 'next/navigation';
import { homeworks } from '@/data/homeworks';
import HomeworkPageComponent from '@/components/HomeworkPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function HomeworkRoute({ params }: PageProps) {
  const { slug } = await params;
  const homework = homeworks.find(h => h.slug === slug);

  if (!homework) {
    notFound();
  }

  return <HomeworkPageComponent homework={homework} />;
}

export async function generateStaticParams() {
  return homeworks.map((hw) => ({
    slug: hw.slug,
  }));
}
