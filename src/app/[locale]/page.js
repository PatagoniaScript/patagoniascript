import { Hero } from '@/features/present-agency';
import { About } from '@/features/present-agency';
import { Portfolio } from '@/features/show-portfolio';
import { ServiceCatalog } from '@/features/service-catalog';

const Page = async () => {
  return (
    <div className="relative overflow-x-hidden bg-patagonia-dark">
      <Hero />
      <About />
      <Portfolio />
      <ServiceCatalog />
    </div>
  );
};

export default Page;
