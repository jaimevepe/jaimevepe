const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET request'
    })
})

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Handling POST request'
    })
})

router.put('/:prodcutId', (req, res) => {
    res.status(200).json({
        message: 'Updated'
    })
})

router.delete('/:productId', (req, res) => {
    res.status(200).json({
        message: 'Deleted product'
    })
})

module.exports = router;