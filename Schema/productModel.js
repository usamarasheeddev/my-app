import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  createdAt:{type:Date, default:Date.now}
});


mongoose.models={}

export const  Product = mongoose.model('Product', productSchema);


