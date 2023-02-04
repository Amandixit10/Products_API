const jsonProducts=require('./products.json');
const Product=require('./models/product');
const connectDB=require('./db/connect');
require('dotenv').config();
const start= async()=>{
    try{
connectDB(process.env.MONGO_URI)
await Product.deleteMany();
await Product.create(jsonProducts);
console.log('success');
process.exit(0);
}
catch(err)
{
    console.log(err);
    process.exit(1);
}
}
start();