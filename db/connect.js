const mongoose=require('mongoose');
mongoose.set('strictQuery',true);    // to avoid deprecation warning
const connect=(url)=>{
     return mongoose.connect(url,()=>{
        console.log(`DB connected`);
    })}

module.exports=connect;