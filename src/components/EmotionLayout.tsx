import { css } from "@emotion/css";
import { useState } from "react";

const EmotionLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onclickButtonHandler = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <div className={layoutStyle}>
      <h1 className={titleStyle}>Emotion Layout</h1>
      <button onClick={onclickButtonHandler} className={buttonStyle}>
        Emotion Button
      </button>
      <p className={visibleStyle(isVisible)}>Is Visible!!!</p>
    </div>
  );
};

const layoutStyle = css`
  padding: 30px;
  text-align: center;
  background-color: #e4efe7;
  * {
    margin-bottom: 30px;
  }
`;

const titleStyle = css`
  font-size: 2rem;
`;

const buttonStyle = css`
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

const visibleStyle = (isVisible: boolean) => css`
  font-size: 1.5rem;
  color: violet;
  ${!isVisible && "display: none;"}
`;

export default EmotionLayout;
