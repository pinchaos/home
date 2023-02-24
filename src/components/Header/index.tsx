import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { ImgIcon } from "../../common/ImgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

import Colors from "../../content/Colors.json";
import CompanyContent from "../../content/CompanyContent.json";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const goToUrl = (url: string) => {
    window.open(url);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall
          color={Colors.primary}
          onClick={() => goToUrl(CompanyContent.urlMenu)}
        >
          <Span textDecoration={Colors.secondary} focusColor={Colors.secondary}>
            {"Menú"}
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          color={Colors.primary}
          onClick={() => scrollTo("contentBlock1")}
        >
          <Span textDecoration={Colors.secondary} focusColor={Colors.secondary}>
            {"Producto"}
          </Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          color={Colors.primary}
          style={{ width: "180px" }}
          onClick={() => goToUrl(CompanyContent.whatsappButton)}
        >
          <Span textDecoration={Colors.secondary} focusColor={Colors.secondary}>
            <Button
              focusBorderColor={Colors.whatsappDark}
              focusBackgroundColor={Colors.whatsappDark}
              focusColor={Colors.light}
              background={Colors.whatsapp}
              color={Colors.light}
            >
              {"WhatsApp"}
            </Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <ImgIcon src="logo.svg" type="svg" width="200px" height="120px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>{CompanyContent.shortCompany}</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
