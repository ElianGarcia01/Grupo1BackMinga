import Chapter from "../../models/Chapter.js"

let allChapters = async (req,res,next) => {
    try {
        let {name, id} = req.query
        let query = {}

        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }
        if (id) 
            query._id = id
        let all = await Chapter.find(query).populate('manga_id', 'title').exec()
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default allChapters