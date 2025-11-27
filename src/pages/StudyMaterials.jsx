import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ExternalLink, Download, Video, FileText, Home } from 'lucide-react';

export default function StudyMaterials() {
    const navigate = useNavigate();

    const materials = {
        "Grades 1-3": [
            { title: "Khan Academy Kids", type: "Interactive", url: "https://www.khanacademy.org/kids", icon: Video },
            { title: "ABCmouse", type: "Learning Platform", url: "https://www.abcmouse.com", icon: BookOpen },
            { title: "PBS Kids", type: "Educational Games", url: "https://pbskids.org", icon: Video }
        ],
        "Grades 4-6": [
            { title: "Khan Academy Elementary", type: "Video Lessons", url: "https://www.khanacademy.org", icon: Video },
            { title: "BrainPOP", type: "Animated Lessons", url: "https://www.brainpop.com", icon: Video },
            { title: "Scholastic Learn at Home", type: "Daily Projects", url: "https://classroommagazines.scholastic.com/support/learnathome.html", icon: FileText }
        ],
        "Grades 7-10": [
            { title: "Khan Academy", type: "Comprehensive Courses", url: "https://www.khanacademy.org", icon: Video },
            { title: "Crash Course", type: "Video Series", url: "https://www.youtube.com/user/crashcourse", icon: Video },
            { title: "Quizlet", type: "Study Sets & Flashcards", url: "https://quizlet.com", icon: FileText },
            { title: "MIT OpenCourseWare", type: "Advanced Topics", url: "https://ocw.mit.edu", icon: BookOpen }
        ]
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-4 transition-colors"
                >
                    <Home size={18} />
                    Back to Dashboard
                </button>
                <h1 className="page-title">Study Materials</h1>
                <p className="text-center text-slate-600 max-w-2xl mx-auto">
                    Curated educational resources to supplement your learning journey
                </p>
            </div>

            <div className="space-y-8">
                {Object.entries(materials).map(([gradeRange, resources]) => (
                    <div key={gradeRange} className="glass-panel bg-white/80 border-white/60 shadow-lg">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-3 border-b-2 border-indigo-200">
                            {gradeRange}
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {resources.map((resource, index) => {
                                const Icon = resource.icon;
                                return (
                                    <a
                                        key={index}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group p-5 rounded-xl border-2 border-slate-200 bg-white hover:border-indigo-400 hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
                                                <Icon className="text-indigo-600" size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mb-1">
                                                    {resource.title}
                                                </h3>
                                                <p className="text-sm text-slate-500 mb-2">{resource.type}</p>
                                                <div className="flex items-center gap-1 text-indigo-600 text-sm font-medium">
                                                    <span>Visit Resource</span>
                                                    <ExternalLink size={14} />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 glass-panel bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
                <div className="flex items-start gap-4">
                    <BookOpen className="text-indigo-600 flex-shrink-0" size={32} />
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Need More Resources?</h3>
                        <p className="text-slate-600 mb-4">
                            These are just starting points! Your school library, local public library, and teachers
                            can recommend additional materials tailored to your specific learning needs.
                        </p>
                        <p className="text-sm text-slate-500 italic">
                            💡 Tip: Combine these resources with regular practice quizzes on EduQuiz for the best results!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
