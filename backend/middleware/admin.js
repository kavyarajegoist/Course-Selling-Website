const jwt = require("jsonwebtoken");
const {JWT_ADMIN_PASSWORD} = require("../config");

const  adminMiddleware = (req,res,next)=>{
        const auth = req.headers.authorization;
        const words = auth.split(" ");
        if(!auth)
            {
              return  res.status(403).json({message:"Authorization token is missing."})
                
            }
            if(words.length !==2 || words[0] !== "Bearer" )
            {
                return res.status(403).json({message:"Invalid authorization format. Use 'Bearer <token>'"})
            }
        try{
            const token = words[1];
            const decodedData = jwt.verify(token,JWT_ADMIN_PASSWORD);
            if(decodedData)
            {
                req.adminId = decodedData.id;
                next();
            }
        }
        catch(err)
        {
            res.status(403).json({message:"You are not sign in."});
            return;
        }
    

        
}

module.exports = {adminMiddleware}