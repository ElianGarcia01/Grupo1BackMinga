import 'dotenv/config.js'
import "../../config/database.js"
import User from '../User.js'
import bcryptjs from 'bcryptjs'

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

Users = Users.map(user => ({
    ...user,
    password: bcryptjs.hashSync(user.password, 10)
}))

User.insertMany(Users)
    .then(() => {
        process.exit()
    })
    .catch(error => {
        console.error("Error:", error)
        process.exit(1)
    })