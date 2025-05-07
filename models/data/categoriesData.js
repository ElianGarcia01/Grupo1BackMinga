import 'dotenv/config.js'
import "../../config/database.js"
import Category from '../Category.js'

let categories = [
    {
        name: "Shoen",
        color: "#EF8481",
        hover: "#FFE0DF",
    },
    {
        name: "Seinen",
        color: "#FC9C57",
        hover: "#FFDFC8",
    },
    {
        name: "Shojo",
        color: "#00BA88",
        hover: "#D1FBF0",
    },
    {
        name: "Komodo",
        color: "#8883F0",
        hover: "#E0DBFF",
    }
]

Category.insertMany(categories)