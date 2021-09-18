import { FC } from 'react';
import Head from 'next/head';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { WrapComponentInterface } from './Layout.interface';
import webConfig from 'src/config/web.config';
import routesConfig from 'src/config/routes/routes.config';
import DefaultLayout from './Default.layout';
const WrapComponent: FC<WrapComponentInterface> = ({
  PageComponent,
  pageProps,
}) => {
  const Router = useRouter();
  const componentConfig = routesConfig[Router.pathname];

  return (
    <>
      <Head>
        <title>{componentConfig?.title || webConfig.title}</title>
      </Head>
      {componentConfig?.active ? (
        <DefaultLayout>
          <PageComponent {...pageProps} />
        </DefaultLayout>
      ) : (
        <Error statusCode={404} />
      )}
    </>
  );
};
export default WrapComponent;
