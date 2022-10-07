import RouteEngine from "./ions/routeEngine/RouteEngine";
import Styled from 'styled-components';

const Container = Styled.div`
  background-color: #e8e8e8;
  width: 100%;
  height: 100vh;
  color: #1B2F5D;
`;
//color: #1B2F5D;
function App() {
  return (
    <Container>
      <RouteEngine/>
    </Container>
  );
}

export default App;
