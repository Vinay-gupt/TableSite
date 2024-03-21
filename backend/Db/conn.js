const mongoose= require("mongoose")

const DB="mongodb+srv://vinay:vinay@vinay-project.uj3jjfm.mongodb.net/?retryWrites=true&w=majority&appName=vinay-project"

mongoose.connect(DB).then(()=>{
    console.log("Connection success");
}).catch(err=>console.log(err,"no connection"))
