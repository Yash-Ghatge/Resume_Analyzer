import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a PDF file first.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("resume", file);

      const response = await fetch("https://resume-analyzer-ioep.onrender.com/api/analyze/fileupload", {
        method: "POST",
        body: formData,
      });
      

      if (!response.ok) {
        console.error("Server error raw:");
        throw new Error("Upload failed");
      }

      const data = await response.json();
      console.log("API response:", data);

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      // Go to analysis page & pass data
      navigate("/analysis", { state: { result: data } });
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
          Upload Your Resume
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Let our AI analyze your resume and help you stand out in the hiring universe 
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-xl bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm shadow-xl"
        >
          <label
            htmlFor="resumeFile"
            className="block text-lg font-semibold mb-3 text-gray-200"
          >
            Select Your Resume (PDF)
          </label>

          <input
            type="file"
            id="resumeFile"
            name="resume" 
            accept="application/pdf"
            onChange={handleFileChange}
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 cursor-pointer hover:border-gray-500 transition"
          />

          {error && (
            <p className="mt-3 text-sm text-red-400 text-left">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-60 rounded-lg text-white font-semibold text-lg transition active:scale-95"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
