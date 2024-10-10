import './globals.scss';
import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import localFont from 'next/font/local';
import Header from '@/modules/Header/Header';
import Footer from '@/modules/Footer/Footer';
import social from '@/image/socialMedia.webp';
import Script from 'next/script';

export const generateMetadata = async ({params: {locale}}) => {
  const { t } = await initTranslations(locale, ['main']);

  return {
    title: t('website-development'),
    description: t('best-conditions'),
  }
};

const oswald = localFont({
  src: [
    {
      path: '../../fonts/Oswald-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../fonts/Oswald-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default async function RootLayout({ params: { locale }, children }) {
  const { t, resources } = await initTranslations(locale, ['main']);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={['main']}
    >
      <html className={`${oswald.className}`} lang={t('language')}>
        <head>
          <Script
            id="gtm-head"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5F254PS3');
              `,
            }}
          />
          <meta property='og:image' content={social.src} />
          <meta property='og:title' content={t('website-development')} />
          <meta property='og:description' content={t('best-conditions')} />
          <meta name='keywords' content={t('order-a-site')} />
          <meta property='og:image:type' content='image/webp' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
        </head>
        <body>
         <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5F254PS3"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Header />
          <main>{children}</main>
          <Footer t={t}/>
        </body>
      </html>
    </TranslationsProvider>
  );
}
