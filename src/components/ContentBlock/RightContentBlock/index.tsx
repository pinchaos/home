import { Row, Col } from "antd";
import { ImgIcon } from "../../../common/ImgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

import Colors from "../../../content/Colors.json";
const colors: any = Colors;

const RightBlock = ({
  title,
  content,
  button,
  icon,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToUrl = (url: string) => {
    window.open(url);
  };

  const urlOrScrollTo = (type: string, goTo: string) =>
    type === "url" ? goToUrl(goTo) : scrollTo(goTo);

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        focusBorderColor={colors[item.focusBorderColor]}
                        focusBackgroundColor={colors[item.focusBackgroundColor]}
                        focusColor={colors[item.focusColor]}
                        background={colors[item.background]}
                        color={colors[item.color]}
                        fixedWidth={true}
                        onClick={() =>
                          urlOrScrollTo(
                            item.buttonType.type,
                            item.buttonType.goTo
                          )
                        }
                      >
                        {item.title}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <ImgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default RightBlock;
