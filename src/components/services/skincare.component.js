import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import niveabodymilk from './images/niveabodymilk.jpg';
import niveasmoothmilk from './images/niveasmoothmilk.jpg';
import niveawhitening from './images/niveawhitening.jpg';
import VaselineCocoa from './images/VaselineCocoa.jpg';
import ponds from './images/ponds.jpg';
import naturesecrets from './images/naturesecrets.jpg';


class Firstaid extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>SKIN CARE</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={niveabodymilk} alt="niveabodymilk" style={{width:"80%"}}/>
                            <h3>NIVEA</h3>
                            <h3>Body Milk</h3>
                            <p>200ml - LKR 200.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={niveasmoothmilk} alt="niveasmoothmilk" style={{width:"80%"}}/>
                            <h3>NIVEA</h3>
                            <h3>Smooth Milk</h3>
                            <p>400ml -LKR 550.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={niveawhitening} alt="niveawhitening" style={{width:"80%"}}/>
                            <h3>NIVEA</h3>
                            <h3>Extra Whitening</h3>
                            <p>400ml -LKR 560.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={VaselineCocoa} alt="VaselineCocoa" style={{width:"80%"}}/>
                            <h3>Vaseline</h3>
                            <h3>Cocoa Radiant</h3>
                            <p>400ml -LKR 450.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={ponds} alt="ponds" style={{width:"80%"}}/>
                            <h3>POND'S</h3>
                            <h3>Triple Vitamin</h3>
                            <p>200ml -LKR 250.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={naturesecrets} alt="naturesecrets" style={{width:"80%"}}/>
                            <h3>Nature Secrets</h3>
                            <h3>Aloevera</h3>
                            <p>100ml -LKR 200.00</p>
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
export default Firstaid