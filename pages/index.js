import Cta from "../components/Cta";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/portfolio";
import {
  Facts,
  Hero,
  Information,
  InformationII,
  Testimonials,
  Works,
} from "../screens/Home";

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout title="Home">
      <Hero />
      <Works allPostsData={allPostsData} />
      <Information />
      <Testimonials />
      <Facts />
      <InformationII />
      <Cta />
    </Layout>
  );
}
