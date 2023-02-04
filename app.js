const express=require('express');
const app=express();
require('dotenv').config();
const connectDB=require('./db/connect');
const productRouter=require('./routes/products'); 
const PORT=5050;
app.use(express.json());
const notFound=require('./middleware/not-found');
const errorHandlerMiddleware=require('./middleware/error-handler');
app.get('/',(req,res)=>{ 
    res.send('<h1> Store API <a href="http://localhost:5050/api/v1/products"> Product Route</a></h1>');
}) 

app.use('/api/v1/products',productRouter);  

 start=async ()=>{ 
    try{
        connectDB(process.env.MONGO_URI);
        app.listen(PORT,()=>{
            console.log(`app listning to PORT ${PORT}`)
        })}
    catch(err){ 
console.log(err);
    }
}
app.use(notFound);
app.use(errorHandlerMiddleware);
start();   
