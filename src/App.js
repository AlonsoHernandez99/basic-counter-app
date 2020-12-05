import "./App.css";
import Navbar from "./components/Navbar";
import { Card, CardContent, Container } from "@material-ui/core";
import Counter from "./components/Counter";


function App() {
  return (
    <Container maxWidth="false">
      <Navbar></Navbar>
      <Card>
        <CardContent>
          <Counter></Counter>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
