const express=require('express')
const router=express.Router()


const Products=[
    {
      id: 1,
      name: "Laptop",
      ratingCnt: 0,
      avgRating: 0
    },
    {
      id: 2,
      name: "Smartphone",
      ratingCnt: 0,
      avgRating: 0
    },
    {
      id: 3,
      name: "Headphones",
      ratingCnt: 0,
      avgRating: 0
    }
];


router.get('/products',(req,res)=>{
  return res.status(200).json({
    message:"Products retrieved successfully",
    Products
  })
})

router.post('/rate',(req,res)=>{
  const productid=req.body.productId
  const rating=req.body.rating

  if(productid===undefined || rating===undefined){
    return res.status(400).json({
      message:"productid and rating are required"
    })
  }
  const product=Products.find(a=>a.id==productid)
  if(!product){
    return res.status(404).json({
      message:"Product not found"
    })
  }

  rating=Number(rating)
  if(
    typeof rating !== "number" ||
    !Number.isInteger(rating) ||              //Number.isInteger() checks whether the number is a whole number.
    rating < 1 ||
    rating > 5){
    return res.status(400).json({
      message: "Rating must be between 1 and 5"
    });
  }

  const oldTotal=product.avgRating*product.ratingCnt
  product.ratingCnt++;
  const newTotal=oldTotal+rating
  product.avgRating=newTotal/product.ratingCnt

  return res.status(200).json({
    message:"Rating added successfully",
    product
  })
})

router.get('/ratings',(req,res)=>{
  const result=Products.map(product=>{
    return {
      name:product.name,
      ratingCnt: product.ratingCnt,
      avgRating: product.avgRating
    }
  })

  return res.status(200).json({
    message: "Product ratings retrieved successfully",
    products: result
  })
})

module.exports=router