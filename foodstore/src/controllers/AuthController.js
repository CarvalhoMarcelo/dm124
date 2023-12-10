const axios = require('axios');
require('dotenv').config();

module.exports = {
    checkJWT(req, res, next) {
        const tokenRequest = req.headers.token;

        if(!tokenRequest) {
            return res.status(401).json({errorMsg: `Token not provided.`});
        }

        let request = {
            url: `${process.env.AUTH_SERVER}/auth/validateToken`,
            data: {},
            config: {
                headers: {
                    token: tokenRequest
                }
            }
        };

        console.log(`Sending token to [${request.url}]`);
        axios.post(request.url, request.data, request.config)
            .then((response) => {
                console.log(`Token OK on AuthController!`);
                next();
            })
            .catch((error) => {
                console.log(`Invalid token on AuthController!`);
                return res.status(error.response.status).json({error});
            });
    }
}