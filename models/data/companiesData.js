import 'dotenv/config.js'
import "../../config/database.js"
import Company from "../Company.js";
import User from "../User.js"

let companies = [
    {
        name: "ShadowFrame Comics",
        website: "www.shadowframecomics.com",
        description: "ShadowFrame Comics brings to life the darker side of storytelling, focusing on supernatural tales, mysterious heroes, and morally complex worlds. Perfect for fans of suspense, noir, and gothic adventures.",
        photo: "https://www.interjoomla.com.ar/wp-content/uploads/2020/07/apps-para-hacer-comics.jpg",
        user_id: "stiven.mata@example.com",
        active: true
    },
    {
        name: "InkVortex Studios",
        website: "www.inkvortexstudios.com",
        description: "At InkVortex Studios, imagination knows no limits. Our comics dive into chaotic multiverses, surreal timelines, and bold, experimental art styles. Expect the unexpected in every issue.",
        photo: "https://img.freepik.com/vector-gratis/fondo-retro-burbuja-discurso-comico-vector-explosion-rayos_1017-45567.jpg",
        user_id: "yeison.lopez@example.com",
        active: true
    },
    {
        name: "MythCore Press",
        website: "www.mythcorepress.com",
        description: "MythCore Press blends ancient legends with modern heroes. From gods in the digital age to warriors in dystopian futures, we reforge classic myths into fresh, powerful narratives.",
        photo: "https://pm1.narvii.com/6557/37f662d9bc755e1e43d66c310bb8cbbc2893d65f_hq.jpg",
        user_id: "sebas.mayorca@example.com",
        active: true
    },
    {
        name: "Crimson Comics",
        website: "https://crimsoncomics.com",
        description: "A bold new universe of dark heroes and complex villains.",
        active: true, 
        photo: "https://logomakr.com/wp-content/uploads/2024/09/Group-21-1.svg",
        user_id: "diego.fernandez@example.com"
    },
    {
        name: "Mythos Universe",
        website: "https://mythosuniverse.com",
        description: "A myth-inspired publisher bringing ancient legends to life.",
        active: true, 
        photo: "https://logomakr.com/wp-content/uploads/2024/09/voltem-1.svg",
        user_id: "valentina.mendoza@example.com"
    },
    {
        name: "Nova Pulse Comics",
        website: "https://novapulse.com",
        description: "Sci-fi meets superpowers in a cosmic explosion of storytelling.",
        active: true, 
        photo: "https://logomakr.com/wp-content/uploads/2024/09/Group-15196-1-1.svg",
        user_id: "miguel.navarro@example.com"
    },
    {
        name: "Iron Quill Studios",
        website: "https://ironquill.com",
        description: "Fantasy realms forged with steel and magic.",
        active: true, 
        photo: "https://logomakr.com/wp-content/uploads/2024/09/Group-15201-1-1.svg",
        user_id: "camila.silva@example.com"
    },
    {
        name: "ShadowSpark Comics",
        website: "https://shadowspark.com",
        description: "Stories that spark the imagination from the shadows.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/64256/optimized_large_thumb_stage.jpg",
        user_id: "javier.castro@example.com"
    },
    {
        name: "Infinity Glyph",
        website: "https://infinityglyph.com",
        description: "Timeless heroes etched into the pages of destiny.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/193108/optimized_large_thumb_stage.jpg",
        user_id: "natalia.romero@example.com"
    },
    {
        name: "Titan Forge Comics",
        website: "https://titanforgecomics.com",
        description: "Epic tales crafted by the gods of creativity.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/52626/optimized_large_thumb_stage.jpg",
        user_id: "daniel.arias@example.com"
    },
    {
        name: "Blue Nebula Press",
        website: "https://bluenebulapress.com",
        description: "Diving deep into space-age adventures.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/66775/optimized_large_thumb_stage.jpg",
        user_id: "paula.reyes@example.com"
    },
    {
        name: "ThunderPage Comics",
        website: "https://thunderpage.com",
        description: "Striking stories told with a boom.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/52737/optimized_large_thumb_stage.jpg",
        user_id: "sebastian.ortega@example.com"
    },
    {
        name: "Phantom Realm Studios",
        website: "https://phantomrealm.com",
        description: "Explore the unknown with supernatural heroes.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/57440/optimized_large_thumb_stage.jpg",
        user_id: "isabella.martin@example.com"
    },
    {
        name: "Solar Syndicate",
        website: "https://solarsyndicate.com",
        description: "A collective of light-powered heroes and villains.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/74408/optimized_large_thumb_stage.jpg",
        user_id: "alejandro.guerrero@example.com"
    },
    {
        name: "Oblivion Ink",
        website: "https://oblivionink.com",
        description: "Where forgotten realms are brought back to ink.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/57815/optimized_large_thumb_stage.jpg",
        user_id: "manuela.cortez@example.com"
    },
    {
        name: "Quantum Strike Comics",
        website: "https://quantumstrike.com",
        description: "Where time, space, and justice collide.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/193020/optimized_large_thumb_stage.jpg",
        user_id: "fernando.delgado@example.com"
    },
    {
        name: "EchoVerse Publishing",
        website: "https://echoverse.com",
        description: "Voices of the multiverse in print.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/52689/optimized_large_thumb_stage.jpg",
        user_id: "gabriela.vargas@example.com"
    },
    {
        name: "Neon Howl Comics",
        website: "https://neonhowl.com",
        description: "Cyberpunk tales with a primal edge.",
        active: true, 
        photo: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/57806/optimized_large_thumb_stage.jpg",
        user_id: "ricardo.mejia@example.com"
    }
]

let insert_companies = async () => {
    try {
        for (let company of companies) {
            let user = await User.findOneAndUpdate({ email: company.user_id }, { role: 2 })
            company.user_id = await user._id
            let insert = await Company.create(company)
            console.log(insert.name);
        }
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

insert_companies()