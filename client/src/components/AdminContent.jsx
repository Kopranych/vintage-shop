import React, {Component} from 'react';

class AdminContent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.sendProduct = this.sendProduct.bind(this);

        this.state = {
            title: "",
            type: "",
            number: null,
            comment: ""
        };
        console.log(this.state)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    sendProduct() {

    }

    render() {
        return <div className="container">
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
                        <input name="number" type="email" className="form-control" id="exampleInputEmail1"
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
                    <button type="button" className="btn btn-primary" onClick={this.sendProduct}>Добавить</button>
                </form>
            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
        </div>
    }
}

export default AdminContent;