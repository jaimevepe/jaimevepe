const express = require('express');
const router = express.Router();

const Product = require('../model/model')

router.get('/', (req, res, next) => {
    Product.find()
    .sort({ date: -1 }) // sort dates in descending order
    .then(items => res.json(items))
})

// Getting specific products by ID
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    Product.findById(id)
        .sort({ date: -1 }) // sort dates in descending order
        .then(items => res.json(items))

    // if (id === 'special') {
    //     res.status(200).json({
    //         message: 'You discovered the special ID',
    //         id: id
    //     });
    // } else {
    //     res.status(200).json({
    //         message: 'You passed an ID',
    //         id: id
    //     })
    // }
})

router.post('/', (req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // };
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save()
    .then(item => {
        console.log(item)
        res.status(200).json({
            message: 'Handling GET resquest',
            createdProduct: product
        });
    })
    .catch(err => console.log(err))

    // res.status(200).json({
    //     message: 'Handling POST request to /products',
    //     createdProduct: product
    // })
})

router.put('/:prodcutId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps= {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.update({_id: id}, { $set: updateOps })
    .exec()
    .then(item => {
        console.log(item)
        res.status(200).json(item)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
    
    // res.status(200).json({
    //     message: 'Updated the product'
    // })
})

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .then(item => item.remove().then(() => res.json({message:'Deleted Item', deletedItem: item})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router;