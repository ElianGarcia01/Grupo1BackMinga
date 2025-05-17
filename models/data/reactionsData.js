import 'dotenv/config.js'
import "../../config/database.js"
import Reaction from "../Reaction.js"
import Manga from "../Manga.js"
import Author from "../Author.js"
import Company from '../Company.js'

let reactions = [
    {
        manga_id: "Alice in Borderland", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "Alice in Borderland", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "Alice in Borderland", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "Alice in Borderland", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "Alice in Borderland", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "Alice in Borderland", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },
    {
        manga_id: "Shingeki no Kyojin", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "Shingeki no Kyojin", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "Shingeki no Kyojin", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "Shingeki no Kyojin", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "Shingeki no Kyojin", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "Shingeki no Kyojin", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },
    {
        manga_id: "The promise neverland", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "The promise neverland", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "The promise neverland", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "The promise neverland", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "The promise neverland", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "The promise neverland", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },
    {
        manga_id: "Bleach", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "Bleach", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "Bleach", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "Another", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "Another", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "Another", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },
    {
        manga_id: "Gantz", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "Gantz", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "Gantz", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "Punpun", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "Punpun", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "Flashpoint", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },
    {
        manga_id: "Flashpoint", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "Planet Hulk", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "Planet Hulk", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "Secret invasion", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "Secret invasion", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "Secret invasion", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },    

    {
        manga_id: "Superman up in the sky", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "Superman up in the sky", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "Superman up in the sky", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "Superman up in the sky", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "Superman up in the sky", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "Superman up in the sky", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },
    {
        manga_id: "World War Hulk", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "World War Hulk", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "World War Hulk", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "World War Hulk", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "World War Hulk", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "World War Hulk", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },
    {
        manga_id: "Pokemon", 
        author_id: "alejandro",
        reaction: "like"  
    },
    {
        manga_id: "Pokemon", 
        author_id: "lucas",
        reaction: "dislike"  
    },
    {
        manga_id: "Pokemon", 
        author_id: "eric",
        reaction: "surprised"  
    },
    {
        manga_id: "Pokemon", 
        company_id: "ShadowFrame Comics",
        reaction: "love"  
    },
    {
        manga_id: "Citrus", 
        company_id: "InkVortex Studios",
        reaction: "love"  
    },
    {
        manga_id: "Ao Haru Ride", 
        company_id: "MythCore Press",
        reaction: "dislike"  
    },    
]

let insert_reactions = async () => {
    try {
        for (let reaction of reactions){
            let manga = await Manga.findOne({ title : reaction.manga_id })
            console.log(reaction.manga_id);
            reaction.manga_id = manga._id
            if(reaction.author_id) {
                let author = await Author.findOne({ name : reaction.author_id })
                reaction.author_id = author._id
            }
            if(reaction.company_id){
                let company = await Company.findOne({ name : reaction.company_id })
                reaction.company_id = company._id
            }
            console.log("Reacion guardada "+reaction.reaction);
            await Reaction.create(reaction)
        }
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
}

insert_reactions()