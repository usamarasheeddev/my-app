import { Product } from "../../../../Schema/productModel"
const { default: connectDb } = require("../../../../utils/Db")

export default async function addProduct(req,res){


    
    try {
        await connectDb()
       await Product.create({
            name:'macbook',
            price:900,
            category:'laptop'
        })
        res.status(200).json({success:true,message:"Product created successfully"})
    } catch (error) {
        console.log(error)
        res.status(400)
        
    }
}