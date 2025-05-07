import User from '../../models/User.js'

let register = async (req, res, next) => {
    try {
        let create = await User.create(req.body)
        return res.status(201).json({
            response: create
        })
    } catch (error) {
        next(error)
    }
}

export default register