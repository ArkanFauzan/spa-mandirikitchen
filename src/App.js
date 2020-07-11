import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import router
import {BrowserRouter as Router,
        Switch,
        Route,
} from 'react-router-dom'

// import component
import {NavbarComponent} from './components/navbar'
import {HomeComponent} from "./components/home"
import {FooterComponent} from "./components/footer"
import {AboutComponent} from "./components/about"
import {ProductComponent} from "./components/product"

// merender component navbar, komponen sesuai router, dan footer
class App extends React.Component{
  render(){
    return (
      <Router>

        <div className="container-fluid">
          <div className="col-12">
            <NavbarComponent />
          </div>

          <div className="col-12" >
            <Switch>
              <Route path="/products">
                  <ProductComponent />
              </Route>
              <Route path="/about">
                  <AboutComponent />
              </Route>
              <Route path="/home">
                  <HomeComponent />
              </Route>
              <Route path="/">
                  <HomeComponent />
              </Route>
            </Switch>
          </div>

          <div className="col-12" style={{background:"#E6E6E6"}}>
            <FooterComponent />
          </div>

        </div>
      </Router>
      
    );
  }
  
}

export default App;
