import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import sanitizer from './images/sanitizer.jpg';
import footcream from './images/footcream.jpg';

class Handfoot extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>Hand & Foot Care</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={sanitizer} alt="sanitizer" style={{width:"80%"}}/>
                            <h3>Safeguard</h3>
                            <h3>Hand Sinitizin Gel</h3>
                            <p>200 ml - LKR 675.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={footcream} alt="footcream" style={{width:"80%"}}/>
                            <h3>Nature Secrets Foot Care Cream</h3>
                            <h3>Aloe Miracle</h3>
                            <p>80 ml- LKR 398.00</p>
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
export default Handfoot