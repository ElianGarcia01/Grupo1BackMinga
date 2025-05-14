export default async (req, res, next) => {
    try {
        if(req.user.role > 0){
            next()
        }
        else{
            res.status(403).json({
                message: "The user is authenticated but does not have permission"
            })
        }
    } catch (error) {
        next(error)
    }
}