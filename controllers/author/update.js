import Author from "../../models/Author.js";

let update = async (req,res,next) => {
    try {
        let authInfo = req.body
        console.log(authInfo)

        let updateAuth = await Author.updateOne(
            {_id : authInfo._id},
            {photo: authInfo.photo}
        )
        return res.status(200).json({
            response: updateAuth
        })
        
    } catch (error) {
        next(error)
    }
}

let updateActive = async (req, res, next) => {
    try {
        let authInfo = req.body
        let updateAuth = await Author.updateOne(
            {_id: authInfo._id},
            {active: authInfo.active}
        )
        res.status(200).json({
            response: updateAuth
        })
    } catch (error) {
        next(error)
    }
}

export {update, updateActive}