import 'dotenv/config.js'
import "../../config/database.js"
import User from '../User.js'
import Author from '../Author.js'

let authors = [
    {
        name: "alejandro",
        lastName: "johnson",
        city: "New York",
        country: "USA",
        date_birth: '1985-05-21',
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        user_id: "alejandro@example.com",
    },
    {
        name: "lucas",
        lastName: "martinez",
        city: "Madrid",
        country: "Spain",
        date_birth: '1990-12-31',
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        user_id: "lucas@example.com",
    },
    {
        name: "eric",
        lastName: "tanaka",
        city: "Tokyo",
        country: "Japan",
        date_birth: '1988-07-23',
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        user_id: "eric@example.com",
    }
]

let insert_authors = async () => {
    try {
        for(let author of authors){
            let user = await User.findOne({ email: author.user_id })
            author.user_id = await user._id
            let insert = await Author.create(author)
            console.log(insert.name);
        }
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

insert_authors()
