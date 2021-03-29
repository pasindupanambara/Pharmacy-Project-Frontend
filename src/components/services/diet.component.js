import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import sustagen from './images/sustagen.jpg';
import sustagenvanila from './images/sustagenvanila.jpg';

class Diet extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>Diet & Nutrition</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={sustagen} alt="sustagen" style={{width:"80%"}}/>
                            <h3>Sustagen</h3>
                            <h3>Chocolate Flavor</h3>
                            <p>LKR 3,995.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={sustagenvanila} alt="sustagenvanila" style={{width:"80%"}}/>
                            <h3>Sustagen</h3>
                            <h3>Vanila Flavor</h3>
                            <p>LKR 1,900.00</p>
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
export default Diet