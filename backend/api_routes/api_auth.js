const router = require('express').Router()
const users = require("./data/users")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const TOKEN_KEY = "qwe"



//1 API-EP for getting list of all users
router.route('/login').post((req, res) => {
   // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;
   
    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = users[0].find((u) => u.email == email);
    if (user && (bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(   
        { user_id: user.id, emal:  user.email,role: user.role },
        TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      console.log(jwt.verify(token, TOKEN_KEY));
      // save user token
    
      user.token = token;
      // user
      res.status(200).json(token);
    } else
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
})


//3 API-EP for getting one exercise by id
router.route('/register').post((req, response) => {
    
})

router.route('/a').get((req, response) => {
    req.send(response.json({"poshel nahui": "qqwe"}))
})
// productsFullInfo[req.params.id]

module.exports = router;
