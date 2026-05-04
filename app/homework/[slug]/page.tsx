import { notFound } from 'next/navigation';
import { homeworks } from '@/data/homeworks';
import { midtermPresentation } from '@/data/midtermPresentation';
import { finalProjectPresentation } from '@/data/finalProjectPresentation';
import HomeworkPageComponent from '@/components/HomeworkPage';

const allSlidePages = [...homeworks, midtermPresentation, finalProjectPresentation];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function HomeworkRoute({ params }: PageProps) {
  const { slug } = await params;
  const homework = allSlidePages.find(h => h.slug === slug);

  if (!homework) {
    notFound();
  }

  return <HomeworkPageComponent homework={homework} />;
}

export async function generateStaticParams() {
  return allSlidePages.map((hw) => ({
    slug: hw.slug,
  }));
}
