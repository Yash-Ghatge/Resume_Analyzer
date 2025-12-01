import express from 'express'
import cors from 'cors'
import ConnectDB from './db.js'
import dotenv from 'dotenv'
dotenv.config()
import resumeRouter from './Route/resumeRoute.js'

const app = express()


app.use(express.json())
app.use(cors())

ConnectDB()

app.get('/',(req,res)=>{
    res.send('API IS WORKING')
})
app.use('/api/analyze',resumeRouter)
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log('Server is running on port 5000')
})