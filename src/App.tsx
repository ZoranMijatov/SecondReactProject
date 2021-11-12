import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Pages/Home";
import Productivity from "./Components/Pages/Productivity";
import Pricing from "./Components/Pages/Pricing";
import { ReactComponent as ReactSprite } from "./Components/Pages/Productivity/icons.svg";
import { ReactComponent as ReactSpriteJobs } from "./Components/Pages/JobPostings/companyicons.svg";
import { SpriteIcons } from "./Components/Pages/Productivity/style";
import Pomodoro from "./Components/Pages/Pomodoro";
import JobPostings from "./Components/Pages/JobPostings";
import Product from "./Components/Pages/Product";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Dashboard />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/productivity">
          <Productivity />
          <SpriteIcons>
            <ReactSprite />
          </SpriteIcons>
        </Route>
        <Route exact path="/pomodoro">
          <Pomodoro />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/jobpostings">
          <JobPostings />
          <SpriteIcons>
            <ReactSpriteJobs />
          </SpriteIcons>
        </Route>
        <Route exact path="/product">
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
