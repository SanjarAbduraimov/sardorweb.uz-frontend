import { Container, Section } from "../../../components/UIKit";
import WorkCard from "../../../components/WorkCard";

export default function Works({ allPostsData }) {
  return (
    <Section py={[45, 80, 100]} px={[32, 80, 90]}>
      <Container display={["grid"]} gridGap={[32]}>
        {allPostsData.map((item, index) => (
          <WorkCard key={index} image={item.image} title={item.title} />
        ))}
      </Container>
    </Section>
  );
}
