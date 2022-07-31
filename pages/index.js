import { Button } from '@mui/material';
import { Container } from '@mui/system';
import HomePageDefault from '../components/elements/homepage';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout title="Trang chủ">
      <Container
        maxWidth="xxl"
        sx={{
          marginBottom: 10,
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: 'background.paper',
        }}
      >
        <HomePageDefault />
      </Container>
    </Layout>
  );
}
