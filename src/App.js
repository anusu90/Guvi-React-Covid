import logo from './logo.svg';
import './App.css';
import Wrapper from "./wrapper/wrapper"
import Nav from "./nav/nav"
import Sidebar from './sidebar/sidebar'
import Dashboard from "./dashboard/dashboard"
import { BrowserRouter, Route, Switch, Link, Router } from 'react-router-dom'
import CountryDetails from "./countrydetail/countrydetail"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">

          <Wrapper>
            <Sidebar></Sidebar>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Nav></Nav>
                <Route path="/dashboard/:params" exact component={CountryDetails}></Route>
                <Route exact path="/dashboard">
                  <Dashboard></Dashboard>
                </Route>
                {/* <Route path="/dashboard" exact component={Dashboard} /> */}
              </div>
            </div>
          </Wrapper>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
