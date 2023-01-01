const mongoose=require('mongoose');
const mongoURI="mongodb+srv://ZakkiNadaf:ZakkiNadaf@cluster0.rtxl11v.mongodb.net/test"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports=connectToMongo;