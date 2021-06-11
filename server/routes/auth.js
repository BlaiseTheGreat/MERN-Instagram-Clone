const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');


router.post('/signup', (req, res) => {
    //console.log(req.body.name);
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
        return res.status(422).json({ error: "please add all the fields" });
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "user already exists with that email" });
            }
            bcrypt.hash(password, 12)
                .then(hashedpassWord => {
                    const user = new User({
                        email,
                        password: hashedpassWord,
                        name
                    })

                    user.save()
                        .then(user => {
                            res.json({ massage: "saved successfully" });
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })

        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router;