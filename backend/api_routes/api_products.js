const router = require('express').Router()
const productsLittleInfo = require('./data/productsLittleInfo')
const productsFullInfo = require('./data/productsFullInfo')
//1 API-EP for getting list of all users
router.route('/').get((req, response) => {
    req.send(response.json(productsLittleInfo))
})


//3 API-EP for getting one exercise by id
router.route('/:id').get((req, response) => {
    //find => lundefined
    const product = (productsFullInfo[0]).find(item => item.id == req.params.id); //string and number


    if (product === undefined || product === null) {
        response.sendStatus(404);
    } else {
        req.send(response.json(product))
    }
    
    
})
// productsFullInfo[req.params.id]

module.exports = router