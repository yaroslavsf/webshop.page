//imports
const express = require('express')
const cors = require('cors')

//locate app via express
const app = express()
const port =  5500; //set up the port

app.use(cors()) //multi-domain on one pc (cors registration)
app.use(express.json()) //api endpoint in JSON

//api rotes register
const productsRouter = require('./api_routes/api_products')

app.use('/products', productsRouter)


app.listen(port, () => {
    console.log(`server is running on port${port}`)
})
