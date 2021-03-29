import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/subpages.css';
import cerelacberas from './images/cerelacberas.jpg';
import cerelacwheatapple from './images/cerelacwheatapple.jpg';
import nangrow from './images/nangrow.jpg';
import pediapro1 from './images/pediapro1.jpg';
import pediapro2 from './images/pediapro2.jpg';
import pears from './images/pears.jpg';


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
                            <img src={cerelacberas} alt="cerelacberas" style={{width:"80%"}}/>
                            <h3>Cerelac</h3>
                            <h3>Beras Rice</h3>
                            <p>400g - LKR 625.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={cerelacwheatapple} alt="cerelacwheatapple" style={{width:"80%"}}/>
                            <h3>Cerelac</h3>
                            <h3>Wheat Apple</h3>
                            <p>400g -LKR 625.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={nangrow} alt="nangrow" style={{width:"80%"}}/>
                            <h3>NANGROW</h3>
                            <h3>2-5 Years</h3>
                            <p>400g -LKR 560.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={pediapro1} alt="pediapro1" style={{width:"80%"}}/>
                            <h3>PediaPro</h3>
                            <h3>1-2 Years</h3>
                            <p>400g -LKR 550.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={pediapro2} alt="pediapro2" style={{width:"80%"}}/>
                            <h3>PediaPro</h3>
                            <h3>2-5 Years</h3>
                            <p>400g -LKR 550.00</p>
                        </div>
                    </div>
                    <div className="form-column">
                        <div className="content">
                            <img src={pears} alt="pears" style={{width:"80%"}}/>
                            <h3>Pears</h3>
                            <h3>Baby Soap</h3>
                            <p>400g -LKR 200.00</p>
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