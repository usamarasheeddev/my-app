import { Product } from "../../../../Schema/productModel"
const { default: connectDb } = require("../../../../utils/Db")

export default async function addProduct(req, res) {

    const { name, category, price } = req.body
    if (req.method !== 'POST') {
        res.status(500).send({ success: false, message: "only Post method is  allowed" })
    } else {
        try {
            await connectDb()
            await Product.create({
                name,
                price,
                category
            })
            res.status(200).json({ success: true, message: "Product created successfully" })
        } catch (error) {
            console.log(error)
            res.status(400)

        }
    }
}