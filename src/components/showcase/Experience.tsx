import React from 'react';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Experience</h1>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Agumentik Softwares</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Full Stack Developer Intern (MERN)</h3>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>Working on full-stack web development using the MERN stack.</p>
                    </li>
                    <li>
                        <p>Building and improving responsive web applications and APIs.</p>
                    </li>
                    <li>
                        <p>
                            Gaining hands-on experience with React.js, Node.js, Express.js,
                            and MongoDB.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborating with the development team and following modern
                            development workflows.
                        </p>
                    </li>
                    <li>
                        <p>
                            Enhancing problem-solving and software development skills through
                            real-world projects.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};


const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
};

export default Experience;
