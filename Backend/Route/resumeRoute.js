import express from 'express'
import { response , upload } from '../Controller/resumeController.js'


const resumeRouter = express.Router()


resumeRouter.post('/fileupload',upload.single('resume'),response)

export default resumeRouter