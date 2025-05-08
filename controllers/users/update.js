import User from "../../models/User.js";

let update = async (req, res, next) => {
    try {
        let updateUser = await User.updateOne(
            {email: req.body.email},
        {
            password: req.body.password,
            photo: req.body.photo,
            role: req.body.role,
        })
        return res.status(201).json({updateUser})
    } catch (error) {
        next(error)
    }
}

export default update