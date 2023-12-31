import express from 'express';
import products  from "./data/products.js"
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
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

const PORT = process.env.PORT || 5000

app.listen(PORT , console.log(`server running in ${process.env.NODE_ENV} on port:${PORT}`))