import 'dotenv/config.js'
import "../../config/database.js"
import User from '../User.js'
import bcryptjs from 'bcryptjs'

let Users = [
    { email: "lucas@example.com", password: "Password1234", photo: "https://randomuser.me/api/portraits/men/45.jpg" },
    { email: "alejandro@example.com", password: "Password1234", photo: "https://randomuser.me/api/portraits/men/22.jpg" },
    { email: "eric@example.com", password: "Password1234", photo: "https://randomuser.me/api/portraits/men/11.jpg" },
    { email: "juan.perez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/69.jpg" },
    { email: "maria.lopez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/31.jpg" },
    { email: "carlos.rodriguez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/21.jpg" },
    { email: "ana.torres@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/78.jpg" },
    { email: "luis.martinez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/73.jpg" },
    { email: "sofia.gomez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/6.jpg" },
    { email: "pedro.ramirez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/67.jpg" },
    { email: "laura.morales@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/49.jpg" },
    { email: "andres.sanchez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/66.jpg" },
    { email: "carolina.ruiz@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/71.jpg" },
    { email: "diego.fernandez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/35.jpg" },
    { email: "valentina.mendoza@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/21.jpg" },
    { email: "miguel.navarro@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/37.jpg" },
    { email: "camila.silva@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/72.jpg" },
    { email: "javier.castro@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/82.jpg" },
    { email: "natalia.romero@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/39.jpg" },
    { email: "daniel.arias@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/34.jpg" },
    { email: "paula.reyes@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/76.jpg" },
    { email: "sebastian.ortega@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/64.jpg" },
    { email: "isabella.martin@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/24.jpg" },
    { email: "alejandro.guerrero@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/87.jpg" },
    { email: "manuela.cortez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/64.jpg" },
    { email: "fernando.delgado@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/87.jpg" },
    { email: "gabriela.vargas@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/81.jpg" },
    { email: "ricardo.mejia@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/84.jpg" },
    { email: "juliana.leon@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/45.jpg" },
    { email: "santiago.molina@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/9.jpg" },
    { email: "martina.cano@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/women/41.jpg" },
    { email: "cristian.vera@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/men/68.jpg" },
    { email: "stiven.mata@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/lego/1.jpg" },
    { email: "yeison.lopez@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/lego/0.jpg" },
    { email: "sebas.mayorca@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/lego/6.jpg" },
    { email: "admin@example.com", password: "Password123456", photo: "https://randomuser.me/api/portraits/lego/5.jpg" }

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