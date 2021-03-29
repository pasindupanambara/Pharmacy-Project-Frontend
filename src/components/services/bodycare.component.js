import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import powder from './images/powder.jpg';
import enchanteur from './images/enchanteur.jpg';

class Bodycare extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>Body Care</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={enchanteur} alt="enchanteur" style={{width:"80%"}}/>
                            <h3>Enchanteur</h3>
                            <h3>Eau De Cologne</h3>
                            <p>LKR 380.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={powder} alt="powder" style={{width:"80%"}}/>
                            <h3>Ponds</h3>
                            <h3>Dream Flower</h3>
                            <p>LKR 200.00</p>
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
export default Bodycare