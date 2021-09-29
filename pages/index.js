import Layout from '../components/Layout';
import { Hero, Information, Works } from '../screens/Home';

export default function Home() {
  return (
    <Layout title='Home'>
      <Hero />
      <Works />
      <Information />
    </Layout>
  );
}
