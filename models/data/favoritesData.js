import 'dotenv/config.js'
import "../../config/database.js"
import User from "../User.js"
import Manga from "../Manga.js"
import Favorite from '../Favorite.js'


let favorites = [
    {
        user_id: "alejandro@example.com",
        manga_id: "Alice in Borderland"
    },
    {
        user_id: "alejandro@example.com",
        manga_id: "Shingeki no Kyojin"
    },
    {
        user_id: "alejandro@example.com",
        manga_id: "The promise neverland"
    },
    {
        user_id: "alejandro@example.com",
        manga_id: "Bleach"
    },
    {
        user_id: "alejandro@example.com",
        manga_id: "Another"
    },
    {
        user_id: "eric@example.com",
        manga_id: "Gantz"
    },
    {
        user_id: "eric@example.com",
        manga_id: "Punpun"
    },
    {
        user_id: "eric@example.com",
        manga_id: "Flashpoint"
    },
    {
        user_id: "eric@example.com",
        manga_id: "Planet Hulk"
    },
    {
        user_id: "eric@example.com",
        manga_id: "Secret invasion"
    },
    {
        user_id: "lucas@example.com",
        manga_id: "Superman up in the sky"
    },
    {
        user_id: "lucas@example.com",
        manga_id: "World War Hulk"
    },
    {
        user_id: "lucas@example.com",
        manga_id: "Pokemon"
    },
    {
        user_id: "lucas@example.com",
        manga_id: "Citrus"
    },
    {
        user_id: "lucas@example.com",
        manga_id: "Ao Haru Ride"
    }                    
]

let insert_favorites = async () => {
    try {
        for (let favorite of favorites) {
            let user = await User.findOne({ email: favorite.user_id })
            favorite.user_id = user._id
            let manga = await Manga.findOne({ title: favorite.manga_id })
            favorite.manga_id = manga._id
            await Favorite.create(favorite)
        }
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

insert_favorites()