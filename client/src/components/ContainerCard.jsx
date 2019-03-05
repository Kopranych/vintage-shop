import React, { Component } from 'react';
import Card from './Card.jsx';
import candlestick from '../img/product/candlestick.jpg';

class ContainerCard extends Component {
    render() {
        const title = 'Подсвечник';
        return <div>
            <div className="container">
                <div className="row">
                    <Card
                        path={candlestick}
                        title={title}
                    />
                    <Card
                        path={candlestick}
                        title={title}
                    />
                    <Card
                        path={candlestick}
                        title={title}
                    />

                </div>
            </div>
            <br/>
            <div className="container">
                <div className="row">
                    <Card
                        path={candlestick}
                        title={title}
                    />
                    <Card
                        path={candlestick}
                        title={title}
                    />
                    <Card
                        path={candlestick}
                        title={title}
                    />
                </div>
            </div>
            <br/><br/>
        </div>

    }
}
export default ContainerCard;