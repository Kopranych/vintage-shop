import React, {Component} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import ContainerCard from './ContainerCard.jsx';

class MainPage extends Component {
    render() {
        return <div>
            <Header/>
            <Navbar/>
            <ContainerCard/>
            <Footer/>
        </div>
    }
}

export default MainPage;