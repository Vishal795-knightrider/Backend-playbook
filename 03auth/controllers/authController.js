const jwt=require("../utils.js/jwt") 


const registeredUser=()=>{
}
router.post('/register',(req,res)=>{
  const {email,password}=req.body;
  if(!email || !password){
    return res.status(400).json({
      message:"emial n password shodil be mandatory"
    })
  }

  const exist =students.findOne(email);
  if(exist){
    return res.status(400).json({message:"already exist"});
  }

  const pass =bcrypt.hash(password,salt);
  const newStud =student.create({
      email,
      password:pass
  })
  student.save(newStud);
})