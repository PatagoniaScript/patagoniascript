import { getTranslations } from 'next-intl/server';
import { Hero } from '@/features/present-agency';
import { About } from '@/features/present-agency';
import { Portfolio } from '@/features/show-portfolio';
import { ServiceCatalog } from '@/features/service-catalog';
import { ContactSection } from '@/features/capture-lead/ContactSection';
import { Footer } from '@/core/ui/Footer';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale;

  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
    },
  };
}

const Page = async () => {
  return (
    <div className="relative overflow-x-hidden bg-patagonia-dark">
      <Hero />
      <About />
      <Portfolio />
      <ServiceCatalog />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
