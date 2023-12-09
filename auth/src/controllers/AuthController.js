const jwt = require(`jsonwebtoken`);
require('dotenv').config();

module.exports = {
    login(req, res) {       
        const {user, pass } = req.body

        if(user && pass){
            const token = jwt.sign({user, pass}, process.env.PRIVATE_KEY, {
                expiresIn: `${process.env.EXP_TIME}`
            });

            console.log(`User ${user} logged in.`);
            return res.status(200).json({token, expiresIn: `${process.env.EXP_TIME}`});
        } else {
            return res.status(401).json({msg: `User and Pass are required!`});
        }
    },

    checkJWT(req, res) {       
        const tokenRequest = req.headers.token;

        if(tokenRequest){
            console.log(`Verifying token ${tokenRequest.slice(0,10)}... `);

            jwt.verify(tokenRequest, process.env.PRIVATE_KEY, (error, decoded) => {
                if(error){
                    return res.status(401).json({msg: `Invalid token.`, token: tokenRequest, error});
                } else {
                    return res.status(200).json({user: decoded.user, token: tokenRequest});
                }
            });
        } else {
            return res.status(401).json({msg: `Token not supplied.`});
        }
    },    
    

};