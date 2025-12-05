import express from 'express'
import cors from 'cors'
import ConnectDB from './db.js'
import dotenv from 'dotenv'
dotenv.config()
import resumeRouter from './Route/resumeRoute.js'

const app = express()
const PORT = process.env.PORT || 5000
ConnectDB()

app.use(express.json())
app.use(cors())



app.get('/',(req,res)=>{
    res.send('API IS WORKING')
})


app.use('/api/analyze',resumeRouter)


app.listen(PORT,()=>{
    console.log('Server is running on port 5000')
})