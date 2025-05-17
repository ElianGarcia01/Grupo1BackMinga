import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let email = req.body.email
        let account = await User.findOne({ email: email })
        if (account) {
            return res.status(400).json({
                success: false, 
                message: "User alredy exists"
            })
        }
        req.user = {
        email: req.body.email,
        password: req.body.password,
        photo: req.body.photo,
        role: 0,
        }
        next()
    } catch (error) {
        next(error)
    }
}

