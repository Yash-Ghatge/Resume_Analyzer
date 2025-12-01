import React from 'react'
import { CheckCircleIcon, BriefcaseIcon, AcademicCapIcon, DocumentTextIcon, LightBulbIcon, AdjustmentsHorizontalIcon, ChatBubbleLeftEllipsisIcon, UserGroupIcon, ChartBarIcon } from "@heroicons/react/24/solid";

const Features = () => {
  return (
    <div>
      <div className="w-full flex justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-linear-to-b from-gray-900/70 to-black/60 border border-gray-700/50 rounded-3xl p-10 shadow-xl backdrop-blur-xl">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-200 leading-relaxed mb-10">
          Our AI-powered resume analyzer helps you optimize  
          your resume for the exact job you’re targeting.
        </h2>
        <ul className="space-y-5 text-gray-300 text-base md:text-lg">
          <li className="flex items-center gap-3"><CheckCircleIcon className="h-6 text-blue-400" />
            Skill gap analysis
          </li>

          <li className="flex items-center gap-3"><BriefcaseIcon className="h-6 text-blue-400" />
            Experience alignment insights
          </li>

          <li className="flex items-center gap-3"><AcademicCapIcon className="h-6 text-blue-400" />
            Education and certification review
          </li>

          <li className="flex items-center gap-3"><DocumentTextIcon className="h-6 text-blue-400" />
            Resume formatting suggestions
          </li>

          <li className="flex items-center gap-3"><LightBulbIcon className="h-6 text-blue-400" />
            Soft skills & cultural fit evaluation
          </li>

          <li className="flex items-center gap-3"><AdjustmentsHorizontalIcon className="h-6 text-blue-400" />
            Personalized improvement suggestions
          </li>

          <li className="flex items-center gap-3"><ChatBubbleLeftEllipsisIcon className="h-6 text-blue-400" />
            Bullet point enhancements
          </li>

          <li className="flex items-center gap-3"><BriefcaseIcon className="h-6 text-blue-400" />
            Interview preparation tips
          </li>

          <li className="flex items-center gap-3"><UserGroupIcon className="h-6 text-blue-400" />
            Candidate comparison overview
          </li>
        </ul>


      </div>
    </div>
    </div>
  )
}

export default Features
