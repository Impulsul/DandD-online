import Express from "express";
// import Products from "./products.js";


const app = Express();
const port = 3000;


app.get("/", (req, res)=>{ 
    res.send("Hello World");
    // res.json(Products)
})


app.listen(port, () => console.log("listening on port" + port))