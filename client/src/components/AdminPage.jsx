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
        <Link to="/admin">
          Главная страница
        </Link>
        <div className="container">
          <div className="row">
            <div className="col">
              <AdminForm/>
            </div>
            <div className="col">
              <AdminSearch/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default AdminPage;