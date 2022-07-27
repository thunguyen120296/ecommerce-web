import { createTheme, ThemeProvider } from '@mui/material';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
const theme = createTheme({
  palette: {
    primary: {
      main: '#119744',
      light: '#ddffd5',
      dark: '#072f17',
    },
    secondary: {
      main: '#e86121',
      light: '#ffab10',
      dark: '#ff3838',
    },
    background: {
      paper: '#f8f9fa',
      default: '#fff',
    },
    text: {
      main: '#555555',
    },
  },
  typography: {
    h1: {
      fontSize: '50px',
      lineHeight: '58px',
    },
    h2: {
      fontSize: '40px',
      lineHeight: '48px',
    },
    h3: {
      fontSize: '24px',
      lineHeight: '32px',
    },
    h4: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    h5: {
      fontSize: '18px',
      lineHeight: '26px',
    },
    h6: {
      fontSize: '16px',
      lineHeight: '26px',
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout title="Home Page">
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
