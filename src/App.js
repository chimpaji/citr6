import ReactDOM from "react-dom";
import Pet from "./Pet";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Link to="/">
          <h1>Adopt Me!</h1>
        </Link>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
