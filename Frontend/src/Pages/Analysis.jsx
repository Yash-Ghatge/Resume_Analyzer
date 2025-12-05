
import { useLocation, useNavigate } from "react-router-dom";

const Analysis = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const result = state?.result;

  if (!result) {
    // default page
    return (
      <div className="min-h-screen bg-linear-to-b from-black to-[#3B006E] text-white flex flex-col items-center justify-center px-4">
        <p className="mb-4 text-lg text-gray-200">
          No analysis data found. Please upload your resume first
        </p>
        <button onClick={() => navigate("/")} className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold">Go to Upload Page</button>
      </div>
    );
  }

  const ai = result.data || {};
  const name = result.name || "You";
  const score = ai.ats_score ?? 0;
  const skills = ai.skills || [];
  const softSkills = ai.soft_skills || [];
  const strengths = ai.strengths || [];
  const improvements = ai.improvements || [];
  const suggestedRoles = ai.suggested_roles || [];
  const summary = ai.ResumeSummary || "No summary available";

  const analyzedDate = ai.createdAt
    ? new Date(ai.createdAt).toLocaleDateString()
    : new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-linear-to-b from-black to-[#3B006E] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-200">
              Resume Analysis Report
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Candidate: <span className="font-medium">{name}</span>
            </p>
          </div>
          <p className="text-sm text-gray-400">Analyzed on <span className="font-medium">{analyzedDate}</span></p>
        </div>

        {/* score card of user */}
        <div className="bg-[#FFF8E1]/90 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <p className="text-gray-700 font-semibold text-lg">
              Overall Resume Score
            </p>
            <p className="mt-2 text-yellow-700 font-semibold flex items-center gap-2">
              <span className="inline-block w-2 h-6 bg-yellow-600 rounded-full" />
              {score >= 80
                ? "Excellent"
                : score >= 60
                ? "Good"
                : "Needs Improvement"}
            </p>
            <p className="mt-4 text-gray-700 max-w-xl">
              Your resume scored <b>{score} out of 100</b>. This indicates a
              solid resume with clear scope for improving ATS performance and
              impact with recruiters.
            </p>
          </div>

          {/* Circular score */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-10 border-yellow-500/30" />
            <div
              className="absolute inset-0 rounded-full border-10 border-yellow-600 border-t-transparent -rotate-90"
              style={{
                background: `conic-gradient(#ca8a04 ${
                  score * 3.6
                }deg, transparent 0deg)`,
                border: "none",
              }}
            ></div>
            <div className="relative w-24 h-24 rounded-full bg-[#FFF8E1] flex flex-col items-center justify-center text-yellow-800">
              <span className="text-2xl font-bold">{score}</span>
              <span className="text-xs font-medium">/ 100</span>
            </div>
          </div>
        </div>

        {/* Skills + strengths + improvements */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 space-y-6 border border-white/10">
          <h3 className="text-xl font-semibold mb-3">Skills Analysis</h3>

          {/* Skill chips */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-200 text-xs border border-blue-400/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-green-500/10 text-green-200 text-xs border border-green-400/40">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-300 mb-2">Suggested Roles</h4>
              <div className="flex flex-wrap gap-2">
                {suggestedRoles.map((role) => (
                  <span key={role}className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-200 text-xs border border-orange-400/40">{role}</span>
                ))}
              </div>
            </div>
          </div>

          {/* strengths & improvements for user */}
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-green-500/10 border border-green-400/40 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-black text-lg">✓</span>
                <h4 className="font-semibold text-gray-100">Strengths</h4>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-green-100/90">
                {strengths.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-orange-500/10 border border-orange-400/40 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-black text-lg">!</span>
                <h4 className="font-semibold text-gray-100">Areas for Improvement</h4>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-orange-100/90">
                {improvements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Summary of resume*/}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
          <h3 className="text-xl font-semibold mb-3">Resume Summary</h3>
          <p className="text-gray-200 text-sm leading-relaxed">{summary}</p>
        </div>

        <div className="flex justify-end">
          <button onClick={() => navigate("/")}className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-sm font-medium">Analyze another resume</button>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
