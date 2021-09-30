import { Hero } from '../screens/Blog';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';

import { getSortedPostsData } from '../lib/posts';
import { Container, Section, Text, Wrapper } from '../components/UIKit';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Hero />
      <Section py={[45, 80, 100]} px={[32, 60, 90]}>
        <Wrapper display={['grid']} gridGap={[16]} mb={[48]}>
          <Text size={['heading4', 'heading2', 'heading2']}>
            Latest articles
          </Text>
          <Text size='caption'>
            {' '}
            Repeated failure will toughen your spirit and show you with absolute
            clarity how things must be done.
          </Text>
        </Wrapper>
        <Container display={['grid']} gridGap={[32]}>
          {allPostsData.map(({ id, date, title, image }) => (
            <Link key={id} href={`/posts/${id}`}>
              <a>
                <BlogCard title={title} date={date} image={image} />
              </a>
            </Link>
          ))}
        </Container>
      </Section>
    </Layout>
  );
}
