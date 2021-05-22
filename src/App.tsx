import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import StyledComponentsLayout from "./components/StyledComponentsLayout";
import EmotionLayout from "./components/EmotionLayout";
import { css } from "@emotion/css";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
html, body, div#root {
  width: 100%;
  height: 100%;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className={appStyle}>
        <StyledComponentsLayout />
        <EmotionLayout />
      </div>
    </>
  );
}

const appStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
`;

export default App;
