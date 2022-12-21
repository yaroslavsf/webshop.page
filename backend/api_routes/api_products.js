const router = require('express').Router()
const productsLittleInfo = require('./data/productsLittleInfo')
const productsFullInfo = require('./data/productsFullInfo')
const users = require("./data/users")
// const verifyToken = require('./api_auth');

function verifyToken(token) {
    //   const decoded = jwt.verify(token, TOKEN_KEY);
      const user = users[0].find((u) => u.token === token);

      if (user) return true
      else return false
};

//1 API-EP for getting list of all users
router.route('/').get((req, response) => {
    const token = req.headers.token
    if (!verifyToken(token)) {
        response.sendStatus(401);
    }
    response.send(response.json(productsLittleInfo))
})


//3 API-EP for getting one exercise by id
router.route('/:id').get((req, response) => {
  
    const token = req.headers.token
    if (!verifyToken(token)) {
        response.sendStatus(401);
    }
    const product = (productsFullInfo[0]).find(item => item.id == req.params.id); //string and number


    if (product === undefined || product === null) {
        response.sendStatus(404);
    } else {
        response.send(response.json(product))
    }
    
    
})
// productsFullInfo[req.params.id]

module.exports = router