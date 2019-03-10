import React, { Component } from 'react';


class CardProduct extends Component {
  render() {
    console.log('CARD_PODUCT ', this.props);
    const product = this.props.product;
    return <div>
      <div>
        {product.title}
      </div>
      <div>
        {product.type}
      </div>
      <div>
        {product.number}
      </div>
      <div>
        {product.comment}
      </div>
    </div>
  }
}
export default CardProduct;