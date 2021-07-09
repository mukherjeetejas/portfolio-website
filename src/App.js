//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Pages
import About from "./pages/About";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
//Router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <ContactUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
