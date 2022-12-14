import type { ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '@redux/store/';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import Header from '@/layouts/SidebarLayout/Header';
import { Grid } from '@mui/material';
import { changeRoute, checkLoggedInUser, logoutUser } from '@/utils';
// import { Footer } from '@/components';
import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface ParijanaAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function MyApp(props: ParijanaAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // const getLayout = Component.getLayout ?? ((page) => page);

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  const { pathname } = useRouter();
  const route = pathname.split('/')[1];
  const isHome = route.length === 0
  const hideNavbarOnRoutes = ['login', 'signup', 'components'];
  const isAdminRoute = route === 'admin';
  const showNavbar = !(hideNavbarOnRoutes.includes(route))
  // const hideFooterOnRoutes = ['login', 'signup', 'components'];
  // const showFooter = !(hideFooterOnRoutes.includes(route))

  // change route if conditions not met
  const { isAdmin, isLoggedIn } = checkLoggedInUser();
  if(['login', 'signup'].includes(route) && isLoggedIn){
    changeRoute( isAdmin ? '/admin' : '/' )
  }
  if(isAdminRoute && !isAdmin){
    logoutUser();
  }

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Parijana</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <SidebarProvider>
          <ThemeProvider>
            <CssBaseline />
            { showNavbar &&  <Header /> }
            <Grid mt={isHome ? 6 : 10} px={isHome ? 0 : 5} py={2}>
              <Component {...pageProps} /> 
            </Grid>
          </ThemeProvider>
          {/* { showFooter && <Footer /> } */}
        </SidebarProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
