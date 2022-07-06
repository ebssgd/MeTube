import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import { darkTheme } from "./utils/Theme";
import { lightTheme } from "./utils/Theme";

const Container = styled.div`
  display:flex;
`;
const Main = styled.div`
  flex:7;
  background:${({theme}) => theme.bg};
`;
const Wrapper = styled.div`

`;

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <NavBar />
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
  </ThemeProvider>
  );
}

export default App;
