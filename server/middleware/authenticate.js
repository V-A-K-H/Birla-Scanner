const jwt=require('jsonwebtoken')
const config=require('config')

module.exports=function(req,res,next) {
    const token=req.header('x-auth-token')
    console.log(req.params)
    if (!token) {
            return res.status(401).json({msg: "No token, authorization denied"})
    }
    // Verify token 
    try{
        jwt.verify(token,config.get('jwtSecret'), (err,decoded)=> {
            if (err) {
                return res.json(401).json("The jwt key is not valid")
            }
            else {
                // console.log(localStorage.getItem('Auth'))
                req.user=decoded.user
                next()


            }
        })
    }
    catch (errors) {
        console.log("Something is wrong with authenticate middleware")
        res.status(500).json({errors})
    }
}