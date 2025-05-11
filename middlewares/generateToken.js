import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = jwt.sign({
        email: req.user.email,
        photo: req.user.photo,
        role: req.user.role
        },
        process.env.ENCRYPTION,
        {expiresIn: "4h"}
    )
    req.token = token
    next()
}