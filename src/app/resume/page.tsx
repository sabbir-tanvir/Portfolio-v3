"use client";

import Navbar from '@/components/navbar';
import React from 'react';
import { Download } from 'lucide-react';

const ResumePage = () => {
    return (
        <>
            <div className='bg-white dark:bg-[#0B0B0D]'>
                <Navbar />

                {/* Floating Download Button */}
                <button
                    onClick={() => {
                        // This function will be called on the client side
                        if (typeof window !== 'undefined') {
                            // Import html2pdf dynamically to avoid SSR issues
                            import('html2pdf.js').then((html2pdf) => {
                                const element = document.getElementById('resume-content');
                                
                                // Updated options to preserve layout and remove margins
                                const opt = {
                                    margin: 0, // Remove margins
                                    filename: 'Sabbir_Tanvir_Resume.pdf',
                                    image: { type: 'jpeg', quality: 1 }, // Higher quality
                                    html2canvas: { 
                                        scale: 3, 
                                        useCORS: true,
                                        letterRendering: true,
                                        // Ensure layout preservation
                                        windowWidth: element.scrollWidth,
                                        windowHeight: element.scrollHeight
                                    },
                                    jsPDF: { 
                                        unit: 'px', 
                                        format: [element.scrollWidth, element.scrollHeight],
                                        orientation: 'portrait',
                                        hotfixes: ['px_scaling']
                                    }
                                };
                                
                                html2pdf.default().set(opt).from(element).save();
                            });
                        }
                    }}
                    className="fixed right-5 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Download Resume as PDF"
                >
                    <Download size={24} />
                </button>

                {/* Resume Page start */}
                <div id="resume-content" className="max-w-4xl mx-auto p-8 py-16 dark:bg-[#19191e] shadow-2xl shadow-gray-400 dark:shadow-gray-900">
                    <header className="text-center mb-6">
                        <h1 className="text-3xl text-black dark:text-white font-bold">MD Sabbir Mahmud Tanvir</h1>
                        <div className="flex justify-center space-x-2 text-sm mt-2">
                            <span>sabbirmahmdtanvir@gmail.com</span>
                            <span>|</span>
                            <span>+880-17773576__</span>
                            <span>|</span>
                            <span>LinkedIn: <a href="https://linkedin.com/in/sabbir-tanvir" className="text-blue-600 hover:underline">sabbir-tanvir</a></span>
                            <span>|</span>
                            <span>GitHub: <a href="https://github.com/sabbir-tanvir" className="text-blue-600 hover:underline">sabbir-tanvir</a></span>
                        </div>
                    </header>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-2">SUMMARY</h2>
                        <p>
                            Passionate computer science student with a strong foundation in data structures, algorithms, and full-stack
                            development. Currently gaining hands-on experience with technologies like Node.js, React.js, and Python.
                            Eager to contribute to innovative software solutions while further developing my skills in a collaborative and
                            challenging environment.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-2">PROJECTS</h2>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <div>
                                    <h3 className="font-bold inline">Mock Interview Platform</h3>
                                    <span className="ml-2">(Next.js, Vapi AI, Firebase)</span>
                                    <div>
                                        <a href="https://github.com/sabbir-tanvir/Mock-Interview" className="text-blue-600 text-sm hover:underline">GitHub repository</a>
                                    </div>
                                </div>
                                <div className="text-right">Mar 2025 – Apr 2025</div>
                            </div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Developed an interactive web platform for coding <a href="#" className="text-blue-600 hover:underline">interviews</a>.</li>
                                <li>Implemented question bank management, user authentication, and session recording.</li>
                                <li>Delivered feedback module allowing reviewers to leave structured feedback on each session.</li>
                                <li>GitHub: <a href="https://github.com/sabbir-tanvir/Mock-Interview" className="text-blue-600 hover:underline">https://github.com/sabbir-tanvir/Mock-Interview</a></li>
                                <li>Demo: <a href="https://mock-interview-three-alpha.vercel.app/" className="text-blue-600 hover:underline">https://mock-interview-three-alpha.vercel.app/</a></li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <div>
                                    <h3 className="font-bold inline">Grocery Shopping Website</h3>
                                    <span className="ml-2">(PHP, MySQL, JavaScript, Bootstrap)</span>
                                    <div>
                                        <a href="https://github.com/sabbir-tanvir/Grocery-Shopping-Website" className="text-blue-600 text-sm hover:underline">GitHub repository</a>
                                    </div>
                                </div>
                                <div className="text-right">2023</div>
                            </div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Developed a comprehensive online grocery shopping platform with user authentication and admin panel.</li>
                                <li>Implemented product search, shopping cart functionality, and a feedback system.</li>
                                <li>Built with PHP and MySQL backend with responsive frontend using Bootstrap and jQuery.</li>
                                <li>Live Demo: <a href="https://grocery-shop-dsabbirtanvir.infinityfreeapp.com/" className="text-blue-600 hover:underline">https://grocery-shop-dsabbirtanvir.infinityfreeapp.com/</a></li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <div>
                                    <h3 className="font-bold inline">Sage AI</h3>
                                    <span className="ml-2">(React, Gemini API, Convex, Tailwind CSS)</span>
                                    <div>
                                        <a href="https://github.com/sabbir-tanvir/Sage-Ai" className="text-blue-600 text-sm hover:underline">GitHub repository</a>
                                    </div>
                                </div>
                                <div className="text-right">2025</div>
                            </div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Created an intelligent AI assistant application for answering questions, generating content, and providing recommendations.</li>
                                <li>Integrated Google Gemini API for natural language processing and response generation.</li>
                                <li>Implemented personalized user experiences with Convex for database management.</li>
                                <li>Live Demo: <a href="https://sageai-xi.vercel.app/" className="text-blue-600 hover:underline">https://sageai-xi.vercel.app/</a></li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <div>
                                    <h3 className="font-bold inline">Anonymous Messenger</h3>
                                    <span className="ml-2">(React, TypeScript, MongoDB, Node.js)</span>
                                    <div>
                                        <a href="https://github.com/sabbir-tanvir/Send-Me-" className="text-blue-600 text-sm hover:underline">GitHub repository</a>
                                    </div>
                                </div>
                                <div className="text-right">2025</div>
                            </div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Built a private messaging platform focused on user anonymity and security.</li>
                                <li>Implemented end-to-end encryption and self-destructing messages for enhanced privacy.</li>
                                <li>Developed with React/TypeScript frontend and Node.js/MongoDB backend.</li>
                                <li>Live Demo: <a href="https://sendmee.netlify.app/" className="text-blue-600 hover:underline">https://sendmee.netlify.app/</a></li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <div>
                                    <h3 className="font-bold inline">Portfolio Website</h3>
                                    <span className="ml-2">(HTML, CSS, JavaScript, Vercel)</span>
                                    <div>
                                        <a href="https://github.com/sabbir-tanvir/Portfolio" className="text-blue-600 text-sm hover:underline">GitHub repository</a>
                                    </div>
                                </div>
                                <div className="text-right">2022</div>
                            </div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Designed and developed a responsive personal portfolio website to showcase projects and skills.</li>
                                <li>Implemented smooth animations, dark mode functionality, and interactive contact form.</li>
                                <li>Created with pure HTML, CSS, and JavaScript for optimal performance.</li>
                                <li>Live Demo: <a href="https://portfolio-sabbir.vercel.app/" className="text-blue-600 hover:underline">https://portfolio-sabbir.vercel.app/</a></li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <div>
                                    <h3 className="font-bold inline">Online Banking App</h3>
                                    <span className="ml-2">(React, Redux, Node.js, PostgreSQL)</span>
                                    <div>
                                        <a href="https://github.com/sabbir-tanvir/Payit" className="text-blue-600 text-sm hover:underline">GitHub repository</a>
                                    </div>
                                </div>
                                <div className="text-right">2024</div>
                            </div>
                            <ul className="list-disc list-inside ml-4">
                                <li>Developed a comprehensive banking platform for managing finances, money transfers, and expense tracking.</li>
                                <li>Implemented secure transactions, real-time balance updates, and budget tracking features.</li>
                                <li>Built with React/Redux frontend and Node.js/PostgreSQL backend with bank-level security.</li>
                                <li>GitHub: <a href="https://github.com/sabbir-tanvir/Payit" className="text-blue-600 hover:underline">https://github.com/sabbir-tanvir/Payit</a></li>
                            </ul>
                        </div>

                    </section>


                    <section className="mb-6">
                        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-2">EDUCATION</h2>
                        <div className="flex justify-between">
                            <div>
                                <div className='flex justify-between'>
                                    <h3 className="font-bold">Green University of Bangladesh</h3>
                                    <p className='font-bold'>Rupganj, Narayanganj</p>
                                </div>
                                <div className='flex justify-between'>
                                <p className="italic">Bachelor's of Science in Computer Science and Engineering</p>
                                <p className='font-bold'>Expected Graduation: Jun 2025</p>
                                </div>
                                <ul className="list-disc list-inside ml-4">
                                    <li>CGPA:___/4.00</li>
                                    <li>
                                        Related Coursework: Structured Programming, Data Structures & Algorithms, Object-Oriented
                                        Programming, Database Management System, Statistics & Applications, Computer Architecture, Machine
                                        Learning, Artificial Intelligence, Data Mining
                                    </li>
                                </ul>
                            </div>
                            <div className="text-right">
                            </div>
                        </div>
                    </section>


                    <section className="mb-4">
                        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-2">Problem-Solving & Competitive Programming</h2>
                        <ul className="list-disc list-inside ml-4">
                            <li>
                                <span className="font-semibold">ICPC & Intra-Department Contests:</span> Participated in ICPC Preliminary Round and intra-department contests,
                                improving team collaboration, algorithmic problem-solving, and coding efficiency.
                            </li>
                            <li>
                                <span className="font-semibold">LeetCode:</span> Solved 30+ problems, focusing on data structures and algorithms.
                            </li>
                            <li>
                                <span className="font-semibold">LeetCode profile:</span> <a href="https://leetcode.com/u/sabbir-tanvir" className="text-blue-600 hover:underline">https://leetcode.com/u/sabbir-tanvir</a>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 mb-2">SKILLS</h2>
                        <ul className="list-none ml-4">
                            <li><span className="font-semibold">Programming:</span> C++, Java, Python, JavaScript, HTML/CSS, SQL, MongoDB</li>
                            <li><span className="font-semibold">Frameworks & Libraries:</span> Node.js, Express.js, Django, NumPy, Pandas</li>
                            <li><span className="font-semibold">Technical:</span> RESTful API Development, Web development, Machine Learning</li>
                            <li><span className="font-semibold">Tools:</span> VScode, Postman, PyCharm, Netbeans, Jupyter Notebooks, Git</li>
                        </ul>
                    </section>
                </div>
                {/* Resume Page end */}

            </div>
        </>

    );
};

export default ResumePage;