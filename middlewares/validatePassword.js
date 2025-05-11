import bcryptjs from "bcryptjs";

export default (req, res, next) => {
    try {
        let passwordBody = req.body.password
        let passwordUser = req.user.password
        console.log(passwordBody);
        console.log(passwordUser);
        let compare = bcryptjs.compareSync(passwordBody, passwordUser)
        if(compare)
            return next()
        return res.status(400).json({
            success: false,
            message: "Invalid password"
        })
    } catch (error) {
        next(error)
    }
}
