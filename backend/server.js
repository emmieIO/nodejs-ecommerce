const express = require('express');
const products = require("./data/products")
const cors = require('cors');

const app = express();

app.use(cors())
app.get("/api/products",(req,res)=>{
    res.json(products);
})

app.get("/api/products/:id",(req,res)=>{
    const id = req.params.id;
    const product = products.find(product => product._id == id)
    res.json(product);
})


app.listen(5000, console.log('server running'))