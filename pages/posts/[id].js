import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/Date';
import {
  Button,
  Container,
  Section,
  Text,
  Wrapper,
} from '../../components/UIKit';
import Link from 'next/link';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Section py={[45, 80, 100]} px={[32, 60, 90]}>
        <Container maxWidth={[800]} mx={['auto']}>
          <Wrapper display={['grid']} gridGap={[16]}>
            <Text size={['heading3', 'heading1', 'hero']}>
              {postData.title}
            </Text>
            {/* <br />
          {postData.id}
          <br /> */}
            <Date dateString={postData.date} />
          </Wrapper>

          <br />
          <div
            style={{ color: 'white' }}
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          <br />
          <br />
          <Link href='/blog'>
            <Button variant='primary'>Go Back</Button>
          </Link>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
