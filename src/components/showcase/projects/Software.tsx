import React from 'react';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import nothing from '../../../assets/pictures/projects/software/nothing.mp4';
// @ts-ignore
import nimbus from '../../../assets/pictures/projects/software/nimbus.mp4';
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
                <h2>NOT Your Average Portfolio</h2>
                <br />
                <p>
                    NOT Your Average Portfolio is an innovative, interactive portfolio experience that pushes the boundaries 
                    of web development. This isn't just another portfolio site—it's a fully immersive 3D environment combined 
                    with a retro OS interface that showcases creativity and technical excellence. This project was an absolute 
                    joy to make and challenged me both technically and creatively, demonstrating my ability to blend modern 
                    web technologies with unique design concepts.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> 3D immersive portfolio scene created in Blender.
                            The scene was meticulously baked and exported in GLTF format for optimal web performance.
                        </sub>
                    </p>
                </div>
                <p>
                    The technical architecture is sophisticated yet elegant. The portfolio features a dual-interface system: 
                    a stunning 3D environment powered by Three.js that seamlessly integrates a retro-inspired 2D OS interface. 
                    The 3D scene renders the OS interface inside it using an iframe, creating a unique nested experience. 
                    The OS interface is a fully functional React application that works both as a standalone site and as part 
                    of the 3D experience. The magic happens through Three.js's CSS renderer, which applies 3D CSS transforms 
                    to the HTML elements, creating authentic three-dimensional depth and perspective.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.com"
                        >
                            <p>
                                <b>[3D Site]</b> - henryheffernan.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - henryheffernan.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-website"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/henryjeff/portfolio-inner-site"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    This project showcases advanced front-end engineering, 3D graphics programming, and creative problem-solving. 
                    It demonstrates proficiency in modern web technologies while delivering an unforgettable user experience 
                    that stands out in today's competitive landscape. The combination of technical sophistication and creative 
                    design makes this portfolio truly one-of-a-kind.
                </p>
            </div>
            <div className="text-block">
                <h2>Nothing Reimagined</h2>
                <br />
                <p>
                    Nothing Reimagined is a creative rework of the Nothing brand in the form of a modern, immersive website. 
                    This project showcases my ability to blend cutting-edge web technologies with stunning visual design. 
                    Built using React, Tailwind CSS, GSAP for smooth animations, and Framer Motion for interactive elements, 
                    the site delivers a premium user experience that captures the essence of the Nothing brand's minimalist 
                    and innovative philosophy.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nothing} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Nothing Reimagined website showcase featuring smooth animations and modern design.
                        </sub>
                    </p>
                </div>
                <p>
                    The project demonstrates advanced front-end development techniques including complex animation sequences, 
                    responsive design patterns, and performance optimization. Every interaction has been carefully crafted to 
                    provide a seamless and engaging experience that reflects the quality and innovation associated with the 
                    Nothing brand.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://nothing-reimagined.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - nothing-reimagined.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yourusername/nothing-reimagined"
                        >
                            <p>
                                <b>[GitHub]</b> - Nothing Reimagined Repository
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="text-block">
                <h2>SwitchLab</h2>
                <br />
                <p>
                    SwitchLab is not your average keyboard website—it's a full-stack, 3D immersive experience that 
                    pushes the boundaries of web development. Built with Next.js, Tailwind CSS, React Three Fiber for 
                    stunning 3D graphics, GSAP for smooth animations, and Node.js for the backend, this project showcases 
                    a complete end-to-end solution deployed on Vercel.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nimbus} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> SwitchLab 3D immersive website with interactive keyboard models.
                        </sub>
                    </p>
                </div>
                <p>
                    The website features interactive 3D keyboard models that users can explore, customize, and interact with 
                    in real-time. This project demonstrates my proficiency in modern web technologies, 3D graphics programming, 
                    and creating production-ready applications that deliver exceptional user experiences.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://switchlab.vercel.app/"
                        >
                            <p>
                                <b>[Live Demo]</b> - switchlab.vercel.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/yourusername/switchlab"
                        >
                            <p>
                                <b>[GitHub]</b> - SwitchLab Repository
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
