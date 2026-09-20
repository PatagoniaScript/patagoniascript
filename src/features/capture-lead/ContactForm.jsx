'use client';

import { useTranslations } from 'next-intl';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const t = useTranslations('captureLead');
  const [state, handleSubmit] = useForm('xjvdrgba');

  return (
    <div className="max-w-3xl mx-auto px-0 sm:px-6 z-10 relative flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex-1 w-full max-w-md bg-gradient-to-br from-patagonia-petrol/40 to-patagonia-darkest/40 backdrop-blur-xl border border-patagonia-turquoise/40 rounded-2xl p-5 sm:p-8 shadow-2xl text-white"
      >
        {/* Name */}
        <div className="mb-7">
          <div className="relative">
            <input
              required
              id="name"
              name="name"
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-patagonia-cyan/30 px-0 pt-5 pb-3 text-white focus:outline-none focus:border-patagonia-turquoise transition-all duration-300 outline-none"
            />

            <label
              htmlFor="name"
              className="absolute left-0 top-6 text-patagonia-teal/70 pointer-events-none transition-all duration-300
                peer-focus:-top-1 peer-focus:text-xs peer-focus:text-patagonia-turquoise
                peer-[:not(:placeholder-shown)]:-top-1
                peer-[:not(:placeholder-shown)]:text-xs"
            >
              {t('form.labels.name')}
            </label>

            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-patagonia-turquoise peer-focus:w-full transition-all duration-300" />
          </div>

          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email */}
        <div className="mb-7">
          <div className="relative">
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder=" "
              className="peer w-full bg-transparent border-b border-patagonia-cyan/30 px-0 pt-5 pb-3 text-white focus:outline-none focus:border-patagonia-turquoise transition-all duration-300 outline-none"
            />

            <label
              htmlFor="email"
              className="absolute left-0 top-6 text-patagonia-teal/70 pointer-events-none transition-all duration-300
                peer-focus:-top-1 peer-focus:text-xs peer-focus:text-patagonia-turquoise
                peer-[:not(:placeholder-shown)]:-top-1
                peer-[:not(:placeholder-shown)]:text-xs"
            >
              {t('form.labels.email')}
            </label>

            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-patagonia-turquoise peer-focus:w-full transition-all duration-300" />
          </div>

          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div className="mb-7">
          <div className="relative">
            <textarea
              required
              id="message"
              name="message"
              placeholder=" "
              className="peer w-full h-36 bg-transparent border-b border-patagonia-cyan/30 px-0 pt-5 pb-3 text-white focus:outline-none focus:border-patagonia-turquoise transition-all duration-300 resize-none outline-none"
            />

            <label
              htmlFor="message"
              className="absolute left-0 top-3 text-patagonia-teal/70 pointer-events-none transition-all duration-300
                peer-focus:-top-1 peer-focus:text-xs peer-focus:text-patagonia-turquoise
                peer-[:not(:placeholder-shown)]:-top-1
                peer-[:not(:placeholder-shown)]:text-xs"
            >
              {t('form.labels.message')}
            </label>

            <div className="absolute bottom-1.5 left-0 h-[1px] w-0 bg-patagonia-turquoise peer-focus:w-full transition-all duration-300" />
          </div>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 bg-gradient-to-r from-patagonia-teal to-patagonia-petrol rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {state.submitting ? 'Sending...' : t('form.submit')}
        </button>
      </form>
    </div>
  );
};
