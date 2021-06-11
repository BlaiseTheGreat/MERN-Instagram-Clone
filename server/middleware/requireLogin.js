const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const mongoose = require('mongoose');
const User = mongoose.model("User");

module.exports = (req, res, next) => {
    const {authorization} = req.headers
    //authorization === Bearer efdsjfklseicjidclm
    if(!authorization) {
        return res.status(401).json({error: "You must be logged in to access this."});
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET, (err, payload) => {
        if(err){
            return res.status(401).json({error: "You must be logged in to access this."});
        }

        const { _id } = payload
        User.findById(_id).then(userdata=> {
            req.user = userdata;
            next();
        })
    })
}