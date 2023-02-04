const Product=require('../models/product');

const getAllProducts= async(req,res)=>{
   const queryObject={};
   const {_id,name,price,featured,rating,createdAt,company,__v,sort,feilds} =req.query;

   if(_id)
   {
queryObject._id=id;
   }
   if(name)
   {
queryObject.name={ $regrex: name, $options:'i'};
   }
   if(price)
   {
queryObject.price=price;
   }
   if(featured)
   {
queryObject.featured=featured;
   }
   if(rating)
   {
queryObject.rating=rating;
   }
   if(createdAt)
   {
queryObject.createdAt=createdAt;
   }
   if(company)
   {
queryObject.company=company;
   }
   if(__v)
   {
queryObject.__v=__v;
   }
   console.log(queryObject);
    
   let result=Product.find(queryObject);
   if(sort)
   {
      const sortList=sort.split(',').join(' ');
      result=result.sort(sortList);      // https://mongoosejs.com/docs/api/query.html#query_Query-sort
   }
   else{
      result=result.sort('createdAt');
   }
   if(feilds)
   {
      const feildList=feilds.split(',').join(' ');
      result=result.select(feildList);
   }
const page=Number(req.query.page)||1;
const limit=Number(req.query.limit)||10
const skip=(page-1)*limit;
result=result.skip(skip).limit(limit);
   const products=await result;
await res.status(200).json({products});
}

const getAllProductsStatic= async(req,res)=>{
    const products=await Product.findOne({});
    await res.status(200).json({products});
    }

    module.exports={
        getAllProducts,
        getAllProductsStatic
    };