
import connectDb from '../../../../utils/Db'
import { Product } from '../../../../Schema/productModel'

export default async function productHandler(req, res) {

    await connectDb()

    try {
        const allProducts = await Product.find()
        res.status(200).send(allProducts)
    } catch (error) {
        console.log(error)
    }

}