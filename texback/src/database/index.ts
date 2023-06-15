import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({ path: "./.env" })

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    dialect: "mysql",
    logging: false
})

sequelize.authenticate().then(() => {
    console.log("Connection ok.")
}).catch(() => {
    console.log("Connection is fail.")
})

export default sequelize
