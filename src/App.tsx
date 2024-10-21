import "./App.css";
import { Header } from "./components/global/Header";
import Hero from "./components/global/Hero";
import ListStack from "./components/listing/ListStack";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <ListStack></ListStack>
    </div>
  );
}

export default App;
