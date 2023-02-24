import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import Colors from "../../content/Colors.json";
import CompanyContent from "../../content/CompanyContent.json";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  id: string;
}

const MiddleBlock = ({ id, title, content, button }: MiddleBlockProps) => {
  const goToUrl = (url: string) => {
    window.open(url);
  };

  return (
    <MiddleBlockSection>
      <Slide direction="left">
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{title}</h6>
              <Content>{content}</Content>
              {button && (
                <Button
                  focusBorderColor={Colors.secondary}
                  focusBackgroundColor={Colors.secondary}
                  focusColor={Colors.light}
                  background={Colors.primary}
                  color={Colors.light}
                  name="submit"
                  onClick={() => goToUrl(CompanyContent.urlMenu)}
                >
                  {" "}
                  {button}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
