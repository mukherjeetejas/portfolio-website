//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Pages
import About from "./pages/About";
import Nav from "./components/Nav";
import MyWork from "./pages/MyWork";
import ContactUs from "./pages/ContactUs";
import WorkDetail from "./pages/WorkDetail";
//Router
import { Route, Switch, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
          <Route path="/work" exact>
            <MyWork />
          </Route>
          <Route path="/work/:id">
            <WorkDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
