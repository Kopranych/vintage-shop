import React, {Component} from 'react'
import {ApiPrefix} from '../../../server/config/config';
import {Button} from "reactstrap";

const axios = require('axios');

class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      isProducts: false,
      products: []
    }
  }

  render() {
    console.log('STATE ', this.state);
    const item = this.state.products.map(product => <div>{product.title}</div>);
    return <div>
      <div>
        {item}
      </div>
      <Button
        onClick={this.getProducts}
      >
        Показать список товаров
      </Button>
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
}

export default AdminSearch;