import { useState } from "react";
import styled from "styled-components";

const StyledComponentsLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onclickButtonHandler = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <Layout>
      <Title>StyledComponents Layout</Title>
      <Button onClick={onclickButtonHandler}>Styled Button</Button>
      <VisibleText isVisible={isVisible}>Is Visible!!!</VisibleText>
    </Layout>
  );
};

const Layout = styled.div`
  padding: 30px;
  text-align: center;
  background-color: #faf1e6;
  * {
    margin-bottom: 30px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  background: #81d4fa;
  border: 3px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
`;

interface VisibleTextProps {
  isVisible: boolean;
}

const VisibleText = styled.p<VisibleTextProps>`
  font-size: 1.5rem;
  color: violet;
  display: ${(props) => props.isVisible === false && "none"};
`;

export default StyledComponentsLayout;
