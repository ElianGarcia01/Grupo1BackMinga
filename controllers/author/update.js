import Author from "../../models/Author.js";

let update = async (req,res,next) => {
    try {
        let { _id, name, lastName, date_birth, photo, city } = req.body
        let authorInfo = {}
        if (name) authorInfo.name = name;
        if (lastName) authorInfo.lastName = lastName;
        if (date_birth) authorInfo.date_birth = date_birth;
        if (city) authorInfo.city = city;
        if (photo) authorInfo.photo = photo;
        let updateAuth = await Author.findByIdAndUpdate(
            _id,
            authorInfo
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