
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv'; 
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyze = async (resumeText) => {
  const prompt = `
  You are an advanced ATS-grade Resume Analyzer AI designed to extract structured insights from a candidate’s resume.

Your analysis should be highly accurate, thorough, and HR-friendly.  
Your task: read the resume text carefully and produce structured JSON ONLY, matching the exact schema below.

-------------------------------------
🎯 OUTPUT JSON SCHEMA
-------------------------------------
{
  "skills": string[],                    // Technical + soft skills detected
  "technical_skills": string[],          // Only tech stack, languages, tools
  "soft_skills": string[],               // Communication, teamwork, leadership, etc.
  "ResumeSummary": string,               // 2–3 sentence polished professional summary
  "suggested_roles": string[],           // 2–4 job roles suited to this profile
  "experience_years": number,            // Estimated total years of experience (0 if student)
  "education": string[],                 // Degree, university, year
  "projects": string[],                  // Project titles or short descriptions
  "technologies": string[],              // Frameworks, libraries, cloud/tools used
  "strengths": string[],                 // Strong qualities inferred from resume
  "improvements": string[],              // Missing areas or suggested improvements
  "ats_score": number                    // Score 0–100 based on ATS friendliness
}

-------------------------------------
⚠ STRICT INSTRUCTIONS
-------------------------------------
- Output ONLY JSON. No markdown. No backticks. No explanations.
- If data is missing, return an empty array, null, or 0 where appropriate.
- Do not invent unrealistic experience or technologies.
- Detect skills from both SKILLS section and project descriptions.
- Soft skills must be meaningful (communication, adaptability, leadership, etc.)
- "Strengths" must reflect the candidate’s professional qualities.
- "Improvements" should identify gaps, missing technologies, weak areas, or resume improvements.
- ATS score should be based on clarity, keyword richness, structure, and completeness.

-------------------------------------
📄 RESUME TEXT TO ANALYZE:
${resumeText}
`;

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash", // or "gemini-2.0-flash-exp" / "2.5" if your key supports it
  });

  const result = await model.generateContent({
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  // Gemini response as text
  let text = result.response.text(); // 👈 use let, not const

  // If Gemini wraps JSON in ```json ... ``` remove that
  const match = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (match) {
    text = match[1].trim();
  }

  let json; // 👈 use let so we can assign once
  try {
    json = JSON.parse(text);
  } catch (err) {
    console.error("Gemini did not return valid JSON:", text);
    throw new Error("Invalid JSON from Gemini");
  }

  return json;
};
