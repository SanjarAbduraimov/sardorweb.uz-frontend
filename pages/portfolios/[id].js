import Layout from "../../components/Layout";
import Image from "next/image";
import { getPortfolioData } from "../../lib/portfolio";
import Head from "next/head";
import Date from "../../components/Date";
import {
  Button,
  Container,
  Section,
  Text,
  Wrapper,
} from "../../components/UIKit";
import Link from "next/link";
import styled from "styled-components";

const ImgBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    display: block;
    overflow: hidden;
    position: relative !important;
    inset: 0px;
    box-sizing: border-box;
    margin: 0px;
    width: 650px;
    height: 350px;
    margin-top: 10px !important;
    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Section py={[45, 80, 100]} px={[32, 60, 90]}>
        <Container maxWidth={[800]} mx={["auto"]}>
          <Wrapper display={["grid"]} gridGap={[16]}>
            <Text size={["heading3", "heading1", "hero"]}>
              {postData.title}
            </Text>
            <br />
            {/* {postData.id} */}
            <br />
            {/* <Date dateString={postData.date} /> */}
            <ImgBlock>
              {postData.file?.data?.map((item) => (
                <Image
                  key={item.id}
                  style={{}}
                  alt=""
                  src={item.attributes.url}
                  layout="fill"
                  placeholder="blur"
                  objectFit="cover"
                  blurDataURL={item.attributes.url}
                  onLoadingComplete=""
                />
              ))}
            </ImgBlock>
          </Wrapper>

          <br />
          <div
            style={{ color: "white" }}
            dangerouslySetInnerHTML={{ __html: postData.text }}
          />
          <br />
          <br />
          <Link href="/portfolio">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Container>
      </Section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const postData = await getPortfolioData(params.id);
  console.log(postData, params.id);
  return {
    props: {
      postData,
    },
  };
}
