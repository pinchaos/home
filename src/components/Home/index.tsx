import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent1 from "../../content/MiddleBlockContent1.json";
import ContentBlock1 from "../../content/ContentBlock1.json";
import ContentBlock2 from "../../content/ContentBlock2.json";
import ContentBlock3 from "../../content/ContentBlock3.json";
import MiddleBlock from "../../components/MiddleBlock";
import Container from "../../common/Container";
import ContentBlock from "../../components/ContentBlock";

const Home = () => {
  return (
    <Container>
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon={IntroContent.img}
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent1.title}
        content={MiddleBlockContent1.text}
        button={MiddleBlockContent1.button}
        id="middleBlockContent1"
      />
      <ContentBlock
        type="left"
        title={ContentBlock1.title}
        content={ContentBlock1.text}
        section={ContentBlock1.section}
        icon={ContentBlock1.img}
        id="contentBlock1"
      />
      <ContentBlock
        type="right"
        title={ContentBlock2.title}
        content={ContentBlock2.text}
        icon={ContentBlock2.img}
        id="contentBlock2"
      />
      <ContentBlock
        type="left"
        title={ContentBlock3.title}
        content={ContentBlock3.text}
        icon={ContentBlock3.img}
        id="contentBlock3"
      />
    </Container>
  );
};

export default Home;
