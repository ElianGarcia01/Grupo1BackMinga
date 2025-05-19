import Author from "../../models/Author.js"

let allAuthors = async (req, res, next) => {
    try {
        let queryParams = req.query
        let {name, lastName} = req.query
        let query = {}

        if (name) {
           query.name = {$regex: name, $options: 'i'} 
        }
        if (lastName) {
            query.lastName = {$regex: name, $options: 'i'} 
         }
         let all = await Author.find(query).populate('user_id', ''). exec()
         return res.status(200).json({
            response: all
         })
    } catch (error) {
        next(error)
    }
}

let active = async (req, res, next) => {
    try {
        let authrs = await Author.find()
            .populate('user_id', 'email')
            .exec();
        let response = authrs.map(author => ({
            id: author._id,
            name: author.name + " " + author.lastName,           
            url: author.user_id?.email,  
            active: author.active,
            photo: author.photo          
        }));

        return res.status(200).json({ response });
    } catch (error) {
        next(error);
    }
}  

export { allAuthors, active }