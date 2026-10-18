import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />

            <div className="text-block">
                <h2>NodeCraft</h2>
                <br />
                <p>
                    NodeCraft is a real-time, AI-powered workspace for designing
                    software systems. It allows users to describe an architecture
                    in plain English, generate diagrams using AI, collaborate with
                    others on a shared canvas, and turn the final architecture into
                    a downloadable technical specification.
                </p>

                <br />

                <p>
                    The platform combines Google Gemini with Trigger.dev to generate
                    architecture diagrams through AI-powered background workflows.
                    React Flow provides the interactive canvas, while Liveblocks
                    enables real-time multiplayer collaboration with live cursors
                    and presence. Project data is managed with PostgreSQL and Prisma,
                    with Clerk handling authentication and protected routes.
                </p>

                <br />

                <h3>Tech Stack:</h3>
                <ul>
                    <li>
                        <p><b>Next.js</b> - Full-stack React framework</p>
                    </li>
                    <li>
                        <p><b>TypeScript</b> - Type-safe application development</p>
                    </li>
                    <li>
                        <p><b>Google Gemini</b> - AI-powered architecture generation</p>
                    </li>
                    <li>
                        <p><b>React Flow</b> - Interactive system architecture canvas</p>
                    </li>
                    <li>
                        <p><b>Liveblocks</b> - Real-time multiplayer collaboration</p>
                    </li>
                    <li>
                        <p><b>Trigger.dev</b> - Durable AI background workflows</p>
                    </li>
                    <li>
                        <p><b>PostgreSQL & Prisma</b> - Database and ORM</p>
                    </li>
                </ul>

                <br />

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://nodecraft-ai.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - nodecraft-ai.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/VishalVab01/nodecraft-ai"
                        >
                            <p>
                                <b>[GitHub]</b> - NodeCraft Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>ResumePilot</h2>
                <br />
                <p>
                    ResumePilot helps job seekers tailor their preparation to a target
                    role. Users can upload a resume or provide a self-description,
                    then add a job description to get an AI-generated match score,
                    skill-gap analysis, interview questions, and a personalized
                    preparation roadmap.
                </p>

                <br />

                <p>
                    The platform also generates a resume tailored to the selected job
                    description and exports it as a PDF. It combines a React frontend
                    with an Express API, JWT authentication, MongoDB storage, and
                    Google Gemini for AI analysis and content generation.
                </p>

                <br />

                <h3>Tech Stack:</h3>
                <ul>
                    <li>
                        <p><b>React.js & Vite</b> - Frontend application and development tooling</p>
                    </li>
                    <li>
                        <p><b>SCSS</b> - Responsive interface styling</p>
                    </li>
                    <li>
                        <p><b>Node.js & Express.js</b> - Backend API</p>
                    </li>
                    <li>
                        <p><b>MongoDB</b> - User profiles and application data</p>
                    </li>
                    <li>
                        <p><b>JWT</b> - User authentication</p>
                    </li>
                    <li>
                        <p><b>Google Gemini API</b> - Resume and job analysis, interview prep, and tailored content</p>
                    </li>
                    <li>
                        <p><b>Puppeteer</b> - PDF resume generation</p>
                    </li>
                </ul>

                <br />

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/VishalVab01/ResumePilot"
                        >
                            <p>
                                <b>[GitHub]</b> - ResumePilot Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>CivicPulse AI</h2>
                <br />
                <p>
                    CivicPulse AI is a civic-tech platform for reporting and
                    resolving hyperlocal issues such as potholes, water leaks,
                    overflowing garbage, and broken streetlights. Citizens submit an
                    image, description, and location; AI analyzes the report, checks
                    for nearby duplicates, and places issues on a live map and public
                    timeline.
                </p>

                <br />

                <p>
                    Community members can verify reports or mark them fixed, while
                    administrators prioritize and assign issues, generate department
                    notes, and track impact through analytics. Demo City Mode includes
                    more than 40 sample reports.
                </p>

                <br />

                <h3>Tech Stack:</h3>
                <ul>
                    <li>
                        <p><b>Next.js, React & TypeScript</b> - Full-stack application</p>
                    </li>
                    <li>
                        <p><b>Google Gemini</b> - Civic issue analysis and department notes</p>
                    </li>
                    <li>
                        <p><b>MongoDB & Mongoose</b> - Data persistence</p>
                    </li>
                    <li>
                        <p><b>Leaflet & OpenStreetMap</b> - Interactive issue map</p>
                    </li>
                    <li>
                        <p><b>Recharts</b> - Civic impact analytics</p>
                    </li>
                    <li>
                        <p><b>Tailwind CSS</b> - Responsive styling</p>
                    </li>
                </ul>

                <br />

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/VishalVab01/CivicPulseAI"
                        >
                            <p>
                                <b>[GitHub]</b> - CivicPulse AI Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Watchparty</h2>
                <br />
                <p>
                    Watchparty is a room-based app for watching YouTube videos
                    together. Hosts create rooms and share an invite link or code,
                    while playback and video position stay synchronized for everyone.
                    Participants can request playback or video changes for a Host or
                    Moderator to approve.
                </p>

                <br />

                <p>
                    Each room includes role-based controls, a live participant list,
                    real-time chat, and emoji reactions. The server validates member
                    permissions and keeps room, playback, and pending-request data in
                    PostgreSQL.
                </p>

                <br />

                <h3>Tech Stack:</h3>
                <ul>
                    <li>
                        <p><b>React & TypeScript</b> - Room interface and client application</p>
                    </li>
                    <li>
                        <p><b>Vite</b> - Frontend development and build tooling</p>
                    </li>
                    <li>
                        <p><b>Node.js & Express</b> - API and application server</p>
                    </li>
                    <li>
                        <p><b>Socket.IO</b> - Real-time playback sync, presence, and chat</p>
                    </li>
                    <li>
                        <p><b>PostgreSQL & PGlite</b> - Persistent room data and local development database</p>
                    </li>
                    <li>
                        <p><b>Zod</b> - HTTP and socket event validation</p>
                    </li>
                    <li>
                        <p><b>GSAP & Lenis</b> - Interface and scroll animations</p>
                    </li>
                </ul>

                <br />

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://watchparty-fl0x.onrender.com/"
                        >
                            <p>
                                <b>[Live Demo]</b> - watchparty-fl0x.onrender.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/VishalVab01/watchparty"
                        >
                            <p>
                                <b>[GitHub]</b> - Watchparty Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Mosaic</h2>
                <br />
                <p>
                    Mosaic turns natural-language prompts, Figma links, and optional
                    reference images into responsive UI prototypes. It generates
                    static HTML, CSS, and JavaScript that users can preview live,
                    inspect, refine with follow-up prompts, and download as a ZIP.
                </p>

                <br />

                <p>
                    The platform uses Google Gemini for staged design generation and
                    includes authenticated accounts, a credit system, saved project
                    history, and a workspace for previewing and exporting generated
                    designs.
                </p>

                <br />

                <h3>Tech Stack:</h3>
                <ul>
                    <li>
                        <p><b>Next.js & React</b> - Full-stack application and user interface</p>
                    </li>
                    <li>
                        <p><b>TypeScript</b> - Type-safe application development</p>
                    </li>
                    <li>
                        <p><b>Google Gemini</b> - AI-powered UI generation</p>
                    </li>
                    <li>
                        <p><b>MongoDB</b> - User accounts, credits, and saved projects</p>
                    </li>
                    <li>
                        <p><b>NextAuth.js</b> - Credentials and OAuth authentication</p>
                    </li>
                    <li>
                        <p><b>Zod</b> - Request and generated output validation</p>
                    </li>
                </ul>

                <br />

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://mosaic-g682.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - mosaic-g682.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/VishalVab01/mosaic"
                        >
                            <p>
                                <b>[GitHub]</b> - Mosaic Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>Anga</h2>
                <br />
                <p>
                    Anga is an AI-powered local employment platform built to connect
                    daily-wage workers with nearby job opportunities and help customers
                    find trusted local workers. The platform focuses on making local
                    employment more accessible by bringing workers and customers into
                    one location-aware digital ecosystem.
                </p>

                <br />

                <p>
                    The platform includes dedicated worker and customer experiences
                    with job discovery, job posting, applications, profiles,
                    notifications, and role-based workflows. Workers can discover
                    opportunities based on location, skills, availability, and pay,
                    while customers can compare applicants and hire suitable workers.
                </p>

                <br />

                <p>
                    Anga also includes an AI Rozgar assistant that understands user
                    intent and matches workers with relevant nearby jobs. The assistant
                    supports English and Hindi/Hinglish commands, making the platform
                    more accessible to local users. Through the project, we created a
                    measurable impact in Bhagalpur by increasing employment opportunities
                    for local workers by <b>30%</b>.
                </p>

                <br />

                <h3>Tech Stack:</h3>
                <ul>
                    <li>
                        <p><b>React.js</b> - Worker and customer interfaces</p>
                    </li>
                    <li>
                        <p><b>Node.js & Express.js</b> - Backend APIs</p>
                    </li>
                    <li>
                        <p><b>MongoDB & Mongoose</b> - Data storage and modeling</p>
                    </li>
                    <li>
                        <p><b>JWT</b> - Authentication and role-protected routes</p>
                    </li>
                    <li>
                        <p><b>TanStack Router/Query</b> - Application routing and data management</p>
                    </li>
                    <li>
                        <p><b>Tailwind CSS</b> - Responsive user interface</p>
                    </li>
                    <li>
                        <p><b>AI Assistant</b> - Intent-aware job and worker matching</p>
                    </li>
                </ul>

                <br />

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://anga-six.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - anga-six.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/VishalVab01/anga"
                        >
                            <p>
                                <b>[GitHub]</b> - Anga Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>

            <ResumeDownload />
        </div>
    );
};

export default SoftwareProjects;
