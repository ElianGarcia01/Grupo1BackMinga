import "dotenv/config.js"
import "../../config/database.js"
import Manga from "../Manga.js"

let mangas = [
    {
        title: 'Alice in Borderland',
        cover_photo: 'https://i.postimg.cc/PqQHYqrL/main-alice-in-borderland.jpg',
        description: 'Arisu Ryouhei will be leaving high school soon, but he tries to avoid thinking about his future. One night, when he is with his partner Karube and his friend Chouta, they see some fireworks. After a blinding explosion, they wake up in another world, called Borderland. Here people are forced to participate in violent games, where the participants must fight to survive. Will Arisu, Karube and Chouta be able to survive in this dangerous new world and find their way back to their true world?',
        category_id: '681aa07285932e35d1f98b3b',
        author_id: '681a9bb7b5d2bca56da028c0',
    },{
        title: 'Shingeki no Kyojin',
        cover_photo: 'https://i.postimg.cc/Nj4bXyr2/main-shingeki-no-kyojin.png',
        description: '100 years ago Titans appeared on earth. Soon the civilization was at the point of collapse because of these, the humans then built three giant walls to defend themselves. With the walls they were at peace but, after 100 years, the giants broke down the walls.',
        category_id: '681aa07285932e35d1f98b3b',
        author_id: '681a9bb7b5d2bca56da028c1',
    },{
        title: 'The promise neverland',
        cover_photo: 'https://i.postimg.cc/85YdTMfM/main-the-promise-neverland.jpg',
        description: 'Emma, Norman and Ray are three orphans who live happily in the idyllic Grace Field House orphanage, waiting for the moment when they will be assigned a foster family. Everything changes when they accidentally discover the horrifying reality of their existence, so they decide to rebel and fight to the last consequences in a dark and terrifying adventure. But his time is running out...',
        category_id: '681aa07285932e35d1f98b3b',
        author_id: '681a9bb7b5d2bca56da028c1',
    },{
        title: 'Bleach',
        cover_photo: 'https://i.postimg.cc/MGThBm3N/main-bleach.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3b',
        author_id: '681a98bd9ddc91abf6fddddf',
    },{
        title: 'Another',
        cover_photo: 'https://i.postimg.cc/j5kdphLr/main-another.jpg',
        description: 'This story revolves around a curse that affects class 3-3 of Yomiyama High School. It all begins when the protagonist, Kōichi Sakakibara, moves to this school and meets Mei Misaki, a girl who is ignored by her classmates due to a supposed curse that weighs on her. As Kōichi becomes more involved in the mystery surrounding class 3-3, he discovers that a student in the class died 26 years ago, and that every year someone in that class mysteriously dies since then. Kōichi and Mei try to uncover the truth behind the curse and end the wave of death while fighting the danger that lurks around them.',
        category_id: '681aa07285932e35d1f98b3c',
        author_id: '681a9bb7b5d2bca56da028c2',
    },{
        title: 'Gantz',
        cover_photo: 'https://i.postimg.cc/26z0Z0yQ/YHEVOBAXLFF4-FC55-L2-HJ2-JPS4-E.jpg',
        description: 'This is a sci-fi action story that follows a group of people who have been brought back to life by a mysterious sphere called Gantz and forced to participate in dangerous missions against strange and dangerous creatures. It all starts when the protagonist, Kei Kurono, is killed in an accident and is revived by Gantz along with other people who have recently died. As they fight to survive and complete Gantz´s missions, Kei and his companions discover that there is much more at stake than just their own lives.',
        category_id: '681aa07285932e35d1f98b3c',
        author_id: '681a9bb7b5d2bca56da028c1',
    },{
        title: 'Punpun',
        cover_photo: 'https://i.postimg.cc/xCsc02ph/main-buenasnochespunpun.jpg',
        description: 'This story follows the life of Onodera Punpun, a high school boy who struggles with emotional issues and family problems as he tries to grow up and find his place in the world. Punpun is not your typical elementary school student. Despite the fact that he feels the same impulses as his peers, he begins to discover girls and sex, the family situation is not the most stable and he must face it as best he can... and in principle, that is visualizing himself as an amorphous bird in a strange environment.',
        category_id: '681aa07285932e35d1f98b3c',
        author_id: '681a9bb7b5d2bca56da028c1',
    },{
        title: 'Flashpoint',
        cover_photo: 'https://i.postimg.cc/bJjf6Q43/main-flashpoint.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3e',
        author_id: '681a9bb7b5d2bca56da028c2',
    },{
        title: 'Planet Hulk',
        cover_photo: 'https://i.postimg.cc/V6HWZ9k2/main-planet-hulk.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3e',
        author_id: '681a9bb7b5d2bca56da028c2',
    },{
        title: 'Secret invasion',
        cover_photo: 'https://i.postimg.cc/hjG00Zc9/main-secret-invasion.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3e',
        author_id: '681a9bb7b5d2bca56da028c0',
    },{
        title: 'Superman up in the sky',
        cover_photo: 'https://i.postimg.cc/g0XV2hSy/superman-sky-001-01.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3e',
        author_id: '681a9bb7b5d2bca56da028c0',
    },{
        title: 'World War Hulk',
        cover_photo: 'https://i.postimg.cc/cHtX22GS/main-world-war-hulk.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3e',
        author_id: '681a9bb7b5d2bca56da028c2',
    },{
        title: 'Pokemon',
        cover_photo: 'https://i.postimg.cc/3xPP69GH/201-2011893-pokmon-adventures-special-pokemon-adventures-book-volume-3.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3b',
        author_id: '681a9bb7b5d2bca56da028c1',
    },{
        title: 'Citrus',
        cover_photo: 'https://i.postimg.cc/WpgtffJs/citrus-anime-temporada-2-yuri-jpg-743561205.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3d',
        author_id: '681a9bb7b5d2bca56da028c1',
    },{
        title: 'Ao Haru Ride',
        cover_photo: 'https://i.postimg.cc/ydWYPLCC/ao-haru-ride-752359695-large.jpg',
        description: 'edit later',
        category_id: '681aa07285932e35d1f98b3d',
        author_id: '681a9bb7b5d2bca56da028c2',
    }
]

Manga.insertMany(mangas)