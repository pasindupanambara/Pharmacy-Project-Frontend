import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import surgical from './images/surgical.jpg';
import jonac from './images/jonac.jpg';
import plaster from './images/plaster.jpg';
import medicalGauze from './images/medicalGauze.jpg';
import plasterroll from './images/plasterroll.jpg';
import betadine from './images/betadine.jpg';
import cottonwool from './images/cottonwool.jpg';
import musclegardGel from './images/musclegardGel.jpg';
import axeoil from './images/axeoil.jpg';

class Firstaid extends Component{

    render(){

        return(

            <div className="box firstaid">
                <div className= "container">
                <h1>FIRST AID</h1>
                </div>
                <div className="row">
                    <div className="form-column">
                        <div className="content">
                            <img src={surgical} alt="Surgical" style={{width:"80%"}}/>
                            <h3>Isopropyl Alcohol</h3>
                            <h3>(Surgical Spirit)</h3>
                            <p>60ml - LKR 100.00</p>
                            <p>30ml - LKR 60.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={axeoil} alt="axeoil" style={{width:"80%"}}/>
                            <h3>Axe Oil</h3>
                            <p>50 g -LKR 40.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={medicalGauze} alt="medicalGauze" style={{width:"80%"}}/>
                            <h3>Medical Gauze</h3>
                            <p>LKR 150.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={plaster} alt="Plaster" style={{width:"80%"}}/>
                            <h3>Detol Plaster</h3>
                            <p>LKR 8.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={plasterroll} alt="plasterroll" style={{width:"80%"}}/>
                            <h3>Plaster Roll</h3>
                            <p>LKR 100.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={betadine} alt="betadine" style={{width:"80%"}}/>
                            <h3>Betadine Solution</h3>
                            <p>60 ml -LKR 100.00</p>
                            <p>30 ml -LKR 50.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={cottonwool} alt="cottonwool" style={{width:"80%"}}/>
                            <h3>Cotton Wool</h3>
                            <p>50 g -LKR 40.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={musclegardGel} alt="musclegardGel" style={{width:"80%"}}/>
                            <h3>Musclegard Gel</h3>
                            <p>50 g -LKR 40.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={jonac} alt="jonac" style={{width:"80%"}}/>
                            <h3>Jonac Gel</h3>
                            <p>LKR 100.00</p>
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