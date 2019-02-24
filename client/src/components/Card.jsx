import React, {Component} from 'react';

import '../css/Card.css'

class Card extends Component {
    render() {
        const {path, title} = this.props;
        return <div className="col-sm-4 card">
            <div className="panel-custom">
                <div className="panel-body panel-body-custom">
                    <img src={path}
                         className="img-responsive img-custom img-card"
                         alt="Image"/>
                </div>
                <div className="panel-footer panel-footer-custom">{title}</div>
            </div>
        </div>

    }
}

export default Card;