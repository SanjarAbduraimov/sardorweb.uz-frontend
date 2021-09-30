import Cta from '../components/Cta/Cta';
import Layout from '../components/Layout';
import { Companies, Hero } from '../screens/AboutMe';

export default function AboutMe() {
  return (
    <Layout>
      <Hero />
      <Companies />
      <Cta />
    </Layout>
  );
}
