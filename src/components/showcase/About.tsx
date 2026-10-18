import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import childhoodPhoto from '../../assets/pictures/childhood-computer.jpeg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Vishal Vaibhav</h3>
            <br />
            <div className="text-block">
                <p>
                    I&apos;m a software developer at WEB3TASK, building AI-enabled
                    products and scalable backend services. I focus on creating
                    reliable systems that perform well as they grow.
                </p>
                <br />
                <p>
                    Thanks for checking out my portfolio. I hope you enjoy
                    exploring it as much as I enjoyed building it. If you have
                    questions or comments, contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:whysoovishal@gmail.com">
                        whysoovishal@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    From a young age, I was fascinated by computers and technology.
                    My curiosity about how things worked, along with my love of
                    gaming, pushed me to explore the technology behind the games
                    and gadgets I used. My first exposure to programming came in
                    middle school, when I was introduced to Java; that early spark
                    grew into a lasting interest in coding and problem-solving.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={childhoodPhoto}
                        style={styles.childhoodImage}
                        alt="Vishal using a laptop as a child"
                    />
                    <p>
                        <sub>
                            <b>Childhood photo:</b> exploring computers from an early age
                        </sub>
                    </p>
                </div>

                <p>
                    I started programming seriously in my first year of college,
                    beginning with web scraping and interactive websites. I went
                    on to build passion projects such as chatbots, small games,
                    landing pages, and meme search engines. You can find many of
                    them on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> A photo of me developing this website
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    Building user interfaces led me to explore the systems behind
                    them. I expanded into backend engineering with Node.js and
                    Kotlin, REST APIs, databases, and AWS, and worked with
                    technologies such as Next.js, GSAP, Framer Motion, Three.js,
                    and WebGL. Today, I focus on AI-enabled products and on making
                    software reliable and scalable as it grows.
                </p>
                <br />
                <p>
                    I enjoy solving technical problems and keep sharpening my data
                    structures and algorithms skills through regular LeetCode
                    practice.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I enjoy cinematography, playing
                            cricket, cooking, and (unsurprisingly) video games.
                        </p>
                        <br />
                        <p>
                           In college, I was an active member of the Techvisor Club and held multiple positions in the chapter. I met a lot of amazing people through the club and thoroughly enjoyed the community.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.reducedImage} alt="" />
                        <p>
                            <sub>
                                <b>Figure 3:</b> Me, April 2022
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg, let me know through the
                    contact page. Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:whysoovishal@gmail.com">
                        whysoovishal@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    childhoodImage: {
        height: 'auto',
        width: '100%',
        maxWidth: 360,
    },
    reducedImage: {
        height: 'auto',
        width: '107%',
        maxHeight: '430px',
        objectFit: 'cover',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;

