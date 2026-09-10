import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

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
                <h2>Interactive 3D Portfolio Website</h2>
                <br />
                <p>
                    This interactive 3D portfolio is a web-based experience designed
                    to push beyond the traditional portfolio format. Instead of a
                    conventional interface, the project places users inside an
                    interactive virtual desktop environment with real-time camera
                    interactions.
                </p>

                <br />

                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Interactive 3D portfolio environment
                            featuring a virtual desktop scene and embedded web
                            interface.
                        </sub>
                    </p>
                </div>

                <p>
                    The project combines Three.js, React.js, WebGL, and CSS3 to create
                    an immersive frontend experience. A React-based web OS is embedded
                    inside the 3D monitor using an iframe and CSS3D transforms,
                    allowing functional 2D web applications to run inside the
                    interactive 3D environment. WebGL rendering and asset optimization
                    were implemented to maintain smooth interactions and responsive
                    navigation.
                </p>

                <br />

                <h3>Tech Stack:</h3>
                <ul>
                    <li>
                        <p><b>Three.js</b> - 3D graphics and scene rendering</p>
                    </li>
                    <li>
                        <p><b>React.js</b> - Interactive web application</p>
                    </li>
                    <li>
                        <p><b>WebGL</b> - Hardware-accelerated 3D rendering</p>
                    </li>
                    <li>
                        <p><b>CSS3</b> - 3D transforms and responsive styling</p>
                    </li>
                </ul>

                <br />

                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://vishalvaibhavportfolio.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - vishalvaibhavportfolio.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/VishalVab01/3DOS"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Portfolio Repository
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

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;