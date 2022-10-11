import RouteEngine from "./ions/routeEngine/RouteEngine";
import Styled from 'styled-components';
//context
import Utilities from "./utilities/Utilities";
const Container = Styled.div`
  background-color: #e8e8e8;
  width: 100%;
  height: 100%;
  color: #1B2F5D;
`;
//color: #1B2F5D;
function App() {
  return (
    <Utilities>
      <Container>
        <RouteEngine/>
      </Container>
    </Utilities>
  );
}

export default App;
