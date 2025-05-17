import User from '../../models/User.js'

let register = async (req, res, next) => {
    try {
        req.user.online = true
        let userResponse = await User.create(req.user)
        return res.status(201).json({
            response: {
                token: req.token,
                user: {
                    _id: userResponse._id,
                    email: userResponse.email,
                    photo: userResponse.photo,
                    role: userResponse.role
                }
            }
        })
    } catch (error) {
        next(error)
    }
}

export default register