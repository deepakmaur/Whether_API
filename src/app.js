const { Console } = require("console");
const path=require("path")
const express=require("express")
const app=express();
const port=process.env.PORT || 8000;

console.log(path.join(__dirname,"../public"))
const staticpath=path.join(__dirname,"../public");

app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
})

app.get("/whether",(req,res)=>{
    res.send("Welcome to whether page")
})

app.get("*",(req,res)=>{
    res.send(" OOps 404 Error ")
})

app.listen(port,()=>{
    console.log(`Listinening to port ${port}`);
})