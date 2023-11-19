import Video from "../Clips/Clips";
import VideoTwo from "../Clips/Clip_i";


function Main(){
    return(
        <>
            <div className="bg-black text-white relative pt-44">
                <div className="xxs:text-6xl lg:text-7xl md:text-6xl ssm:text-5xl xs:text-5xl xs:text-center xs:font-bold">
                    <h1>Hire the world's <div id="ani">top remote developers </div>faster </h1>
                </div>
                <div className="mmd:text-2xl xs:text-center xs:mx-6 xs:mt-8 xxs:text-md md:text-xl">
                    <span>HireAI helps you skip outreach, job ads and resume screening.</span>
                </div>

                <div className="xs:flex xs:flex-col ssm:mx-20 xs:mx-6 xxs:mx-16 xs:space-y-4 xs:justify-center xs:mt-14">
                    <div className="lg:w-7/12 lg:mx-auto md:flex xs:space-y-4 md:space-x-4 md:mx-20">
                        <button className="xxs:w-full flex items-center xs:truncate justify-center xs:text-center xs:p-4 xs:px-10 bg-purple-500 rounded-lg">
                            <svg width="25" height="25" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.707 18.897a5 5 0 0 0 3.802-4.115L15 5l1.49 9.782a5 5 0 0 0 3.803 4.115L25 20l-4.707 1.103a5 5 0 0 0-3.802 4.115L15 35l-1.49-9.782a5 5 0 0 0-3.803-4.115L5 20l4.707-1.103zm24.054 8.821a5 5 0 0 0 3.694-4.159L40 5l2.545 18.56a5 5 0 0 0 3.694 4.158L55 30l-8.761 2.282a5 5 0 0 0-3.694 4.159L40 55l-2.545-18.56a5 5 0 0 0-3.694-4.158L25 30l8.761-2.282zm-11.093 12.69a5 5 0 0 1-4.023 3.941L15 45l3.645.65a5 5 0 0 1 4.024 3.942L23.75 55l1.081-5.408a5 5 0 0 1 4.024-3.941L32.5 45l-3.645-.65a5 5 0 0 1-4.024-3.942L23.75 35l-1.081 5.408z" fill="#fff"></path></svg>
                            <span className="xs:ml-2 font-bold">Hire developers</span>
                        </button>
                        <button className="xs:w-full xs:text-center xs:p-4 xs:px-10 bg-black border-2 rounded-lg">
                            <span>Find remote jobs</span>
                        </button>
                    </div>
                    <div className="xs:text-center ">
                    <button className=" xs:text-slate-300">
                        <span>Free trial • Cancel anytime</span>
                    </button>
                    </div>
                </div>

                {/** video */}
                <div className="relative">
                    <div className="xs:mt-16 xs:mx-4">
                        <Video />
                    </div>
                    <div className="xs:mx-4 lg:pl-8 lg:pt-8" id="iiup">
                        <h1 className="xs:font-bold xs:text-xl lg:text-3xl">Get <span>instant</span> candidate matches without searching</h1>
                        <ul className="xxs:text-lg xxs:font-bold" id="uuuul">
                            <li>Chat with HireAI to view your top matches from our global pool of 300,000+ developers</li>
                            <li>No more tedious searching, just view and hire your ideal candidate</li>
                        </ul>
                    </div>
                </div>
                
                {/** video */}
                <div className="relative">
                    <div className="xs:mt-16 xs:mx-4">
                        <VideoTwo />
                    </div>
                    <div className="xs:mx-4 lg:pl-8 lg:pt-8" id="iiup">
                        <h1 className="xs:font-bold xs:text-xl lg:text-3xl">Identify top <br className="hidden xs:block xxs:hidden" />applicants with <span>no manual screening</span></h1>
                        <ul className="xxs:text-lg xxs:font-bold" id="uuuul">
                            <li>Stop reviewing 100s of resumes and focus on your highest quality applicants only.</li>
                            <li>HireAI learns your perferences for more personalized result after each review.</li>
                        </ul>
                    </div>
                </div>

                
                {/** videothree */}
                <div className="lg:mx-8 relative md:flex md:items-center">
                    <div className="xs:mt-16 xs:mx-4 md:mx-0 md:w-25 mmd:w-8/12 lg:5/12">
                        <img src="https://cdn.arc.dev/images/client-landing/feature-3-1x.png" srcset="https://cdn.arc.dev/images/client-landing/feature-3-1x.png 1x, https://cdn.arc.dev/images/client-landing/feature-3-2x.png 2x" alt="hire faster with curated candidates" className="rounded-xl"/>
                    </div>
                    <div className="xs:mx-4 lg:pt-8" id="iup">
                        <h1 className="xs:font-bold xs:text-xl md:text-2xl">Hire <span>4x faster</span> with curated candidates</h1>
                        <ul className="" id="uuuul">
                            <li>Meet curated, ready-to-interview candidates right now</li>
                            <li>Verified skills and availability help you skip first round interviews</li>
                        </ul>
                    </div>
                </div>
                
                <div id="eeet" className="ssm:mx-20 md:justify-center md:mx-0 xs:relative xs:flex xs:flex-col xs:mx-5 xs:mt-12 xxs:mx-16 xxs:justify-center">
                    <button className="flex md:w-64 md:mx-auto md:items-center items-center xs:text-center xs:p-4 xs:px-10 bg-purple-500 rounded-lg">
                        <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.707 18.897a5 5 0 0 0 3.802-4.115L15 5l1.49 9.782a5 5 0 0 0 3.803 4.115L25 20l-4.707 1.103a5 5 0 0 0-3.802 4.115L15 35l-1.49-9.782a5 5 0 0 0-3.803-4.115L5 20l4.707-1.103zm24.054 8.821a5 5 0 0 0 3.694-4.159L40 5l2.545 18.56a5 5 0 0 0 3.694 4.158L55 30l-8.761 2.282a5 5 0 0 0-3.694 4.159L40 55l-2.545-18.56a5 5 0 0 0-3.694-4.158L25 30l8.761-2.282zm-11.093 12.69a5 5 0 0 1-4.023 3.941L15 45l3.645.65a5 5 0 0 1 4.024 3.942L23.75 55l1.081-5.408a5 5 0 0 1 4.024-3.941L32.5 45l-3.645-.65a5 5 0 0 1-4.024-3.942L23.75 35l-1.081 5.408z" fill="#fff"></path></svg>
                        <span className="xs:ml-2 font-bold xs:truncate">Get matches now</span>
                    </button>
                    <button className="xs:mt-2">
                        <span>Free trial • Cancel anytime</span>
                    </button>
                </div>

                <div className="xs:flex-col xs:flex xs:mt-24 xs:mx-3">
                    <div className="xs:justify-center xs:flex">
                        <img className="w-10" src="https://cdn.arc.dev/images/client-landing/sparkle.svg" aria-hidden="true" />
                    </div>
                    <div className="relative lg:text-5xl xs:mx-auto xs:font-bold mmd:mx-14 mmd:text-4xl xs:text-3xl xs:text-center">
                        <div>Perfect matches at lightning speed with your personal AI recruiter</div>
                    </div>
                </div>

                <div className="relative xs:mx-4 xs:mt-10 ">
                    <div className="bg-white text-black xs:p-6 rounded-2xl">
                        <div className="xs:flex xs:flex-col md:grid md:grid-cols-3 md:justify-items-center lg:justify-items-start">
                            <div className="md:border-r-2 lg:border-r-0">
                                <p className="xs:font-bold xs:text-3xl md:w-1/12 lg:w-full">75% faster</p>
                                <p>to fill open roles</p>
                            </div>
                            <div className="xs:mt-6 md:relative md:bottom-6">
                                <p className="xs:font-bold xs:text-3xl">58% cost savings</p>
                                <p>vs hiring locally</p>
                            </div>
                            <div className="xs:mt-6 md:border-l-2 md:pl-6 md:relative md:bottom-6 lg:border-0">
                                <p className="xs:font-bold xs:text-3xl">800+ companies</p>
                                <p>have hired developers on Arc</p>
                            </div>
                        </div>
                        <div className="ssm:grid ssm:grid-cols-2 ssm:gap-10 xs:space-y-12 xs:flex xs:flex-col ssm:top-10 ssm:relative">
                            <div>
                                <img src="https://cdn.arc.dev/images/client-landing/save-time.svg" alt="" />
                                <div className="xs:font-bold xs:my-2 lg:text-xl">Save time</div>
                                <div>Instead of manually reviewing resumes, instantly find the best match candidates for you.</div>
                            </div>
                            <div className="ssm:relative ssm:bottom-10">
                                <img src="https://cdn.arc.dev/images/client-landing/accuracy.svg" alt="" />
                                <div className="xs:font-bold xs:my-2 lg:text-xl">Improve accuracy</div>
                                <div>Instead of manually reviewing resumes, instantly find the best match candidates for you.</div>
                            </div>
                            
                            <div>
                                <img src="https://cdn.arc.dev/images/client-landing/reduce-bias.svg" alt="" />
                                <div className="xs:font-bold xs:my-2 lg:text-xl">Reduce bias</div>
                                <div>Evaluate candidates with the same criteria to ensure fairness and reduce the impact of bias.</div>
                            </div>
                            
                            <div className="xs:pb-10">
                                <img src="https://cdn.arc.dev/images/client-landing/better-exp.svg" alt="" />
                                <div className="xs:font-bold xs:my-2 lg:text-xl">Better candidate experience</div>
                                <div>Streaming the candidate experience by quickly finding and reaching out to qualified ones.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xs:flex-col xs:flex xs:mt-24 xs:mx-3">
                    <div className="xs:justify-center xs:flex">
                        <img className="w-10" src="https://cdn.arc.dev/images/client-landing/sparkle.svg" aria-hidden="true" />
                    </div>
                    <div className="relative xs:mx-auto xs:font-bold xs:text-3xl xs:text-center">
                        <div className="xs:mt-2 mmd:text-4xl">Hear from our clients</div>
                    </div>
                </div>
                <div className="mmd:overflow-x-hidden xs:relative xs:overflow-x-scroll xs:px-4 sm:w-12/12 xs:py-8">
                    <div className="xs:inline-flex md:grid md:grid-cols-2 mmd:pl-4 mmd:gap-6 md:overflow-x-hidden xs:overflow-x-scroll">
                        <div className="decoration-slice xs:mt-10 xs:w-64 lg:w-full xxs:w-96">
                            <div className="xs:bg-white xs:text-black xs:p-4 xs:w-11/12 xs:rounded-r-2xl rounded-t-xl rounded-b-l-xl lg:w-full lg:p-8">Within a week of interviewing, I realized Arc bought me a lot of high quality developers. They've been some of the 
                                <span>best hires we've ever made.</span>
                            </div>
                            <div className="xs:flex xs:mt-4">
                                <div className="bg-purple-800 xs:h-10 xs:w-10 xs:flex xs:items-center xs:justify-center">
                                    <img src="https://cdn.arc.dev/images/client-landing/clients/hunter-mckinley.svg" alt="" />
                                </div>
                                <div className="xs:ml-4 xs:w-8/12">
                                    <p>Hunter McKinley</p>
                                    <p>Co-Founder & CEO @ Top ranking AI powered meeting recorder app</p>
                                </div>
                            </div>
                        </div>
                        <div className="decoration-slice xs:mt-10 xs:w-64 xxs:w-96 lg:w-full">
                            <div className=" lg:p-8 xs:bg-white xs:text-black xs:p-4 xs:w-11/12 xs:rounded-r-2xl rounded-t-xl rounded-b-l-xl">Within a week of interviewing, I realized Arc bought me a lot of high quality developers. They've been some of the 
                                <span>best hires we've ever made.</span>
                            </div>
                            <div className="xs:flex xs:mt-4">
                                <div className="bg-purple-800 xs:h-10 xs:w-10 xs:flex xs:items-center xs:justify-center">
                                    <img src="https://cdn.arc.dev/images/client-landing/clients/hunter-mckinley.svg" alt="" />
                                </div>
                                <div className="xs:ml-4 xs:w-8/12">
                                    <p>Hunter McKinley</p>
                                    <p>Co-Founder & CEO @ Top ranking AI powered meeting recorder app</p>
                                </div>
                            </div>
                        </div>
                        <div className="decoration-slice xs:mt-10 xs:w-64 xxs:w-96 lg:w-full">
                            <div className=" lg:p-8 xs:bg-white xs:text-black xs:p-4 xs:w-11/12 lg:w-full xs:rounded-r-2xl rounded-t-xl rounded-b-l-xl">Within a week of interviewing, I realized Arc bought me a lot of high quality developers. They've been some of the 
                                <span>best hires we've ever made.</span>
                            </div>
                            <div className="xs:flex xs:mt-4">
                                <div className="bg-purple-800 xs:h-10 xs:w-10 xs:flex xs:items-center xs:justify-center">
                                    <img src="https://cdn.arc.dev/images/client-landing/clients/hunter-mckinley.svg" alt="" />
                                </div>
                                <div className="xs:ml-4 xs:w-8/12">
                                    <p>Hunter McKinley</p>
                                    <p>Co-Founder & CEO @ Top ranking AI powered meeting recorder app</p>
                                </div>
                            </div>
                        </div>
                        <div className="decoration-slice xs:mt-10 xs:w-64 xxs:w-96 lg:w-full">
                            <div className=" lg:p-8 xs:bg-white xs:text-black xs:p-4 xs:w-11/12 xs:rounded-r-2xl rounded-t-xl rounded-b-l-xl">Within a week of interviewing, I realized Arc bought me a lot of high quality developers. They've been some of the 
                                <span>best hires we've ever made.</span>
                            </div>
                            <div className="xs:flex xs:mt-4">
                                <div className="bg-purple-800 xs:h-10 xs:w-10 xs:flex xs:items-center xs:justify-center">
                                    <img src="https://cdn.arc.dev/images/client-landing/clients/hunter-mckinley.svg" alt="" />
                                </div>
                                <div className="xs:ml-4 xs:w-8/12">
                                    <p>Hunter McKinley</p>
                                    <p>Co-Founder & CEO @ Top ranking AI powered meeting recorder app</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xs:relative xs:flex xs:mt-14 xs:space-x-1.5 xxs:space-x-8 xs:items-center">
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/fivestars.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/hopper.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/hims.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/floyd.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/automattic.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/ask-wonder.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/invoice2go.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/wespire.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/udacity.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/mynd.svg" alt="" className="xs:h-10"/>
                    <img src="https://cdn.arc.dev/images/client-landing/company-logos/wefunder.svg" alt="" className="xs:h-10"/>
                </div>

                <div className="xs:mt-12 xs:mx-7 md:w-full md:mt-24 md:ml-0 xxs:mx-16 relative ssm:mx-24" id="tytyty">
                    <button className="xs:flex md:w-4/12 lg:w-3/12 md:mx-auto xs:w-full rounded-lg xs:justify-center xs:p-4 bg-purple-600">
                        <svg width="25" height="25" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.707 18.897a5 5 0 0 0 3.802-4.115L15 5l1.49 9.782a5 5 0 0 0 3.803 4.115L25 20l-4.707 1.103a5 5 0 0 0-3.802 4.115L15 35l-1.49-9.782a5 5 0 0 0-3.803-4.115L5 20l4.707-1.103zm24.054 8.821a5 5 0 0 0 3.694-4.159L40 5l2.545 18.56a5 5 0 0 0 3.694 4.158L55 30l-8.761 2.282a5 5 0 0 0-3.694 4.159L40 55l-2.545-18.56a5 5 0 0 0-3.694-4.158L25 30l8.761-2.282zm-11.093 12.69a5 5 0 0 1-4.023 3.941L15 45l3.645.65a5 5 0 0 1 4.024 3.942L23.75 55l1.081-5.408a5 5 0 0 1 4.024-3.941L32.5 45l-3.645-.65a5 5 0 0 1-4.024-3.942L23.75 35l-1.081 5.408z" fill="#fff"></path></svg>
                        <span className="xs:ml-4 xs:font-bold">Hire developers</span>
                    </button>
                    <button className="xs:mx-auto xs:mt-3 w-full">
                        <span>Free trial Cancel anytime</span>
                    </button>
                </div>

                
                <div className="xs:flex-col xs:flex xs:mt-24 xs:mx-3">
                    <div className="xs:justify-center xs:flex">
                        <img className="w-10" src="https://cdn.arc.dev/images/client-landing/sparkle.svg" aria-hidden="true" />
                    </div>
                    <div className="relative xs:mx-auto xs:font-bold xs:text-3xl xs:text-center">
                        <div className="xs:mt-2 md:text-4xl">How to use Arc</div>
                    </div>
                </div>
                <div className="lg:grid lg:grid-cols-2 lg:mt-14 lg:space-x-2 lg:w-10/12 lg:mx-auto">
                    <div className="lg:w-10/12 relative md:w-6/12 md:mt-14 lg:mt-0 md:mx-auto xs:border-4 xs:p-6 xs:mx-4 xs:mt-10 rounded-2xl">
                    <div className="xs:flex xs:items-center">
                        <img src="https://cdn.arc.dev/images/client-landing/hire-ai.png" alt="" className="xs:h-7"/>
                        <span className="xs:font-bold xs:w-5/12 xs:ml-3">Instant AI matches</span>
                    </div>
                    <div className="xs:mt-7">
                        <h1 className="xs:font-bold xs:text-4xl xs:mb-6">Full-time hires</h1>
                        <ul id="uuuul">
                            <li>AI shortlist of top matched candidates</li>
                            <li>Post job to reach 300,000+ developers</li>
                            <li>Hire faster with curated candidates</li>
                        </ul>
                    </div>
                    <div className="xs:mt-12">
                        <button className="xs:p-4 xs:rounded-lg xs:bg-purple-600 xs:w-full">Hire full-time developers</button>
                        <button className="xs:p-4 xs:w-full">Free trial Cancel anytime</button>
                    </div>
                    </div>
                
                    <div className="relative lg:w-10/12 md:w-6/12 md:mx-auto lg:mt-0 xs:border-4 xs:p-6 xs:mx-4 xs:mt-10 rounded-2xl">
                    <div className="xs:flex xs:items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M0 0h24v24H0z"></path>
                                <path fill="#231815" fill-rule="nonzero" d="M13.2 2.7l2.3 5 5.4.8c1 .2 1.5 1.4.7 2.2l-3.9 4.1.9 5.7c.2 1.1-1 1.9-1.9 1.3L12 19.2l-4.7 2.6c-.9.5-2.1-.3-1.9-1.3l.9-5.7-3.9-4.1c-.7-.8-.3-2 .7-2.2l5.4-.8 2.3-5c.5-.9 1.9-.9 2.4 0z"></path>
                            </g>
                        </svg>
                        <h1 className="xs:font-bold xs:w-8/12 xs:ml-3">Hand-picked for you</h1>
                    </div>
                    <div className="xs:mt-7">
                        <h1 className="xs:font-bold xs:text-4xl xs:mb-6">Freelance hires</h1>
                        <ul id="uuuul">
                            <li>Top 2% of developers, fully vetted</li>
                            <li>Hire top freelancers in 72 hours</li>
                            <li>Pay per hour</li>
                        </ul>
                    </div>
                    <div className="relative xs:mt-10">
                        <button className="xs:p-4 xs:w-full bg-white rounded-lg text-black">
                            <span>Hire freelance developers</span>
                        </button>
                        <button className="xs:p-3 xs:text-center xs:w-full">
                            <span>Risk free trial</span>
                        </button>
                    </div>
                    
                    </div>
                </div>
                <div className="lg:mt-40 md:text-4xl mmd:mx-4 xs:mt-20 xs:mb-10 xs:text-center xxs:text-3xl xs:font-bold xs:text-2xl">
                    <h1>Arc is the AI-powered remote jobs marketplace for software developers</h1>
                </div>
                <div className="relative xs:mx-4 xs:mt-24">
                    <div className="inline-flex xs:overflow-x-hidden w-full md:space-x-6">
                        <div className="relative py-8 pb-0">
                            <div className="xs:w-64 xxs:w-full md:w-96">
                                <img src="https://cdn.arc.dev/images/client-landing/developers/Forrest.jpg" alt="" className="z-100 rounded-full xs:h-20 border-2 absolute xs:right-3 xxs:right-6 -top-0 ssm:right-6"/>
                                <div className="border-2 rounded-xl xs:p-4 xs:text-md">
                                <div>
                                    <p className="xs:font-bold">Name</p>
                                    <p className="xs:font-bold">Skill Name</p>
                                </div>
                                <div className="xs:mt-6">
                                    <p>skills</p>
                                    <div className="xs:mt-5 xs:space-x-2">
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">Node.js</span>
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">Ruby on Rail</span>
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">JavaScripts</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative py-8 pb-0">
                            <div className="xs:w-64 xxs:w-full md:w-96">
                                <img src="https://cdn.arc.dev/images/client-landing/developers/Forrest.jpg" alt="" className="z-100 rounded-full xs:h-20 border-2 absolute xs:right-3 xxs:right-6 -top-0 ssm:right-6"/>
                                <div className="border-2 rounded-xl xs:p-4 xs:text-md">
                                <div>
                                    <p className="xs:font-bold">Name</p>
                                    <p className="xs:font-bold">Skill Name</p>
                                </div>
                                <div className="xs:mt-6">
                                    <p>skills</p>
                                    <div className="xs:mt-5 xs:space-x-2">
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">Node.js</span>
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">Ruby on Rail</span>
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">JavaScripts</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative py-8 pb-0">
                            <div className="xs:w-64 xxs:w-full md:w-96">
                                <img src="https://cdn.arc.dev/images/client-landing/developers/Forrest.jpg" alt="" className="z-100 rounded-full xs:h-20 border-2 absolute xs:right-3 xxs:right-6 -top-0 ssm:right-6"/>
                                <div className="border-2 rounded-xl xs:p-4 xs:text-md">
                                <div>
                                    <p className="xs:font-bold">Name</p>
                                    <p className="xs:font-bold">Skill Name</p>
                                </div>
                                <div className="xs:mt-6">
                                    <p>skills</p>
                                    <div className="xs:mt-5 xs:space-x-2">
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">Node.js</span>
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">Ruby on Rail</span>
                                        <span className="xs:p-2 xs:py-1 xs:bg-gray-600">JavaScripts</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
<div className="lg:mt-20 lg:w-10/12 lg:mx-auto">
                <div className="relative xs:mt-14">
                    <div className="">
                        <h1 className="xs:text-xl xs:text-center xxs:text-2xl xxs:font-bold md:text-3xl">Find top remote developers today</h1>
                    </div>
                    <div className="xs:mt-10 xs:mb-10 xxs:w-80 xxs:mx-auto md:grid md:grid-cols-2 md:w-11/12">
                        <div className="xs:flex md:flex md:items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.172 9.173A.3.3 0 0 0 16.9 9h-3.555l3.509-5.54A.3.3 0 0 0 16.6 3h-4.8a.3.3 0 0 0-.268.166l-4.5 9a.3.3 0 0 0 .268.434h3.085l-3.361 7.984a.3.3 0 0 0 .506.31l9.6-11.4a.3.3 0 0 0 .042-.32z" fill="#333"></path>
                            </svg>
                            <span className="xs:text-sm xxs:text-md md:text-lg">300,000+ remote developers worldwide</span>
                        </div>
                        
                        <div className="xs:flex md:flex md:items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.172 9.173A.3.3 0 0 0 16.9 9h-3.555l3.509-5.54A.3.3 0 0 0 16.6 3h-4.8a.3.3 0 0 0-.268.166l-4.5 9a.3.3 0 0 0 .268.434h3.085l-3.361 7.984a.3.3 0 0 0 .506.31l9.6-11.4a.3.3 0 0 0 .042-.32z" fill="#333"></path>
                            </svg>
                            <span className="xs:text-sm md:text-lg">Diverse developers from 190+ countries</span>
                        </div>
                        <div className="xs:flex md:flex md:items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.172 9.173A.3.3 0 0 0 16.9 9h-3.555l3.509-5.54A.3.3 0 0 0 16.6 3h-4.8a.3.3 0 0 0-.268.166l-4.5 9a.3.3 0 0 0 .268.434h3.085l-3.361 7.984a.3.3 0 0 0 .506.31l9.6-11.4a.3.3 0 0 0 .042-.32z" fill="#333"></path>
                            </svg>
                            <span className="xs:text-sm md:text-lg">Experts covering 170+ technical skills</span>
                        </div>
                        
                        <div className="xs:flex md:flex md:items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.172 9.173A.3.3 0 0 0 16.9 9h-3.555l3.509-5.54A.3.3 0 0 0 16.6 3h-4.8a.3.3 0 0 0-.268.166l-4.5 9a.3.3 0 0 0 .268.434h3.085l-3.361 7.984a.3.3 0 0 0 .506.31l9.6-11.4a.3.3 0 0 0 .042-.32z" fill="#333"></path>
                            </svg>
                            <span className="xs:text-sm md:text-lg">Full-time and freelance hiring</span>
                        </div>
                    </div>
                </div>

                <div className="relative xs:flex xs:flex-col xs:mx-8 xxs:mx-4">
                    <div className="md:grid md:grid-cols-3 relative xs:space-y-4 xxs:grid xxs:grid-cols-2 xxs:gap-5" id="eeeyy">
                        <button className="xxs:truncate xs:w-full xxs:pl-2 xs:space-x-3 xs:flex xs:p-2 xs:items-center bg-slate-500 rounded-lg xs:px-8 border-2 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Back-End</span>
                        </button >
                        <button className="xxs:truncate xs:w-full xs:space-x-3 xxs:pl-2 xs:flex xs:p-2 xs:items-center bg-slate-500 rounded-lg border-2 xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" className=""/>
                            <span>Front-End</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xs:space-x-3 xs:flex xxs:pl-2 xs:p-2 bg-slate-500 xs:items-center rounded-lg border-2 xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Full-stack</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xs:space-x-3 xs:flex xxs:pl-2 xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Angular</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xs:space-x-3 xs:flex xxs:pl-2 xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>C#</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xs:space-x-3 xxs:pl-2 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Go (Golang)</span>
                        </button>
                        <button className="xxs:truncate xxs:justify-start xs:w-full xxs:pl-2 xs:space-x-3 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>iOS</span>
                        </button>
                        <button className="xxs:truncate xxs:justify-start xs:w-full xxs:pl-2 xs:space-x-3 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Java</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xs:space-x-3 xs:flex xxs:pl-2 xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>JavaScript</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xs:space-x-3 xxs:pl-2 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Node.js</span>
                        </button>                    
                        <button className="xxs:truncate xs:w-full xs:space-x-3 xs:flex xxs:pl-2 xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>PHP</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xxs:pl-2 xs:space-x-3 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Python</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xxs:pl-2 xs:space-x-3 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>React</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xxs:pl-2 xs:space-x-3 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>React Native</span>
                        </button>
                        <button className="xxs:truncate xs:w-full xxs:pl-2 xs:space-x-3 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Ruby on Rails</span>
                        </button>
                        <button className="xs:w-full xs:space-x-3 xxs:pl-2 xs:flex xs:p-2 bg-slate-500 rounded-lg border-2 xs:items-center xs:px-8 xxs:px-0">
                            <img src="https://da2f8uix4p8om.cloudfront.net/20221122cwefl79xwa/categories/frontend-plain.svg" alt="" />
                            <span>Switft</span>
                        </button>
                    </div>
                </div>

                </div>

                <div className="lg:w-6/12 lg:mx-auto relative xs:mt-24 xs:mx-8 space-y-4 xxs:mx-20 ssm:mx-24">
                    <div className="md:space-y-4 md:flex md:space-x-4">
                    <button className="xs:flex xs:items-center bg-purple-700 p-3 xs:w-full xs:justify-center rounded-md">
                        <svg width="25" height="25" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.707 18.897a5 5 0 0 0 3.802-4.115L15 5l1.49 9.782a5 5 0 0 0 3.803 4.115L25 20l-4.707 1.103a5 5 0 0 0-3.802 4.115L15 35l-1.49-9.782a5 5 0 0 0-3.803-4.115L5 20l4.707-1.103zm24.054 8.821a5 5 0 0 0 3.694-4.159L40 5l2.545 18.56a5 5 0 0 0 3.694 4.158L55 30l-8.761 2.282a5 5 0 0 0-3.694 4.159L40 55l-2.545-18.56a5 5 0 0 0-3.694-4.158L25 30l8.761-2.282zm-11.093 12.69a5 5 0 0 1-4.023 3.941L15 45l3.645.65a5 5 0 0 1 4.024 3.942L23.75 55l1.081-5.408a5 5 0 0 1 4.024-3.941L32.5 45l-3.645-.65a5 5 0 0 1-4.024-3.942L23.75 35l-1.081 5.408z" fill="#fff"></path></svg>
                        <span className="xs:ml-2 font-bold">Hire developers</span>
                    </button>
                    <button className="xs:flex xs:items-center border-2 p-3 xs:w-full xs:justify-center rounded-md">
                        <span className="xs:font-bold">Find remote jobs</span>
                    </button>
                    </div>
                    <div>
                    <button className="xs:text-center xs:w-full">
                        <span>Free trial Cancel anytime</span>
                    </button>
                    </div>
                </div>
                <div className="relative xs:mt-24 xs:text-center xs:w-full">
                    <div>
                        <h1 className="uppercase xs:font-bold">Brand</h1>
                    </div>
                    <div>
                        <h1 className="text-slate-200 xs:font-bold">Arc</h1>
                        <span className="xs:text-center">Help employer find developers for remote jobs</span>
                    </div>
                    <div>
                        <h1 className="text-slate-200 xs:font-bold">Codementor</h1>
                        <span className="">Find a mentor to help you in real time</span>
                    </div>
                </div>
                
                <div className="relative xs:mt-14 xs:mx-8 space-y-12 xxs:space-y-6 xs:pb-12">
                    <h1 className="uppercase xs:w-full xs:text-center xs:font-bold">Top Developers</h1>
                    <div className="md:flex md:flex-row md:space-x-12 md:justify-center xs:text-center text-slate-200 xs:space-y-4 xxs:flex xxs:flex-col xxs:space-y-2">
                        <div className="xs:text-center text-slate-200 xs:space-y-4 xxs:flex xxs:flex-col xxs:space-y-2">
                            <a href="/" hrefLang="en">Angular Developers</a>
                            <a href="/" hrefLang="en">Back-End Developers</a>
                            <a href="/" hrefLang="en">C# Developers</a>
                            <a href="/" hrefLang="en">DevOps Developers</a>
                            <a href="/" hrefLang="en">Django Developers</a>
                            <a href="/" hrefLang="en">Front-End Developers</a>
                            <a href="/" hrefLang="en">Full-Stack Developers</a>
                            <a href="/" hrefLang="en">Go (Golang) Developers</a>
                            <a href="/" hrefLang="en">GraphQL Developers</a>
                            <a href="/" hrefLang="en">iOS Developers</a>
                            <a href="/" hrefLang="en">Java Developers</a>
                            <a href="/" hrefLang="en">JavaScript Developers</a>
                            <a href="/" hrefLang="en">.NET Developers</a>
                            <a href="/" hrefLang="en">Node.js Developers</a>
                        </div>
                        <div className="xs:text-center text-slate-200 xs:space-y-4 xxs:flex xxs:flex-col xxs:space-y-2">
                            <a href="/" hrefLang="en">PHP Developers</a>
                            <a href="/" hrefLang="en">PostgreSQL Developers</a>
                            <a href="/" hrefLang="en">Python Developers</a>
                            <a href="/" hrefLang="en">R Developers</a>
                            <a href="/" hrefLang="en">React Developers</a>
                            <a href="/" hrefLang="en">Ruby on Rails Developers</a>
                            <a href="/" hrefLang="en">Shopify Developers</a>
                            <a href="/" hrefLang="en">SQL Developers</a>
                            <a href="/" hrefLang="en">Swift Developers</a>
                            <a href="/" hrefLang="en">Swift Developers</a>
                            <a href="/" hrefLang="en">Wordpress Developers</a>
                            <a href="/" hrefLang="en">Web Developers</a>
                            <a href="/" hrefLang="en">Vue.js Developers</a>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="uppercase xs:text-center xs:font-bold">Links</h1>
                        <div className="xs:text-center xs:flex xs:flex-col xs:space-y-1">
                            <a className="text-slate-200" href="" hrefLang="">About Us</a>
                            <a className="text-slate-200" href="" hrefLang="">Pricing</a>
                            <a className="text-slate-200" href="" hrefLang="">Arc Career - Hiring Now!</a>
                            <a className="text-slate-200" href="" hrefLang="">Hire Full-Time Developers</a>
                            <a className="text-slate-200" href="" hrefLang="">Hire Freelance Developers</a>
                            <a className="text-slate-200" href="" hrefLang="">Development Services</a>
                            <a className="text-slate-200" href="" hrefLang="">Employer Blog</a>
                            <a className="text-slate-200" href="" hrefLang="">Freelance Developer Rates</a>
                            <a className="text-slate-200" href="" hrefLang="">Remote Team Game</a>
                            <a className="text-slate-200" href="" hrefLang="">Frequently Asked Question (FAQS)</a>
                            <a className="text-slate-200" href="" hrefLang="">Arc Newsletter</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;