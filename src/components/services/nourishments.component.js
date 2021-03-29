import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import kumarika from './images/kumarika.jpg';
import kesha from './images/kesha.jpg';
import emami from './images/emami.jpg';

class Nourishments extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>Nourishments</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={kumarika} alt="kumarika" style={{width:"80%"}}/>
                            <h3>Kumarika</h3>
                            <h3>Hair Oil</h3>
                            <p>100 ml - LKR 150.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={kesha} alt="kesha" style={{width:"80%"}}/>
                            <h3>Link Kesha</h3>
                            <h3>Ayurveda Hair Oil</h3>
                            <p>100 ml - LKR 175.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={emami} alt="emami" style={{width:"80%"}}/>
                            <h3>Emami</h3>
                            <h3>7 Oils in One</h3>
                            <p>100 ml - LKR 200.00</p>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>
                       <Link to = "/services" ><button type="button" className="btn btn-dark btn-lg btn-block" value = "Back" >Back</button></Link>
                    <br/>
                </div>  
            </div>
        );
    }
}
export default Nourishments