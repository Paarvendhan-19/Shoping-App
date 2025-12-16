const productModel = require("../model/Product");
exports.getProduct = async(req, res) => {
    try {
        const product = await productModel.find();
        res.json(product);
    } catch (error) {
        console.error(error);        
        res.status(500).json({error: 'server error'});
    }
}