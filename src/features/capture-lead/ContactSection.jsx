'use client';
import { useTranslations } from 'next-intl';
import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  const t = useTranslations('captureLead');
  return (
    <section
      className="pb-12 relative overflow-hidden px-5 sm:px-8"
      id="contact"
    >
      <div className="mb-4 text-center max-w-3xl mx-auto">
        <h2 className="mt-8 text-patagonia-title font-bold mb-2">
          <span className="bg-gradient-to-r from-white via-patagonia-muted to-patagonia-teal bg-clip-text text-transparent">
            {t('title')}
          </span>
        </h2>

        <p className="py-2 text-patagonia-description text-patagonia-muted leading-relaxed">
          {t('description')}
        </p>
      </div>

      <ContactForm />
    </section>
  );
};
