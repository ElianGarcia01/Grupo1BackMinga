import User from '../../models/User.js'

let register = async (req, res, next) => {
    try {
        req.user.online = true
        let user = await User.create(req.user)
        return res.status(201).json({
            response: {
                token: req.token,
                user
            }
        })
    } catch (error) {
        next(error)
    }
}

export default register