import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className=" navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Магазин</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/admin"><span className="glyphicon glyphicon-user"></span>Страница администратора</Link></li>
                        <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
export default Navbar;