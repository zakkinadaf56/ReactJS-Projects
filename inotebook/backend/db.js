const mongoose=require('mongoose');
const mongoURI="mongodb+srv://ZakkiNadaf:ZakkiNadaf@cluster0.rtxl11v.mongodb.net/inotebook"

const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo successfully")
    })
}

module.exports=connectToMongo;