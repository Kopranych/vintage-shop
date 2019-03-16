import React, {Component} from 'react';
import {Button} from "reactstrap";
import { ApiPrefix } from '../../../server/config/config'

const axios = require('axios');

class CardProduct extends Component {
  constructor(props){
    super(props);
    const { title, type, comment, number } = this.props;
    this.deleteProduct = this.deleteProduct.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.state = {
      isEditing: false,
      title: title,
      type: type,
      comment: comment,
      number: number
    }
  }

  editProduct(){
    const { _id } = this.props;
    const { title, type, comment, number } = this.state;
    axios.put(`${ApiPrefix}/product/${_id}`, {
      title: title,
      type: type,
      comment: comment,
      number: number
    })
  }

  deleteProduct(){
    console.log('PROPS ', this.props);
    const { _id, } = this.props.product;
    axios.delete(`${ApiPrefix}/product/${_id}`)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  getProduct(){
    const { _id } = this.props.product;
    axios.get(`${ApiPrefix}/product/${_id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  toggle(){
    this.setState({
      isEditing: !this.state.isEditing
    })
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
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
          onClick={this.toggle}
          className="mr-1"
        >
          {this.state.isEditing ? 'Отмена' : 'Редактировать'}
        </Button>
        <Button
          onClick={this.deleteProduct}
        >
          Удалить
        </Button>
        {this.state.isEditing ? <div className="container">
          <div className="row">

            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Название</label>
                <input name="title" type="email" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" placeholder="Подсвечник"
                       value={this.state.title}
                       onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Категория</label>
                <input name="type" type="email" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" placeholder="Интерьер"
                       value={this.state.type}
                       onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Количество</label>
                <input name="number" type="number" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" placeholder="2"
                       value={this.state.number}
                       onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Описание товара</label>
                <textarea name="comment" className="form-control" id="exampleFormControlTextarea1" rows="3"
                          value={this.state.comment}
                          onChange={this.handleChange}></textarea>
              </div>
              <button type="button" className="btn btn-primary" onClick={this.editProduct}>Обновить</button>
            </form>
          </div>
        </div> : ''}
      </div>
    </div>
  }
}

export default CardProduct;