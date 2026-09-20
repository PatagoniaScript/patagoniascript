import { ContactForm } from './ContactForm';

export const ContactSection = () => {
  return (
    <section className="pb-16 relative overflow-hidden" id="contact">
      <div className="mb-4 text-center">
        <h2 className="text-patagonia-title font-bold mb-2">
          <span className="bg-gradient-to-r from-white via-patagonia-muted to-patagonia-teal bg-clip-text text-transparent">
            Let's talk
          </span>
        </h2>

        <p className="text-patagonia-subtitle text-patagonia-teal/80 leading-relaxed">
          Have a project in mind? Tell us about it.
        </p>
      </div>

      <ContactForm />
    </section>
  );
};
