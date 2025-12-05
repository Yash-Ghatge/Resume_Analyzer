import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema({
    name : { type : String  },
    email : { type : String },
    resumeUrl: { type: String, required: true },
    AIresponse : {
      skills: { type: [String], default: [] },
      soft_skills: { type: [String], default: [] },   
      strengths: { type: [String], default: [] },        
      improvements: { type: [String], default: [] },    
      ResumeSummary: { type: String },
      suggested_roles: { type: [String], default: [] },
      ats_score: { type: "number" },
    }
},
 { timestamps: true } 
)

const Resume = new mongoose.model('resume',resumeSchema)
export default Resume