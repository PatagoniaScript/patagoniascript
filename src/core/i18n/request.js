import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  let resolvedLocale = locale;

  if (!resolvedLocale || !routing.locales.includes(resolvedLocale)) {
    resolvedLocale = routing.defaultLocale;
  }

  const generalMessages = (
    await import(`@/core/i18n/locales/${resolvedLocale}.json`)
  ).default;
  const presentAgencyMessages = (
    await import(`@/features/present-agency/locales/${resolvedLocale}.json`)
  ).default;
  const showPortfolioMessages = (
    await import(`@/features/show-portfolio/locales/${resolvedLocale}.json`)
  ).default;
  const serviceCatalogMessages = (
    await import(`@/features/service-catalog/locales/${resolvedLocale}.json`)
  ).default;
  const captureLeadMessages = (
    await import(`@/features/capture-lead/locales/${resolvedLocale}.json`)
  ).default;
  const projectCalculatorMessages = (
    await import(`@/features/project-calculator/locales/${resolvedLocale}.json`)
  ).default;

  const messages = {
    ...generalMessages,
    presentAgency: presentAgencyMessages,
    showPortfolio: showPortfolioMessages,
    serviceCatalog: serviceCatalogMessages,
    captureLead: captureLeadMessages,
    projectCalculator: projectCalculatorMessages,
  };

  return {
    locale: resolvedLocale,
    messages: messages,
  };
});
