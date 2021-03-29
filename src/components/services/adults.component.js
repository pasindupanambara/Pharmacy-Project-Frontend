import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import safeguard from './images/safeguard.jpg';

class Beautysuppliments extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>Adult and Diabetic Care</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={safeguard} alt="safeguard" style={{width:"80%"}}/>
                            <h3>Safeguard</h3>
                            <h3>Adult Diapers</h3>
                            <p>LKR 1,280.00 </p>
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
export default Beautysuppliments