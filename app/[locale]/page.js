import initTranslations from '../i18n';
import TranslationsProvider from '../TranslationsProvider';
import Hero from '@/modules/Hero/Hero';
import About from '@/modules/About/About';
import Services from '@/modules/Services/Services';
import Benefits from '@/modules/Benefits/Benefits';
import Works from '@/modules/Works/Works';
import Pricing from '@/modules/Pricing/Pricing';
import Team from '@/modules/Team/Team';
import Faq from '@/modules/Faq/Faq';
import FormSection from '@/modules/Form/Form';
import Practice from '@/modules/Practice/Practice';
import Cards from '@/modules/Cards/Cards';
import Parallax from '@/modules/Parallax/Parallax';
import Creative from '@/modules/Creative/Creative';
import Jungle from '@/modules/Jungle/Jungle';

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ['main']);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={['main']}
    > 
      <Jungle/>
      {/* <Practice/> */}
      <Cards/>
      <Parallax/>
      <Creative/>
      <Hero/>
      <About t={t}/>
      <Services t={t}/>
      <Benefits t={t}/>
      <Works />
      <Pricing />
      <Team />
      <Faq />
      <FormSection />

    </TranslationsProvider>
  );
}
