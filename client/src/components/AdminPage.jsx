import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AdminContent from "./AdminContent.jsx";

class AdminPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Link to="/">
                    Главная страница
                </Link>
                <AdminContent/>
                <Footer/>
            </div>
        );
    }
}

export default AdminPage;