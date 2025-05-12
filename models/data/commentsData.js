import 'dotenv/config.js'
import "../../config/database.js"
import Comment from "../Comment.js"
import Chapter from '../Chapter.js'
import Author from "../Author.js"
import Company from '../Company.js'


let comments = [
    {
        chapter_id: "Welcome - part 1", 
        author_id: "alejandro",
        message: "I loved this chapter"
    },
    {
        chapter_id: "Welcome - part 1", 
        author_id: "lucas",
        message: "This was one of the best episodes so far"
    },
    {
        chapter_id: "Welcome - part 1", 
        author_id: "eric",
        message: "Loved the animation and the action scenes."
    },
    {
        chapter_id: "visa", 
        author_id: "alejandro",
        message: "I really enjoyed this episode!"
    },
    {
        chapter_id: "visa", 
        author_id: "lucas",
        message: "Great pacing and character development!"
    },
    {
        chapter_id: "visa", 
        author_id: "eric",
        message: "This episode gave me chills, so good!"
    },
    {
        chapter_id: "Welcome - part 2", 
        author_id: "alejandro",
        message: "This episode gave me chills, so good!"
    },
    {
        chapter_id: "Welcome - part 2", 
        author_id: "lucas",
        message: "It was a decent episode, not my favorite though."
    },
    {
        chapter_id: "Welcome - part 2", 
        author_id: "eric",
        message: "Not bad, but I expected a bit more."
    },
    {
        chapter_id: "3 of clubs - part 1", 
        author_id: "alejandro",
        message: "The story is moving forward slowly, but Im still interested."
    },
    {
        chapter_id: "3 of clubs - part 1", 
        author_id: "lucas",
        message: "Im curious to see where this goes next."
    },
    {
        chapter_id: "3 of clubs - part 1", 
        author_id: "eric",
        message: "Good episode, but the last one was better."
    },
    {
        chapter_id: "second day", 
        company_id: "ShadowFrame Comics",
        message: "I loved this chapter"
    },
    {
        chapter_id: "second day", 
        company_id: "InkVortex Studios",
        message: "This was one of the best episodes so far"
    },
    {
        chapter_id: "second day", 
        company_id: "MythCore Press",
        message: "Loved the animation and the action scenes."
    },
    {
        chapter_id: "5 of spades - part 1", 
        company_id: "ShadowFrame Comics",
        message: "I really enjoyed this episode!"
    },
    {
        chapter_id: "5 of spades - part 1", 
        company_id: "InkVortex Studios",
        message: "Great pacing and character development!"
    },
    {
        chapter_id: "5 of spades - part 1", 
        company_id: "MythCore Press",
        message: "This episode gave me chills, so good!"
    },
    {
        chapter_id: "Smack down", 
        company_id: "MythCore Press",
        message: "This episode gave me chills, so good!"
    },
    {
        chapter_id: "Chasing Chad", 
        company_id: "InkVortex Studios",
        message: "It was a decent episode, not my favorite though."
    },
    {
        chapter_id: "The pink cheeked paraket", 
        company_id: "InkVortex Studios",
        message: "Not bad, but I expected a bit more."
    },
    {
        chapter_id: "Microcrack", 
        company_id: "ShadowFrame Comics",
        message: "The story is moving forward slowly, but Im still interested."
    },
    {
        chapter_id: "Binda blinda", 
        company_id: "ShadowFrame Comics",
        message: "Im curious to see where this goes next."
    },
    {
        chapter_id: "Why do you eat it?", 
        company_id: "InkVortex Studios",
        message: "Good episode, but the last one was better."
    },  
    
    {
        chapter_id: "Starter", 
        author_id: "alejandro",
        message: "I loved this chapter"
    },
    {
        chapter_id: "Death & Strawberry", 
        author_id: "lucas",
        message: "This was one of the best episodes so far"
    },
    {
        chapter_id: "The strategy", 
        author_id: "eric",
        message: "Loved the animation and the action scenes."
    },
    {
        chapter_id: "Let´s play a game!", 
        author_id: "alejandro",
        message: "I really enjoyed this episode!"
    },
    {
        chapter_id: "I´ve got an idea!", 
        author_id: "lucas",
        message: "Great pacing and character development!"
    },
    {
        chapter_id: "We´re counting you", 
        author_id: "eric",
        message: "This episode gave me chills, so good!"
    },
    {
        chapter_id: "She got us!", 
        author_id: "alejandro",
        message: "This episode gave me chills, so good!"
    },
    {
        chapter_id: "Chapter 1", 
        author_id: "eric",
        message: "It was a decent episode, not my favorite though."
    },
    {
        chapter_id: "The iron woman", 
        author_id: "eric",
        message: "Not bad, but I expected a bit more."
    },
    {
        chapter_id: "The way out", 
        author_id: "alejandro",
        message: "The story is moving forward slowly, but Im still interested."
    },
    {
        chapter_id: "The way out", 
        author_id: "lucas",
        message: "Im curious to see where this goes next."
    },
    {
        chapter_id: "Grace Field Home", 
        author_id: "eric",
        message: "Good episode, but the last one was better."
    },
        {
        chapter_id: "Fire!", 
        company_id: "ShadowFrame Comics",
        message: "I loved this chapter"
    },
    {
        chapter_id: "Howl", 
        company_id: "InkVortex Studios",
        message: "This was one of the best episodes so far"
    },
    {
        chapter_id: "Howl", 
        company_id: "MythCore Press",
        message: "Loved the animation and the action scenes."
    },
    {
        chapter_id: "In the past", 
        company_id: "ShadowFrame Comics",
        message: "I really enjoyed this episode!"
    },
    {
        chapter_id: "Short blade", 
        company_id: "InkVortex Studios",
        message: "Great pacing and character development!"
    },
    {
        chapter_id: "Dim light", 
        company_id: "MythCore Press",
        message: "This episode gave me chills, so good!"
    },
    {
        chapter_id: "First Battle", 
        company_id: "MythCore Press",
        message: "This episode gave me chills, so good!"
    },
    {
        chapter_id: "Discharge night", 
        company_id: "InkVortex Studios",
        message: "It was a decent episode, not my favorite though."
    },
    {
        chapter_id: "That day", 
        company_id: "InkVortex Studios",
        message: "Not bad, but I expected a bit more."
    },
    {
        chapter_id: "Titans attack", 
        company_id: "ShadowFrame Comics",
        message: "The story is moving forward slowly, but Im still interested."
    },
    {
        chapter_id: "Third day", 
        company_id: "ShadowFrame Comics",
        message: "Im curious to see where this goes next."
    },
    {
        chapter_id: "5 of spades - part 4", 
        company_id: "InkVortex Studios",
        message: "Good episode, but the last one was better."
    }, 
]

let insert_comments = async () => {
    try {
        for (let comment of comments){
            let chapter = await Chapter.findOne({ title : comment.chapter_id })
            comment.chapter_id = chapter._id
            if(comment.author_id) {
                let author = await Author.findOne({ name : comment.author_id })
                comment.author_id = author._id
            }
            if(comment.company_id){
                let company = await Company.findOne({ name : comment.company_id })
                comment.company_id = company._id
            }
            console.log("comentario guardado "+comment.message);
            await Comment.create(comment)
        }
        process.exit(0)
    } catch (error) {
        console.log(error);
    }
}

insert_comments()
