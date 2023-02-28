import "./App.css";
import Header from "./components/Header/";
import Intro from "./components/Intro";
import MiddleBlock from "./components/MiddleBlock";
import SectionBlock from "./components/SectionBlock";
import StatsBlock from "./components/StatsBlock";
import Footer from "./components/Footer";

import heaBlock from "./content/HeaderBlock.json";
import intBlock from "./content/IntroContent.json";
import mdlBlock from "./content/MiddleBlock.json";
import staBlock from "./content/StatsBlock.json";
import secBlock1 from "./content/SectionBlock1.json";
import secBlock2 from "./content/SectionBlock2.json";
import secBlock3 from "./content/SectionBlock3.json";
import fooBlock from "./content/FooterBlock.json";

function App() {
  return (
    <>
      <Header
        id={heaBlock.id}
        logoSrc={heaBlock.logoSrc}
        header={heaBlock.header}
      />
      <Intro
        id={intBlock.id}
        title={intBlock.title}
        content={intBlock.content}
        image={intBlock.image}
        buttons={intBlock.buttons}
      />
      <MiddleBlock
        id={mdlBlock.id}
        title={mdlBlock.title}
        content={mdlBlock.content}
        button={mdlBlock.button}
      />
      <SectionBlock
        id={secBlock1.id}
        direction={secBlock1.direction}
        title={secBlock1.title}
        content={secBlock1.content}
        img={secBlock1.img}
      />
      <StatsBlock
        id={staBlock.id}
        title={staBlock.title}
        items={staBlock.items}
      />
      <SectionBlock
        id={secBlock2.id}
        direction={secBlock2.direction}
        title={secBlock2.title}
        content={secBlock2.content}
        img={secBlock2.img}
      />
      <SectionBlock
        id={secBlock3.id}
        direction={secBlock3.direction}
        title={secBlock3.title}
        content={secBlock3.content}
        img={secBlock3.img}
      />
      <Footer
        id={fooBlock.id}
        company={fooBlock.company}
        logo={fooBlock.logo}
        social={fooBlock.social}
      />
    </>
  );
}

export default App;
