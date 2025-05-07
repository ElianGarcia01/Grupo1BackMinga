import User from "../../models/User.js";

let deleteUser = async (req, res, next) => {
    try {
        let deleteUser = await User.findOneAndDelete({ email: req.body.email })
        deleteUser ? res.status(200).json({res: deleteUser}) : 
        res.status(400).json({response: 'Not found'})
    } catch (error) {
        next(error)
    }
}

export default deleteUser