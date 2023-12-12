import React from 'react'

const Experience = () => {
    return (
        <section id='experience' className="min-h-[90vh] w-full md:px-32 py-10 border-t ">
            <h1 className="text-dark text-3xl my-5 text-center">
                Journey So far
            </h1>
            <div className="flex justify-center items-center p-1 md:p-3">
                <div className="bg-extraLight p-8 rounded-lg w-full md:w-[45vw] mx-auto">
                    <ul className="mt-8 rounded-xl relative">
                        <li className="pb-4 border-l-2 border-purple-500 pl-6 ml-6 last:border-0 last:pb-0 timeLinePoint">
                            <div className="text-dark font-medium time">
                                Born On
                            </div>
                            <p className="text-light-secondary">
                                26th July 2001
                            </p>
                        </li>
                        <li className="pb-4 border-l-2 border-purple-500 pl-6 ml-6 last:border-0 last:pb-0 timeLinePoint">
                            <div className="text-dark font-medium time flex justify-between items-center">
                                Finished Schooling
                                <span className="text-xs text-dark-secondary">
                                    Raipur, India
                                </span>
                            </div>
                            <p className="text-light-secondary">March, 2019</p>
                            <span className="text-sm">
                                Finished Schooling From Holy Cross Kapa
                            </span>
                        </li>
                        <li className="pb-4 border-l-2 border-purple-500 pl-6 ml-6 last:border-0 last:pb-0 timeLinePoint">
                            <div className="text-dark font-medium time flex justify-between items-center">
                                Software Developer Intern, Beasenest
                                <span className="text-xs text-dark-secondary">
                                    West Bengal, India
                                </span>
                            </div>
                            <p className="text-light-secondary">
                                October' 2021
                            </p>
                            <span className="text-sm">
                                I was Responsible for developing the entire UI
                                for an E-commerce website. That sells Daily need
                                items
                            </span>
                        </li>
                        <li className="pb-4 border-l-2  pl-6 ml-6 last:border-0 last:pb-0 timeLinePoint">
                            <div className="text-dark font-medium time flex justify-between items-center">
                                Frontend Developer Intern, Pylon Tech
                                <span className="text-xs text-dark-secondary">
                                    Remote, India
                                </span>
                            </div>
                            <p className="text-light-secondary">
                                January' 2022
                            </p>
                            <span className="text-sm">
                                Developed website for the government of
                                chhattisgarh, which helped them tackle crimes
                                and voilence against women
                            </span>
                        </li>
                        <li className="pb-4 border-l-2  pl-6 ml-6 last:border-0 last:pb-0 timeLinePoint">
                            <div className="text-dark font-medium time flex justify-between items-center">
                                Software Developer Intern, Klimb.io
                                <span className="text-xs text-dark-secondary">
                                    Mumbai, India
                                </span>
                            </div>
                            <p className="text-light-secondary">June' 2022</p>
                            <span className="text-sm">
                                Worked on cloud-based recruitment management
                                solution designed to help businesses manage
                                hiring processes{' '}
                            </span>
                        </li>
                        <li className="pb-4 border-l-2  pl-6 ml-6 last:border-0 last:pb-0 timeLinePoint">
                            <div className="text-dark font-medium time flex justify-between items-center">
                                Software Developer Intern, Capitsign
                                <span className="text-xs text-dark-secondary">
                                    Noida, India
                                </span>
                            </div>
                            <p className="text-light-secondary">
                                September' 2022
                            </p>
                            <span className="text-sm">
                                Developed options analytics tools that helps you
                                analyse market trends and visualise your
                                strategies for a simple and intuitive options
                                trading experience.s
                            </span>
                        </li>
                        <li className="pb-4 border-l-2 border-purple-500 pl-6 ml-6 last:border-0 last:pb-0 timeLinePoint">
                            <div className="text-dark font-medium time flex items-center justify-between">
                                Bachelor of technology,
                                <span className="text-xs text-dark-secondary">
                                    Raipur, India
                                </span>
                            </div>
                            <p className="text-light-secondary">June' 2023</p>
                            <span className="text-sm">
                                <ul>
                                    <li>• Graduated From SSIPMT with Major's in Computer
                                Science</li>
                                    <li>• Build Deeplearning models that can identify traces of brain tumour in MRI Report </li>
                                </ul>
                                
                                
                            </span>
                        </li>
                        <li className="pb-4 border-l-2  pl-6 ml-6 last:border-0 last:pb-0 timeLinePoint">
                            <div className="text-dark font-medium time flex justify-between items-center">
                                Software Developer Engineer, Capitsign
                                <span className="text-xs text-dark-secondary">
                                    Noida, India
                                </span>
                            </div>
                            <p className="text-light-secondary">Present</p>
                            <span className="text-sm">
                                <ul>
                                    <li>
                                        • Built automated trading tools using
                                        Apache Flink, Go, and Next.js to
                                        Automate trading FnO strategies.
                                    </li>
                                    <li>
                                        • Revamped onboarding experience for new
                                        users, developing a real-time trading
                                        strategy recommendation system that
                                        provides actionable strategy
                                        recommendations based on real-time data.
                                        (NodeJS, Lambda, MongoDB)
                                    </li>
                                    <li>
                                        • Built Payment and Subscription Management System
                                    </li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience
