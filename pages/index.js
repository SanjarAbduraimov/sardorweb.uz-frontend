import Cta from '../components/Cta';
import Layout from '../components/Layout';
import {
  Facts,
  Hero,
  Information,
  InformationII,
  Testimonials,
  Works,
} from '../screens/Home';

export default function Home() {
  return (
    <Layout title='Home'>
      <Hero />
      <Works />
      <Information />
      <Testimonials />
      <Facts />
      <InformationII />
      <Cta />
    </Layout>
  );
}
