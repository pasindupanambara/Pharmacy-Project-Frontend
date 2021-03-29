import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import facia from './images/facia.jpg';

class Beautysuppliments extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>Beauty Supplements</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={facia} alt="facia" style={{width:"80%"}}/>
                            <h3>Facia Premium</h3>
                            <h3>Skin Lightening Formula Capsules</h3>
                            <p>LKR 154.50 per capsule</p>
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