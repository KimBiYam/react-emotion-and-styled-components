import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import StyledComponentsLayout from "./components/StyledComponentsLayout";
import EmotionLayout from "./components/EmotionLayout";

const GlobalStyle = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <StyledComponentsLayout />
        <EmotionLayout />
      </div>
    </>
  );
}

export default App;
