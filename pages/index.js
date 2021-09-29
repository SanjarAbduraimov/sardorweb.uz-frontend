import Layout from '../components/Layout';
import { Hero, Works } from '../screens/Home';

export default function Home() {
  return (
    <Layout title='Home'>
      <Hero />
      <Works />
    </Layout>
  );
}
