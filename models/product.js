const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	title: {type: String, required: true},
	comment: { type: String},
	type: { type: String},
	number: {type: Number},
	createDate: {type: Date},
	imgPath: {type: String}
});

const Product = mongoose.model('Product', ProductSchema);