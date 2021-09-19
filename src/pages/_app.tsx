import 'react-toastify/dist/ReactToastify.css';
import 'src/styles/global.styles.css';
import Head from 'next/head';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import enEN from 'src/lang/en-EN';
import { IntlProvider } from 'react-intl';
import { WrapComponent } from 'src/layout';
import webConfig from 'src/config/web.config';
import { Provider } from 'react-redux';
import store from 'src/redux';
NProgress.configure({
  showSpinner: false,
  trikcleRate: 0.02,
  trickleSpeed: 800,
});
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{webConfig.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content={webConfig.metaDescription}
          key="MetaDescription"
        />
        <meta name="keywords" content={webConfig.metaKeywords} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={webConfig.facebookURL} />
        <meta
          property="og:title"
          content={webConfig.titleForFB}
          key="MetaFbTitle"
        />
        <meta
          property="og:description"
          content={webConfig.metaDescriptionFB}
          key="MetaFbDescription"
        />
        <meta
          property="og:image"
          itemProp="image"
          content={webConfig.iconForFB}
          key="MetaFbImage"
        />
        <meta property="twitter:url" content={webConfig.twitterURL} />
        <meta
          property="twitter:title"
          content={webConfig.titleForTwitter}
          key="MetaTwitterTitle"
        />
        <meta
          property="twitter:description"
          content={webConfig.metaDescriptionTwitter}
          key="MetaTwitterDescription"
        />
        <meta
          property="twitter:image"
          content={webConfig.iconForTwitter}
          key="MetaTwitterImage"
        />
        <link rel="icon" href={webConfig.faviconImage} key="FaviconIcon" />
      </Head>
      <IntlProvider
        locale={webConfig.defaultLang}
        defaultLocale="en"
        messages={enEN}
      >
        <Provider store={store}>
          <WrapComponent PageComponent={Component} pageProps={pageProps} />
        </Provider>
      </IntlProvider>
    </>
  );
}

export default App;
