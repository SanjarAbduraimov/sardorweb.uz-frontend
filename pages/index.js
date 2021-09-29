import Layout from '../components/Layout';
import { Hero, Information, Testimonials, Works } from '../screens/Home';

export default function Home() {
  return (
    <Layout title='Home'>
      <Hero />
      <Works />
      <Information />
      <Testimonials />
    </Layout>
  );
}
