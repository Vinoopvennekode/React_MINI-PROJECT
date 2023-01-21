const jwt =require('jsonwebtoken')


module.exports.generateToken=(user)=>{    //jwt has 3 parameter----1.id,2.secret KEY,expire time


    const jwtSecretKey = process.env.JWT_SECRET;
    const token = jwt.sign(
        { _id: user._id, name: user.name, email: user.email },
        jwtSecretKey
    );
    return token;



// return jwt.sign((id),process.env.JWT_SECRET,{
//     expiresIn:"30d"
// })
}

