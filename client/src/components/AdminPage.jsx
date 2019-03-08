import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import AdminForm from "./AdminForm.jsx";
import AdminSearch from "./AdminSearch.jsx";

class AdminPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Link to="/">
                    Главная страница
                </Link>
                <AdminForm/>
                <AdminSearch/>
                <Footer/>
            </div>
        );
    }
}

export default AdminPage;