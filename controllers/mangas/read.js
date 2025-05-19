import Manga from '../../models/Manga.js'
import Author from '../../models/Author.js'
import Company from '../../models/Company.js'
import Category from '../../models/Category.js'

let allManga = async (req, res, next) => {
    try {
        let {author_id, company_id, title, category_id} = req.query
        let query = {}
        if (author_id)
            query.author_id = author_id
        if (company_id)
            query.company_id = company_id
        if (category_id)
            query.category_id = category_id
        if (title)
            query.title = {$regex: title, $options: 'i'}
        let all = await Manga.find(query)
        .populate('author_id')
        .populate('company_id')
        .populate('category_id')
        res.status(200).json({
            response: all
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

let mangaByUser = async (req, res, next) => {
    try {
        const user = {}
        if(req.roleInfo.author) user.author_id = req.roleInfo.author._id
        if(req.roleInfo.company) user.company_id = req.roleInfo.company._id
        const mangas = await Manga.find(user)
        .populate('author_id')
        .populate('company_id')
        .populate('category_id')       
        res.status(200).json({
            response: mangas
        })
    } catch (error) {
        console.log(req.roleInfo.author);
        next(error)
    }

}

//
export { allManga, mangaByUser }