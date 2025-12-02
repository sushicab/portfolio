import AboutPageLeft from '@/components/AboutPageLeft';
import NewsUpdates from '@/components/NewsUpdates';

export default function About() {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#E3E3E3] container-color-[#E3E3E3]  mx-auto px-3"
      style={{ paddingTop: '80px' }}
    >
      <AboutPageLeft />
      <NewsUpdates />
    </main>
  );
}
