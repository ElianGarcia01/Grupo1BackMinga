import Author from "../../models/Author.js";

let update = async (req,res,next) => {
    try {
        let authInfo = req.body
        console.log(authInfo)

        let updateAuth = await Author.updateOne(
            {name : authInfo.name},
            {photo: authInfo.photo}
        )
        return res.status(200).json({
            response: updateAuth
        })
        
    } catch (error) {
        next(error)
    }
}

export default update