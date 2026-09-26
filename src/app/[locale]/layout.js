import '@/core/styles/global.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/core/i18n/routing';
import { SmoothScrollProvider } from '@/core/providers/SmoothScrollProvider';

const SITE_URL = 'https://patagoniascript.com';

export const viewport = {
  themeColor: '#06b6d4',
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale;

  const t = await getTranslations({ locale, namespace: 'metadata' });

  const url = `${SITE_URL}/${locale}`;
  const image = `${SITE_URL}/logo.png`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    keywords: t.raw('keywords'),
    authors: [{ name: 'PatagoniaScript' }],
    creator: 'PatagoniaScript',
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
      languages: {
        es: `${SITE_URL}/es`,
        en: `${SITE_URL}/en`,
        'x-default': `${SITE_URL}/es`,
      },
    },
    openGraph: {
      type: 'website',
      siteName: t('og.siteName'),
      locale: t('og.locale'),
      url,
      title: t('og.title'),
      description: t('og.description'),
      images: [
        {
          url: image,
          secureUrl: image,
          type: 'image/png',
          width: 1200,
          height: 630,
          alt: t('og.imageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@patagoniascript',
      creator: '@patagoniascript',
      title: t('twitter.title'),
      description: t('twitter.description'),
      images: [
        {
          url: image,
          alt: t('twitter.imageAlt'),
        },
      ],
    },
    icons: {
      icon: '/logo.png',
      apple: '/logo.png',
    },
    other: {
      image,
      thumbnail: image,
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale;

  if (!locale || !routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: t('jsonLd.name'),
    description: t('jsonLd.description'),
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo.png`,
      width: 1200,
      height: 630,
    },
    image: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: t('jsonLd.telephone'),
      contactType: 'customer service',
    },
    areaServed: t.raw('jsonLd.areaServed'),
    serviceType: t.raw('jsonLd.serviceTypes'),
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
