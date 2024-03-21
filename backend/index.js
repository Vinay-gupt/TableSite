const express= require("express")
const app=express()
const mongoose= require("mongoose")
const{User}=require("./Model/UserSchema")
const cors=require("cors")

app.use(cors())
require("./Db/conn")

app.use(express.json())
app.use(express.urlencoded({extended : false}));


//we link router file to make routes easy
app.use("/", require("./Router/Auth"));



//MiddleWare---it acts a checker, it check the condition while going to other routes. for ex- if we go to about section of a account then the middleware will check whether person has loggedin or not and if not then i will redirect it to loggined route and don't allow to go to about page
const middleware=(req,res,next)=>{
    console.log("hello From your middleware"); //runs first
    next()
}





// app.get("/",(req,res)=>{
//     res.send("Hello world from the server")

// })

app.get("/about",middleware,(req,res)=>{
    console.log("Hello about page"); //runs after middleware
    res.send("Hello aboutworld from the server")

})
app.get("/contact",(req,res)=>{
    res.send("Hello contact world from the server")

})

app.listen(3000,()=>{
    console.log("server running")
})