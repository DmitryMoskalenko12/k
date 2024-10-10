import classes from './notFound.module.scss';
import Image from 'next/image';
import notFoundMobile from '@/image/notFoundMobile.webp';
import notFoundDesktop from '@/image/notFoundDesktop.webp';
import Link from 'next/link';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/TranslationsProvider';

const NotFound = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, ['main']);

  return (
    <TranslationsProvider
    resources={resources}
    locale={locale}
    namespaces={['start', 'main']}
  >
    <div className={classes.content}>
      <h2 className={classes.notFoundTitle}>
        {t('taken-a-detour')}
      </h2>

      <div className={classes.imgWrapper}>
        <Image
          className={classes.imgMobile}
          src={notFoundMobile}
          width={301}
          height={226}
          alt='Error'
        />
        <Image
          className={classes.imgDesktop}
          src={notFoundDesktop}
          width={553}
          height={415}
          alt='Error'
        />
      </div>

      <Link className={classes.link} href='/'>
        {t('main-page')}
      </Link>
    </div>
    </TranslationsProvider>
  );
};

export default NotFound;
