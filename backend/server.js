import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//app config
const app = express()
const port = process.env.PORT || 4000

//middlewares
app.use(express.json()) //request passed using this middleware
app.use(cors()) // allow frontend to connect with backend

//api endpoints

app.get('/',(req,res)=>{

})