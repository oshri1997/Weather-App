import styled from "styled-components";
import LeftSide from "./components/LeftSide/SearchContainer";
import ContentContainer from "./components/RightSide/ContentContainer";
const Hero = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background-color: #f2f3f6;
  width: 1500px;
  height: 820px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
function App() {
  return (
    <Hero>
      <Container>
        <LeftSide />
        <ContentContainer />
      </Container>
    </Hero>
  );
}

export default App;
