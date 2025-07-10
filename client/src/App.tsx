
import { Route, Router } from "wouter";
import SimpleIndex from "./pages/SimpleIndex";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Route path="/" component={SimpleIndex} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default App;
