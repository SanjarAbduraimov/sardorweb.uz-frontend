import Layout from "../../components/Layout";
import { getPostData } from "../../lib/portfolio";
import Head from "next/head";
import {
  Button,
  Container,
  Frame,
  Section,
  Text,
  Wrapper,
} from "../../components/UIKit";
import Link from "next/link";
import Image from "next/image";

export default function Portfolio({ portfolioData }) {
  return (
    <Layout>
      <Head>
        <title>{portfolioData.title}</title>
      </Head>
      <Section py={[45, 80, 100]} px={[32, 60, 90]}>
        <Container maxWidth={[800]} mx={["auto"]}>
          <Wrapper>
            <Text size={["heading3", "heading1", "hero"]}>
              {portfolioData.title}
            </Text>
          </Wrapper>

          <Wrapper display="flex">
            <Frame
              position="relative"
              overflow="hidden"
              height={[420, 500]}
              width={[1, 1, 500]}
              mb={[48, 48, 0]}
              borderRadius={[8]}
            >
              <object
                style={{ color: "white" }}
                width="300"
                height="200"
                data={portfolioData.image}
              />
            </Frame>
            <div
              style={{ color: "white" }}
              dangerouslySetInnerHTML={{ __html: portfolioData.text }}
            />
          </Wrapper>

          <Link href="/portfolio">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const portfolioData = await getPostData(params.id);
  console.log(portfolioData, "portfolioData");
  return {
    props: {
      portfolioData,
    },
  };
}
