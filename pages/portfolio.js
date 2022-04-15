import Cta from "../components/Cta/Cta";
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/portfolio";
import { Hero, Works } from "../screens/Portfolio";

export async function getServerSideProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Portfolio({ allPostsData }) {
  return (
    <Layout title="Portfolio">
      <Hero />
      <Works allPostsData={allPostsData} />
      <Cta />
    </Layout>
  );
}
