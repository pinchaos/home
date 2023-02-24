import { Row, Col } from "antd";
import { ImgIcon } from "../../common/ImgIcon";
import Container from "../../common/Container";
import FooterContent from "../../content/FooterContent.json";
import Colors from "../../content/Colors.json";

import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  TitleLink,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <ImgIcon type="svg" src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection background={Colors.grayLight}>
        <Container>
          <Row justify="center">
            <Col lg={12} md={12} sm={12} xs={12}>
              <a
                target={"_blank"}
                href={FooterContent.addressGoogle || "www.google.com"}
                rel="noreferrer"
              >
                <TitleLink
                  hoverColor={Colors.secondary}
                  hoverBorderColor={Colors.secondary}
                  color={Colors.primary}
                >{`🔗Ubicación Google Maps`}</TitleLink>
              </a>
              <Para color={Colors.primary}>
                {"🏭" + FooterContent.company || "Rancho Santa Margarita"}
              </Para>
              <Para color={Colors.primary}>
                {"📞" + FooterContent.phone || "+1123456789"}
              </Para>
              <Para color={Colors.primary}>
                {"📍" + FooterContent.address || "California"}
              </Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra background={Colors.grayLight}>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <ImgIcon
                  src="logo.svg"
                  type="svg"
                  aria-label="homepage"
                  width="200px"
                  height="120px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href={
                  FooterContent.instagram ||
                  "https://www.linkedin.com/in/lasha-kakabadze/"
                }
                src="instagram.svg"
              />
              <SocialLink
                href={
                  FooterContent.facebook ||
                  "https://medium.com/@lashakakabadze/"
                }
                src="facebook.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;
