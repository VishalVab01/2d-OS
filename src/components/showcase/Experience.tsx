import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Experience</h1>
            <h3>Professional Journey</h3>
            <br />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>LaunchedGlobal</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://launchedglobal.com/'}
                        >
                            <h4>www.launchedglobal.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Backend Developer</h3>
                        <b>
                            <p>June 2025 - July 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    LaunchedGlobal is a leading Indian ed-tech company that serves as a career accelerator 
                    for students and young professionals. Working as a Backend Developer, I contributed to 
                    building robust server-side solutions that powered the platform's core features and services.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed and optimized RESTful APIs using Node.js and Express.js to handle student 
                            enrollment, course management, and career tracking features, improving API response 
                            times by 30% through efficient database queries and caching strategies.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented authentication and authorization systems using JWT tokens and role-based 
                            access control (RBAC) to ensure secure access to platform resources for students, 
                            mentors, and administrators across different user roles.
                        </p>
                    </li>
                    <li>
                        <p>
                            Architected and integrated MongoDB database schemas for managing user profiles, course 
                            content, and progress tracking data, ensuring scalability and data integrity for a 
                            growing user base of students and professionals.
                        </p>
                    </li>
                </ul>
            </div>
            <br />
            <ResumeDownload />
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
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;
