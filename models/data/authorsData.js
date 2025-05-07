import 'dotenv/config.js'
import "../../config/database.js"
import Author from '../Author.js'

let authors = [
    {
        name: "alejandro",
        lastName: "johnson",
        city: "New York",
        country: "USA",
        date_birth: '1985-05-21',
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        user_id: "681a98bd9ddc91abf6fdddde",
    },
    {
        name: "lucas",
        lastName: "martinez",
        city: "Madrid",
        country: "Spain",
        date_birth: '1990-12-31',
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        user_id: "681a98bd9ddc91abf6fddddd",
    },
    {
        name: "eric",
        lastName: "tanaka",
        city: "Tokyo",
        country: "Japan",
        date_birth: '1988-07-23',
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        user_id: "681a98bd9ddc91abf6fddddf",
    }
]

Author.insertMany(authors)
