import React, { Component } from "react";
import { Link } from "react-router-dom";
import './css/services.css';

class Services extends Component{

    render(){

        return(
            
            <div className="box services">
                <div className="container">
                    <h1>Our Services</h1>
                </div>

                <div className="row">
                    <div className="form-column">
                        <h3>Medical Devices</h3>
                            <ul><Link to="/firstaid">First Aid</Link></ul>
                            <ul><Link to="/healthdevices">Health Devices</Link></ul>
                            <p><a href="#">Supports & Braces</a></p>
                    </div>

                    <div className="form-column">
                        <h3>Wellness</h3>
                            <ul><Link to="/motherandbaby">Mother and Baby</Link></ul>
                            <ul><Link to="/cough">Cough, Cold & Allergy</Link></ul>
                            <ul><Link to="/diet">Diet & Nutrition</Link></ul>
                            <ul><Link to="/beautysuppliments">Beauty Supplements</Link></ul>
                            <ul><Link to="/adults">Adult and Diabetic Care</Link></ul>
                            <p><a href="#">Pain and Fever</a></p>
                            <p><a href="#">Eyes and Ears</a></p>
                    </div>

                    <div className="form-column">
                        <h3>Personal Care</h3>
                            <ul><Link to="/nourishments">Nourishments</Link></ul>
                            <ul><Link to="/skincare">Skin Care</Link></ul>
                            <ul><Link to="/handfoot">Hand & Foot Care</Link></ul>
                            <ul><Link to="/bodycare">Body Care</Link></ul>
                            <p><a href="#">Womens Personal Care</a></p>
                            <p><a href="#">Oral Care</a></p>
                    </div>

                    <Link to= "/ProductList" > <button type="submit" className="btn btn-dark btn-lg btn-block">Add Your Products Here</button></Link>
                </div>              
            </div>
        );
    }
}
export default Services