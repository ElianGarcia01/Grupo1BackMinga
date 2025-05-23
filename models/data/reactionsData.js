import 'dotenv/config.js'
import "../../config/database.js"
import Reaction from "../Reaction.js"
import Manga from "../Manga.js"
import Author from "../Author.js"
import Company from '../Company.js'
import Favorite from '../Favorite.js'

let reactions = [
    { manga_id: "Alice in Borderland", author_id: "alejandro", reaction: "like" },
    { manga_id: "Shingeki no Kyojin", author_id: "lucas", reaction: "dislike" },
    { manga_id: "The promise neverland", author_id: "eric", reaction: "surprised" },
    { manga_id: "Bleach", author_id: "Juan", reaction: "like" },
    { manga_id: "Another", author_id: "María", reaction: "dislike" },
    { manga_id: "Gantz", author_id: "Carlos", reaction: "like" },
    { manga_id: "Punpun", author_id: "Ana", reaction: "like" },
    { manga_id: "Flashpoint", author_id: "Luis", reaction: "dislike" },
    { manga_id: "Planet Hulk", author_id: "Sofia", reaction: "surprised" },
    { manga_id: "Secret invasion", author_id: "Pedro", reaction: "like" },
    { manga_id: "Superman up in the sky", author_id: "Laura", reaction: "like" },
    { manga_id: "World War Hulk", author_id: "Andres", reaction: "dislike" },
    { manga_id: "Pokemon", author_id: "Carolina", reaction: "surprised" },
    { manga_id: "Citrus", author_id: "alejandro", reaction: "like" },
    { manga_id: "Ao Haru Ride", author_id: "lucas", reaction: "dislike" },
    { manga_id: "My Hero Academia", author_id: "eric", reaction: "like" },
    { manga_id: "Demon Slayer", author_id: "Juan", reaction: "like" },
    { manga_id: "Ao Haru", author_id: "María", reaction: "dislike" },
    { manga_id: "Crimson Sky Protocol", author_id: "Carlos", reaction: "surprised" },
    { manga_id: "Sakura Circuit", author_id: "Ana", reaction: "like" },
    { manga_id: "Ghost Byte", author_id: "Luis", reaction: "like" },
    { manga_id: "Echoes of Astra", author_id: "Sofia", reaction: "dislike" },
    { manga_id: "Velvet Reign", author_id: "Pedro", reaction: "surprised" },
    { manga_id: "GearBound", author_id: "Laura", reaction: "like" },
    { manga_id: "Bloomthief", author_id: "Andres", reaction: "like" },
    { manga_id: "Neon Exile", author_id: "Carolina", reaction: "dislike" },
    { manga_id: "Mirrorlight Chronicles", author_id: "alejandro", reaction: "surprised" },
    { manga_id: "Zero Ember", author_id: "lucas", reaction: "like" },
    { manga_id: "TechnoNymph", author_id: "eric", reaction: "dislike" },
    { manga_id: "Dreamhollow", author_id: "Juan", reaction: "like" },
    { manga_id: "Iron Pulse: Warden Zero", author_id: "María", reaction: "like" },
    { manga_id: "Bubblegun Opera", author_id: "Carlos", reaction: "surprised" },
    { manga_id: "Citrus", author_id: "Ana", reaction: "like" },
    { manga_id: "Shingeki no Kyojin", author_id: "Luis", reaction: "dislike" },
    { manga_id: "Planet Hulk", author_id: "Sofia", reaction: "like" },
    { manga_id: "Secret invasion", author_id: "Pedro", reaction: "dislike" },
    { manga_id: "Superman up in the sky", author_id: "Laura", reaction: "surprised" },
    { manga_id: "Neon Exile", author_id: "Andres", reaction: "like" },
    { manga_id: "Dreamhollow", author_id: "Carolina", reaction: "dislike" },
    { manga_id: "Flashpoint", author_id: "alejandro", reaction: "like" },
    { manga_id: "Bleach", author_id: "lucas", reaction: "surprised" },
    { manga_id: "Another", author_id: "eric", reaction: "dislike" },
    { manga_id: "Punpun", author_id: "Juan", reaction: "like" },
    { manga_id: "World War Hulk", author_id: "María", reaction: "like" },
    { manga_id: "My Hero Academia", author_id: "Carlos", reaction: "dislike" },
    { manga_id: "Ao Haru", author_id: "Ana", reaction: "surprised" },
    { manga_id: "Velvet Reign", author_id: "Luis", reaction: "like" },
    { manga_id: "Echoes of Astra", author_id: "Sofia", reaction: "like" },
    { manga_id: "Zero Ember", author_id: "Pedro", reaction: "dislike" },
    { manga_id: "Iron Pulse: Warden Zero", author_id: "Laura", reaction: "like" },
    { manga_id: "Alice in Borderland", author_id: "lucas", reaction: "dislike" },
    { manga_id: "Shingeki no Kyojin", author_id: "alejandro", reaction: "surprised" },
    { manga_id: "The promise neverland", author_id: "Carlos", reaction: "like" },
    { manga_id: "Bleach", author_id: "Sofia", reaction: "dislike" },
    { manga_id: "Another", author_id: "Laura", reaction: "surprised" },
    { manga_id: "Gantz", author_id: "Luis", reaction: "like" },
    { manga_id: "Punpun", author_id: "Pedro", reaction: "dislike" },
    { manga_id: "Flashpoint", author_id: "Ana", reaction: "surprised" },
    { manga_id: "Planet Hulk", author_id: "Juan", reaction: "like" },
    { manga_id: "Secret invasion", author_id: "Carolina", reaction: "dislike" },
    { manga_id: "Superman up in the sky", author_id: "eric", reaction: "surprised" },
    { manga_id: "World War Hulk", author_id: "María", reaction: "like" },
    { manga_id: "Pokemon", author_id: "Andres", reaction: "like" },
    { manga_id: "Citrus", author_id: "Pedro", reaction: "dislike" },
    { manga_id: "Ao Haru Ride", author_id: "Laura", reaction: "like" },
    { manga_id: "My Hero Academia", author_id: "Sofia", reaction: "surprised" },
    { manga_id: "Demon Slayer", author_id: "Luis", reaction: "dislike" },
    { manga_id: "Ao Haru", author_id: "alejandro", reaction: "like" },
    { manga_id: "Crimson Sky Protocol", author_id: "Carolina", reaction: "surprised" },
    { manga_id: "Sakura Circuit", author_id: "lucas", reaction: "like" },
    { manga_id: "Ghost Byte", author_id: "María", reaction: "dislike" },
    { manga_id: "Echoes of Astra", author_id: "eric", reaction: "like" },
    { manga_id: "Velvet Reign", author_id: "Ana", reaction: "surprised" },
    { manga_id: "GearBound", author_id: "Juan", reaction: "dislike" },
    { manga_id: "Bloomthief", author_id: "Carlos", reaction: "surprised" },
    { manga_id: "Neon Exile", author_id: "Carolina", reaction: "like" },
    { manga_id: "Mirrorlight Chronicles", author_id: "Luis", reaction: "dislike" },
    { manga_id: "Zero Ember", author_id: "Laura", reaction: "surprised" },
    { manga_id: "TechnoNymph", author_id: "Pedro", reaction: "like" },
    { manga_id: "Dreamhollow", author_id: "Sofia", reaction: "dislike" },
    { manga_id: "Iron Pulse: Warden Zero", author_id: "alejandro", reaction: "surprised" },
    { manga_id: "Bubblegun Opera", author_id: "Carlos", reaction: "like" },
    { manga_id: "Citrus", author_id: "eric", reaction: "dislike" },
    { manga_id: "Flashpoint", author_id: "Carolina", reaction: "surprised" },
    { manga_id: "Pokemon", author_id: "lucas", reaction: "like" },
    { manga_id: "Neon Exile", author_id: "Ana", reaction: "dislike" },
    { manga_id: "Ghost Byte", author_id: "María", reaction: "like" },
    { manga_id: "Bleach", author_id: "Andres", reaction: "surprised" },
    { manga_id: "My Hero Academia", author_id: "Laura", reaction: "dislike" },
    { manga_id: "Dreamhollow", author_id: "Juan", reaction: "like" },
    { manga_id: "Sakura Circuit", author_id: "Pedro", reaction: "dislike" },
    { manga_id: "Echoes of Astra", author_id: "lucas", reaction: "surprised" },
    { manga_id: "World War Hulk", author_id: "Carlos", reaction: "dislike" },
    { manga_id: "Another", author_id: "Ana", reaction: "like" },
    { manga_id: "The promise neverland", author_id: "Luis", reaction: "like" },
    { manga_id: "Velvet Reign", author_id: "Carolina", reaction: "dislike" },
    { manga_id: "Planet Hulk", author_id: "alejandro", reaction: "like" },
    { manga_id: "GearBound", author_id: "Sofia", reaction: "surprised" },
    { manga_id: "Alice in Borderland", author_id: "María", reaction: "like" },
    { manga_id: "Alice in Borderland", company_id: "ShadowFrame Comics", reaction: "like" },
    { manga_id: "Shingeki no Kyojin", company_id: "InkVortex Studios", reaction: "dislike" },
    { manga_id: "The promise neverland", company_id: "MythCore Press", reaction: "surprised" },
    { manga_id: "Bleach", company_id: "Crimson Comics", reaction: "like" },
    { manga_id: "Another", company_id: "Mythos Universe", reaction: "dislike" },
    { manga_id: "Gantz", company_id: "Nova Pulse Comics", reaction: "like" },
    { manga_id: "Punpun", company_id: "Iron Quill Studios", reaction: "surprised" },
    { manga_id: "Flashpoint", company_id: "ShadowSpark Comics", reaction: "like" },
    { manga_id: "Planet Hulk", company_id: "Infinity Glyph", reaction: "dislike" },
    { manga_id: "Secret invasion", company_id: "Titan Forge Comics", reaction: "like" },
    { manga_id: "Superman up in the sky", company_id: "Blue Nebula Press", reaction: "like" },
    { manga_id: "World War Hulk", company_id: "ThunderPage Comics", reaction: "dislike" },
    { manga_id: "Pokemon", company_id: "Phantom Realm Studios", reaction: "surprised" },
    { manga_id: "Citrus", company_id: "Solar Syndicate", reaction: "like" },
    { manga_id: "Ao Haru Ride", company_id: "Oblivion Ink", reaction: "dislike" },
    { manga_id: "My Hero Academia", company_id: "Quantum Strike Comics", reaction: "like" },
    { manga_id: "Demon Slayer", company_id: "EchoVerse Publishing", reaction: "surprised" },
    { manga_id: "Ao Haru", company_id: "Neon Howl Comics", reaction: "like" },
    { manga_id: "Crimson Sky Protocol", company_id: "ShadowFrame Comics", reaction: "like" },
    { manga_id: "Sakura Circuit", company_id: "InkVortex Studios", reaction: "surprised" },
    { manga_id: "Ghost Byte", company_id: "MythCore Press", reaction: "like" },
    { manga_id: "Echoes of Astra", company_id: "Crimson Comics", reaction: "dislike" },
    { manga_id: "Velvet Reign", company_id: "Mythos Universe", reaction: "like" },
    { manga_id: "GearBound", company_id: "Nova Pulse Comics", reaction: "surprised" },
    { manga_id: "Bloomthief", company_id: "Iron Quill Studios", reaction: "like" },
    { manga_id: "Neon Exile", company_id: "ShadowSpark Comics", reaction: "dislike" },
    { manga_id: "Mirrorlight Chronicles", company_id: "Infinity Glyph", reaction: "surprised" },
    { manga_id: "Zero Ember", company_id: "Titan Forge Comics", reaction: "like" },
    { manga_id: "TechnoNymph", company_id: "Blue Nebula Press", reaction: "like" },
    { manga_id: "Dreamhollow", company_id: "ThunderPage Comics", reaction: "dislike" },
    { manga_id: "Iron Pulse: Warden Zero", company_id: "Phantom Realm Studios", reaction: "like" },
    { manga_id: "Bubblegun Opera", company_id: "Solar Syndicate", reaction: "surprised" },
    { manga_id: "Alice in Borderland", company_id: "Oblivion Ink", reaction: "dislike" },
    { manga_id: "Shingeki no Kyojin", company_id: "Quantum Strike Comics", reaction: "like" },
    { manga_id: "The promise neverland", company_id: "EchoVerse Publishing", reaction: "like" },
    { manga_id: "Bleach", company_id: "Neon Howl Comics", reaction: "surprised" },
    { manga_id: "Another", company_id: "ShadowFrame Comics", reaction: "like" },
    { manga_id: "Gantz", company_id: "InkVortex Studios", reaction: "dislike" },
    { manga_id: "Punpun", company_id: "MythCore Press", reaction: "like" },
    { manga_id: "Flashpoint", company_id: "Crimson Comics", reaction: "surprised" },
    { manga_id: "Planet Hulk", company_id: "Mythos Universe", reaction: "dislike" },
    { manga_id: "Secret invasion", company_id: "Nova Pulse Comics", reaction: "like" },
    { manga_id: "Superman up in the sky", company_id: "Iron Quill Studios", reaction: "like" },
    { manga_id: "World War Hulk", company_id: "ShadowSpark Comics", reaction: "dislike" },
    { manga_id: "Pokemon", company_id: "Infinity Glyph", reaction: "like" },
    { manga_id: "Citrus", company_id: "Titan Forge Comics", reaction: "surprised" },
    { manga_id: "Ao Haru Ride", company_id: "Blue Nebula Press", reaction: "like" },
    { manga_id: "My Hero Academia", company_id: "ThunderPage Comics", reaction: "dislike" },
    { manga_id: "Demon Slayer", company_id: "Phantom Realm Studios", reaction: "like" },
    { manga_id: "Ao Haru", company_id: "Crimson Comics", reaction: "like" },
    { manga_id: "Crimson Sky Protocol", company_id: "Mythos Universe", reaction: "dislike" },
    { manga_id: "Sakura Circuit", company_id: "Nova Pulse Comics", reaction: "surprised" },
    { manga_id: "Ghost Byte", company_id: "Iron Quill Studios", reaction: "like" },
    { manga_id: "Echoes of Astra", company_id: "ShadowSpark Comics", reaction: "like" },
    { manga_id: "Velvet Reign", company_id: "Infinity Glyph", reaction: "dislike" },
    { manga_id: "GearBound", company_id: "Titan Forge Comics", reaction: "surprised" },
    { manga_id: "Bloomthief", company_id: "Blue Nebula Press", reaction: "like" },
    { manga_id: "Neon Exile", company_id: "ThunderPage Comics", reaction: "dislike" },
    { manga_id: "Mirrorlight Chronicles", company_id: "Phantom Realm Studios", reaction: "like" },
    { manga_id: "Zero Ember", company_id: "Solar Syndicate", reaction: "surprised" },
    { manga_id: "TechnoNymph", company_id: "Oblivion Ink", reaction: "like" },
    { manga_id: "Dreamhollow", company_id: "Quantum Strike Comics", reaction: "dislike" },
    { manga_id: "Iron Pulse: Warden Zero", company_id: "EchoVerse Publishing", reaction: "like" },
    { manga_id: "Bubblegun Opera", company_id: "Neon Howl Comics", reaction: "like" },
    { manga_id: "Bleach", company_id: "ShadowFrame Comics", reaction: "surprised" },
    { manga_id: "Pokemon", company_id: "InkVortex Studios", reaction: "dislike" },
    { manga_id: "Shingeki no Kyojin", company_id: "MythCore Press", reaction: "like" },
    { manga_id: "Flashpoint", company_id: "Crimson Comics", reaction: "like" },
    { manga_id: "Secret invasion", company_id: "Mythos Universe", reaction: "dislike" },
    { manga_id: "Planet Hulk", company_id: "Nova Pulse Comics", reaction: "like" },
    { manga_id: "Citrus", company_id: "Iron Quill Studios", reaction: "surprised" },
    { manga_id: "Alice in Borderland", company_id: "ShadowSpark Comics", reaction: "like" },
    { manga_id: "The promise neverland", company_id: "Infinity Glyph", reaction: "dislike" },
    { manga_id: "Demon Slayer", company_id: "Titan Forge Comics", reaction: "like" },
    { manga_id: "My Hero Academia", company_id: "Blue Nebula Press", reaction: "surprised" },
    { manga_id: "Another", company_id: "ThunderPage Comics", reaction: "like" },
    { manga_id: "Gantz", company_id: "Phantom Realm Studios", reaction: "dislike" },
    { manga_id: "Punpun", company_id: "Solar Syndicate", reaction: "like" },
    { manga_id: "Superman up in the sky", company_id: "Oblivion Ink", reaction: "like" },
    { manga_id: "World War Hulk", company_id: "Quantum Strike Comics", reaction: "dislike" },
    { manga_id: "Ao Haru Ride", company_id: "EchoVerse Publishing", reaction: "surprised" },
    { manga_id: "Velvet Reign", company_id: "Neon Howl Comics", reaction: "like" },
    { manga_id: "Dreamhollow", company_id: "ShadowFrame Comics", reaction: "dislike" },
    { manga_id: "Echoes of Astra", company_id: "InkVortex Studios", reaction: "like" },
    { manga_id: "Iron Pulse: Warden Zero", company_id: "MythCore Press", reaction: "surprised" },
    { manga_id: "Bloomthief", company_id: "Crimson Comics", reaction: "like" },
    { manga_id: "Zero Ember", company_id: "Mythos Universe", reaction: "dislike" },
    { manga_id: "TechnoNymph", company_id: "Nova Pulse Comics", reaction: "surprised" },
    { manga_id: "Bubblegun Opera", company_id: "Iron Quill Studios", reaction: "like" },
    { manga_id: "Ghost Byte", company_id: "ShadowSpark Comics", reaction: "like" },
    { manga_id: "Mirrorlight Chronicles", company_id: "Infinity Glyph", reaction: "dislike" },
    { manga_id: "Crimson Sky Protocol", company_id: "Titan Forge Comics", reaction: "surprised" },
    { manga_id: "Sakura Circuit", company_id: "Blue Nebula Press", reaction: "like" },
    { manga_id: "Neon Exile", company_id: "ThunderPage Comics", reaction: "dislike" },
    { manga_id: "Ao Haru", company_id: "Phantom Realm Studios", reaction: "like" },
    { manga_id: "Punpun", company_id: "Solar Syndicate", reaction: "surprised" },
    { manga_id: "Planet Hulk", company_id: "Oblivion Ink", reaction: "like" },
    { manga_id: "World War Hulk", company_id: "EchoVerse Publishing", reaction: "dislike" }    
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
            if(reaction.reaction === "like"){
                delete reaction.reaction
                await Favorite.create(reaction)
            }
        }
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
}

insert_reactions()