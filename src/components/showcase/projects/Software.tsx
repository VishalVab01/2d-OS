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
                <h2>henryheffernan.com</h2>
                <br />
                <p>
                    henryheffernan.com is my portfolio website, and also the
                    website you are on right now. This project was an absolute
                    joy to make and challenged me both technically and
                    creatively. Early in 2022, I knew I wanted to make an
                    interactive portfolio to aid my job search. I eventually got
                    the idea for this site around early February and began
                    development early March. I've been developing it alongside
                    my last semester at school and if you are reading this, it's
                    pretty much done!
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Blender Scene of the 3D website.
                            The scene from Blender was baked and exported in a
                            GLTF format.
                        </sub>
                    </p>
                </div>
                <p>
                    Now, a quick technical breakdown of the site. The website is
                    split into two parts, the 3D site, and the 2D OS site. The
                    3D site uses Three.js to render the scene and renders the 2D
                    site inside of it using an iframe. The 2D OS site is a
                    simple react site that is hosted{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://henryheffernan.vercel.app/"
                    >
                        here
                    </a>{' '}
                    and works as a standalone web app. The actual rendering of
                    the 2D site is accomplished using a CSS renderer provided by
                    Three.js that transforms the html of the 2D site with 3D CSS
                    transforms to give the illusion of three dimensionality.
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
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future. To get updates with that
                    project feel free to follow me on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/henryheffernan"
                    >
                        @henryheffernan
                    </a>
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
            </div>
            <div className="text-block">
                <h2>Nimbus Keyboard</h2>
                <br />
                <p>
                    Nimbus Keyboard is not your average keyboard website—it's a full-stack, 3D immersive experience that 
                    pushes the boundaries of web development. Built with Next.js, Tailwind CSS, React Three Fiber for 
                    stunning 3D graphics, GSAP for smooth animations, and Node.js for the backend, this project showcases 
                    a complete end-to-end solution deployed on Vercel.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={nimbus} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Nimbus Keyboard 3D immersive website with interactive keyboard models.
                        </sub>
                    </p>
                </div>
                <p>
                    The website features interactive 3D keyboard models that users can explore, customize, and interact with 
                    in real-time. This project demonstrates my proficiency in modern web technologies, 3D graphics programming, 
                    and creating production-ready applications that deliver exceptional user experiences.
                </p>
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
