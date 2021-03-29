
import React, { Component } from 'react';
import GlobalStyle from './globalStyles';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Footer from './components/Footer/Footer';
import Login from "./components/login.component";
import SignUpascustomer from "./components/signup.component";
import SignUpaspharmacy from "./components/pharmacyaccount";
import District from './components/district.component';
import Upload from './components/upload.component';
import Pharmacy from "./components/pharmacy.component";
import Services from "./components/services.component";
import Firstaid from "./components/services/firstaid.component";
import Skincare from "./components/services/skincare.component";
import Motherandbaby from "./components/services/motherandbaby.component";
import Healthdevices from "./components/services/healthdevices.component";
import Nourishments from "./components/services/nourishments.component";
import Cough from "./components/services/cough.component";
import Diet from "./components/services/diet.component";
import Beautysuppliments from "./components/services/beautysuppliments.component";
import Adults from "./components/services/adults.component";
import Handfoot from "./components/services/handfoot.component";
import Bodycare from './components/services/bodycare.component';
import terms from './components/terms';
import working from './components/working';
import Forgotpassword from './components/forgotpassword';
import sendmessage from './components/sendmessage';
import messagesuccess from './components/messagesuccess';
//import Ph from "./components/Ph";
import Search from "./components/Search";
//import Addproduct from "./components/Addproduct";
import ProductList from "./components/ProductList";



function App() {
  return (<Router>
    <GlobalStyle/>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand">ORDER YOUR HEALTH & WELLNESS PRODUCTS ONLINE TODAY!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-as-customer"}>Sign up as customer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up-as-pharmacy"}>Sign up as Pharmacy</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/search"}>Search Pharmacy</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to = {"/services"}>Services</Link>
              </li>
                <li className="nav-item"> 
                <Link className="nav-link" to={"/"}>Home</Link>
                </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <Switch> <Route exact path='/' exact component={Home} /></Switch> 
            
           
            <Switch>
        
          
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up-as-customer" component={SignUpascustomer} />
            <Route path="/sign-up-as-pharmacy" component={SignUpaspharmacy} />
            <Route path="/district" component={District} />
            <Route path="/upload" component={Upload} />
            <Route path = "/pharmacy" component={Pharmacy}/>
            <Route path = "/services" component={Services}/>
            <Route path = "/firstaid" component={Firstaid}/>
            <Route path = "/skincare" component={Skincare}/>
            <Route path = "/motherandbaby" component={Motherandbaby}/>
            <Route path = "/healthdevices" component={Healthdevices}/>
            <Route path = "/nourishments" component={Nourishments}/>
            <Route path = "/cough" component={Cough}/>
            <Route path = "/diet" component={Diet}/>
            <Route path = "/beautysuppliments" component={Beautysuppliments}/>
            <Route path = "/adults" component={Adults}/>
            <Route path = "/handfoot" component={Handfoot}/>
            <Route path = "/bodycare" component={Bodycare}/>
            <Route path="/terms" component={terms} />
            <Route path="/working" component={working} />
            <Route path="/Forgotpassword" component={Forgotpassword} />
            <Route path="/sendmessage" component={sendmessage} />
            <Route path="/messagesuccess" component={messagesuccess} />
            <Route path="/search" component={Search} />

            {/*<Route path="/Addproduct" component={Addproduct} />*/}
            <Route path="/ProductList" component={ProductList} />

        </Switch>
         <Footer/>
        </div>
      
    </Router>
  );
}

export default App;












/*

function App() {
  return (<Router>
    <GlobalStyle/>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>ORDER YOUR HEALTH & WELLNESS PRODUCTS ONLINE TODAY!</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Home</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch><Route exact path='/' exact component={Home} /></Switch>
      
          <Switch>
            
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        
        
     
    <Footer/>
    </div>
    </Router>
  );//import Login from "./components/login.component";
//import SignUp from "./components/signup.component";
}


export default App; */