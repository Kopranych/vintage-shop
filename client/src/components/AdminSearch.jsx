import React, {Component} from 'react'
import {ApiPrefix} from '../../../server/config/config';

const axios = require('axios');

class AdminSearch extends Component {
  constructor(props) {
    super(props);
    this.get = this.get.bind(this.get);
  }

  render() {
    this.get();
    return <div>
      hello
    </div>
  }

  get() {
    axios.get(`${ApiPrefix}/products`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log('Error ', error);
      });
  }
}

export default AdminSearch;