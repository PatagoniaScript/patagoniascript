import { useTranslations } from 'next-intl';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  const t = useTranslations('captureLead');
  return (
    <section className="pb-12 relative overflow-hidden" id="contact">
      <div className="mb-4 text-center">
        <h2 className="text-patagonia-title font-bold mb-2">
          <span className="bg-gradient-to-r from-white via-patagonia-muted to-patagonia-teal bg-clip-text text-transparent">
            {t('title')}
          </span>
        </h2>

        <p className="text-patagonia-description text-patagonia-muted leading-relaxed">
          {t('description')}
        </p>
      </div>

      <ContactForm />
    </section>
  );
};
