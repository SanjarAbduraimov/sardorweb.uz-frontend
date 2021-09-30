import Cta from '../components/Cta/Cta';
import Layout from '../components/Layout';
import { Companies, Hero, Values } from '../screens/AboutMe';

export default function AboutMe() {
  return (
    <Layout>
      <Hero />
      <Companies />
      <Values />
      <Cta />
    </Layout>
  );
}
