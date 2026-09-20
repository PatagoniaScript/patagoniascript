import { Hero } from '@/features/present-agency';
import { About } from '@/features/present-agency';
import { Portfolio } from '@/features/show-portfolio';
import { ServiceCatalog } from '@/features/service-catalog';
import { ContactSection } from '@/features/capture-lead/ContactSection';

const Page = async () => {
  return (
    <div className="relative overflow-x-hidden bg-patagonia-dark">
      <Hero />
      <About />
      <Portfolio />
      <ServiceCatalog />
      <ContactSection />
    </div>
  );
};

export default Page;
