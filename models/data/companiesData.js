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
        user_id: "lucas@example.com",
        active: true
    },
    {
        name: "InkVortex Studios",
        website: "www.inkvortexstudios.com",
        description: "At InkVortex Studios, imagination knows no limits. Our comics dive into chaotic multiverses, surreal timelines, and bold, experimental art styles. Expect the unexpected in every issue.",
        photo: "https://img.freepik.com/vector-gratis/fondo-retro-burbuja-discurso-comico-vector-explosion-rayos_1017-45567.jpg",
        user_id: "alejandro@example.com",
        active: true
    },
    {
        name: "MythCore Press",
        website: "www.mythcorepress.com",
        description: "MythCore Press blends ancient legends with modern heroes. From gods in the digital age to warriors in dystopian futures, we reforge classic myths into fresh, powerful narratives.",
        photo: "https://pm1.narvii.com/6557/37f662d9bc755e1e43d66c310bb8cbbc2893d65f_hq.jpg",
        user_id: "eric@example.com",
        active: true
    }
]

let insert_companies = async () => {
    try {
        for (let company of companies) {
            let user = await User.findOne({ email: company.user_id })
            company.user_id = await user._id
            let insert = await Company.create(company)
            console.log(insert.name);
        }
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
}

insert_companies()


