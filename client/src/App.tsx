
import { Route, Router } from "wouter";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <Router>
    <Route path="/" component={Index} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default App;
