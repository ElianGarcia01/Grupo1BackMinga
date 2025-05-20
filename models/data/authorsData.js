import 'dotenv/config.js'
import "../../config/database.js"
import User from '../User.js'
import Author from '../Author.js'

let authors = [
    { name: "alejandro", lastName: "johnson", city: "New York", country: "USA", date_birth: '1985-05-21', photo: "https://randomuser.me/api/portraits/men/22.jpg", user_id: "alejandro@example.com", },
    { name: "lucas", lastName: "martinez", city: "Madrid", country: "Spain", date_birth: '1990-12-31', photo: "https://randomuser.me/api/portraits/men/45.jpg", user_id: "lucas@example.com", },
    { name: "eric", lastName: "tanaka", city: "Tokyo", country: "Japan", date_birth: '1988-07-23', photo: "https://randomuser.me/api/portraits/men/11.jpg", user_id: "eric@example.com", },
    { name: "Juan", lastName: "Pérez", city: "Bogotá", country: "Cundinamarca", date_birth: "1990-05-12", photo: "https://randomuser.me/api/portraits/men/69.jpg", user_id: "juan.perez@example.com" },
    { name: "María", lastName: "López", city: "Medellín", country: "Antioquia", date_birth: "1992-08-20", photo: "https://randomuser.me/api/portraits/men/31.jpg", user_id: "maria.lopez@example.com" },
    { name: "Carlos", lastName: "Rodríguez", city: "Cali", country: "Valle del Cauca", date_birth: "1988-03-15", photo: "https://randomuser.me/api/portraits/men/21.jpg", user_id: "carlos.rodriguez@example.com" }, 
    { name: "Ana", lastName: "Torres", city: "Barranquilla", country: "Atlántico", date_birth: "1995-11-10", photo: "https://randomuser.me/api/portraits/women/78.jpg", user_id: "ana.torres@example.com" },
    { name: "Luis", lastName: "Martínez", city: "Cartagena", country: "Bolívar", date_birth: "1985-07-07", photo: "https://randomuser.me/api/portraits/men/73.jpg", user_id: "luis.martinez@example.com" },
    { name: "Sofia", lastName: "Gómez", city: "Bucaramanga", country: "Santander", date_birth: "1991-02-28", photo: "https://randomuser.me/api/portraits/women/6.jpg", user_id: "sofia.gomez@example.com" }, 
    { name: "Pedro", lastName: "Ramírez", city: "Manizales", country: "Caldas", date_birth: "1993-06-18", photo: "https://randomuser.me/api/portraits/men/67.jpg", user_id: "pedro.ramirez@example.com" },
    { name: "Laura", lastName: "Morales", city: "Pereira", country: "Risaralda", date_birth: "1994-01-09", photo: "https://randomuser.me/api/portraits/women/49.jpg", user_id: "laura.morales@example.com" },
    { name: "Andres", lastName: "Sánchez", city: "Ibagué", country: "Tolima", date_birth: "1990-10-30", photo: "https://randomuser.me/api/portraits/men/66.jpg", user_id: "andres.sanchez@example.com" },
    { name: "Carolina", lastName: "Ruiz", city: "Neiva", country: "Huila", date_birth: "1989-09-25", photo: "https://randomuser.me/api/portraits/women/71.jpg", user_id: "carolina.ruiz@example.com" }
]

let insert_authors = async () => {
    try {
        for(let author of authors){
            let user = User.findOneAndUpdate({ email: company.user_id }, { role: 1 })
            author.user_id = await user._id
            let insert = await Author.create(author)
            console.log(insert.name);
        }
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

insert_authors()
