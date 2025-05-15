import bcryptjs from "bcryptjs"

export default (req, res, next) => {
    let password = req.user.password
    let hastPass = bcryptjs.hashSync(password, 10)
    req.user.password = hastPass
    next()
}