const errorhandler=(err,req,next)=>{
  console.log(err)
  const statusCode=err.statusCode() || 500
  res.status(statusCode).json({
    success:fail,
    message:statuscode===500?"Internal Server Error":err.message
  })
}