import React, {Component} from 'react'
import {ApiPrefix} from '../../../server/config/config';
import {Button} from "reactstrap";
import CardProduct from './CardProduct.jsx'

const axios = require('axios');

class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.getProducts = this.getProducts.bind(this);
    this.clearProduct = this.clearProduct.bind(this);
    this.state = {
      isProducts: false,
      products: []
    }
  }

  render() {
    console.log('STATE ', this.state);
    const item = this.state.products.map(product => <CardProduct product={product}/>);
    return <div>
      <div>
        {item}
      </div>
      <div className="row">
        <Button
          onClick={this.getProducts}
          className="mr-1"
        >
          Показать список товаров
        </Button>
        <Button
          onClick={this.clearProduct}
        >
          Очистить список
        </Button>
      </div>
    </div>
  }

  getProducts() {
    axios.get(`${ApiPrefix}/products`)
      .then(response => {
        // handle success
        console.log(response);
        const products = response.data;
        this.setState(({
          products: products
        }))
      })
      .catch(error => {
        // handle error
        console.log('Error ', error);
      });
  }

  clearProduct() {
    this.setState(({
      products: []
    }))
  }
}

export default AdminSearch;