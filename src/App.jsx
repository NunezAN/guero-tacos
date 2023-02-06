import Contact from "./components/Contact";
import Events from "./components/Events";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="font-ropa mx-auto">
      <Header />
      <Landing></Landing>
      <Menu></Menu>
      <Events />
      <Contact />
    </div>
  );
}

export default App;
