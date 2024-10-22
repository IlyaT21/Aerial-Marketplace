import "./App.scss";
import Footer from "./components/global/Footer";
import { Header } from "./components/global/Header";
import Hero from "./components/global/Hero";
import ListStack from "./components/listing/ListStack";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <ListStack></ListStack>
      <Footer></Footer>
    </div>
  );
}

export default App;
