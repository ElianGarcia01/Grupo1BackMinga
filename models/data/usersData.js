import 'dotenv/config.js'
import "../../config/database.js"
import User from '../User.js'

let Users = [
    {
        email: "lucas@example.com",
        password: "Password1234",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",

    },
    {
        email: "alejandro@example.com",
        password: "Password1234",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
        email: "eric@example.com",
        password: "Password1234",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
    },

]

User.insertMany(Users)