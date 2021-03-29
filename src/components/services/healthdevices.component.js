import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import insulinpen from './images/insulinpen.jpg';
import pressure from './images/pressure.jpg';

class Healthdevices extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>Health Devices</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={insulinpen} alt="insulinpen" style={{width:"80%"}}/>
                            <h3>NOVO PEN 4</h3>
                            <h3>Insulin Pen Injector</h3>
                            <p>LKR 1,950.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={pressure} alt="pressure" style={{width:"80%"}}/>
                            <h3>OMRON</h3>
                            <h3>Blood Pressure Meter</h3>
                            <p>LKR 5,500.00</p>
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
export default Healthdevices