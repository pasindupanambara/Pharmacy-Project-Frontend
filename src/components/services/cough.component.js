import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import samahan from './images/samahan.jpg';
import strepsilsoriginal from './images/strepsilsoriginal.jpg';
import strepsilshoney from './images/strepsilshoney.jpg';

class Cough extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>Cough, Cold and Allergy</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={samahan} alt="samahan" style={{width:"80%"}}/>
                            <h3>Samahan</h3>
                            <h3>Ayurvedic Herbal Tea Packets</h3>
                            <p>LKR 15.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={strepsilsoriginal} alt="strepsilsoriginal" style={{width:"80%"}}/>
                            <h3>Strepsils</h3>
                            <h3>Original</h3>
                            <p>LKR 3.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={strepsilshoney} alt="strepsilshoney" style={{width:"80%"}}/>
                            <h3>Strepsils</h3>
                            <h3>Honey & Lemon</h3>
                            <p>LKR 3.00</p>
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
export default Cough