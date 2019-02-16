const mongoose = require('mongoose');

import '../models/product';

const Product = mongoose.model('Product');

export function setUpConnection(){
	mongoose.connect(`mongodb://localhost/product`);
}

export function listProduct(){
	return Product.find();
}

export function createProduct(data){
	const product = new Product({
		title: data.title,
		comment: data.comment,
		type: data.type,
		number: data.number,
		createDate: new Date,
		imgPath: data.imgPath,	
	});
	return product.save();
};

export function updateProduct(data){
	let product = Product.findById(data.id);
	product = new Product({
		title: data.title,
		comment: data.comment,
		type: data.type,
		number: data.number,
		createDate: data.createDate,
		imgPath: data.imgPath,	
	})
	return product.save();
};

export function deleteProduct(id){
	Product.findById(id).remove();
}

export function findById(id){
	return Product.findById(id);
}