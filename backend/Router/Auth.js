const data=[]
const express = require("express");
const router = express.Router();
const cors=require("cors")
require("../Db/conn");

const Data = require("../Model/UserSchema");


// router.get("/demo",(req,res)=>{
//     data.forEach(async (item)=>{
//         await Data.create(item)
//     })
// })


router.get("/", (req, res) => {
    res.send("hello world form the router file");
});

router.get("/alldata", async(req,res)=>{
  try{
  const allData= await Data.find({}).sort({id:1})
  res.json({success:true, data:allData})
  }
  catch(err){
      console.log(err);
      res.json({sucess:false,message:err.message})
  }
})

// 


router.post("/register", async (req, res) => {
  try{const {
    id,
    name,
    category,
    subcategory,
    createdAt,
    updatedAt,
    price,
    sale_price,
  } = req.body;

    const checkuser= await Data.findOne({id:id});
    if(checkuser){
        throw new Error("data already exists")
    }
    const newUser=await Data.create(req.body);
    res.json({success:true,data:newUser})
    }
    catch(err){
        res.json({sucess:false,message:err.message})
    }
//   if (
//     !id ||
//     !name ||
//     !category ||
//     !subcategory ||
//     // !createdAt ||
//     // !updatedAt ||
//     !price ||
//     !sale_price
//   ) {
//     return res.status(422).json({ error: "please fill the all Data" });
//   }

//   try {
//     const userExist = await Data.findOne({ id: id });
//     if (userExist) {
//       return res.status(422).json({ error: "email alreay exist" });
//     }

//     const user = new Data({
//       name,
//       category,
//       subcategory,
//       price,
//       sale_price,
//     });
//     const userRegister = await Data.create(user);
//     console.log(userRegister);
//     if (userRegister) {
//       res.status(201).json({ message: "all done" });
//     }
//   } catch (err) {
//     console.log(err);
//   }




  // Data.findOne({id:id})
  // .then((userExists)=>{
  //     if(userExists){
  //         return res.status(422).json({error:"email alreay exist"})

  //     }
  //     const user=new Data({id,name, category, subcategory, createdAt, updatedAt, price, sale_price})
  //     user.save().then(()=>{
  //         res.status(201).json({message:"Data added Successfully"})
  //     }).catch((err)=>res.status(500).json({error:"failed registration"}))
  // }).catch(err=>{console.log(err)})
});

module.exports = router;
