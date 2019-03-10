import React, {Component} from 'react';
import {Button} from "reactstrap";
import { ApiPrefix } from '../../../server/config/config'

const axios = require('axios');

class CardProduct extends Component {
  constructor(props){
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
  }
  //
  // editProduct(){
  //   const { _id } = this.props;
  //   axios.put(`${ApiPrefix}/product/${id}`, {
  //
  //   })
  // }

  deleteProduct(){
    console.log('PROPS ', this.props);
    const { _id } = this.props.product;
    axios.delete(`${ApiPrefix}/product/${_id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  getProduct(){
    const { _id } = this.props.product;
    axios.get(`${ApiPrefix}/product/${_id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

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
      <div>
        {product.createDate}
      </div>
      <div className="row">
        <Button
          onClick={this.getProduct}
          className="mr-1"
        >
          Редактировать
        </Button>
        <Button
          onClick={this.deleteProduct}
        >
          Удалить
        </Button>
      </div>
    </div>
  }
}

export default CardProduct;