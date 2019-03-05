import React, {Component} from 'react';

import vk from '../img/icon/iconfinder_vk.svg';
import instagram from '../img/icon/iconfinder_instagram.svg';
import '../css/Footer.css'

class Footer extends Component {
    render() {
        return <footer className="container-fluid text-center">
            <p>Социальные сети</p>
            <div className="icon">
                <div className="">
                    <a href="https://www.instagram.com/kopranova_anna/" target="_blank">
                        <img className="img-icon-inst" src={instagram} alt=""/>
                    </a>

                </div>
                <div className="">
                    <a href="https://vk.com/id80828211" target="_blank">
                        <img className="img-icon-inst" src={vk} alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    }
}
export default Footer;