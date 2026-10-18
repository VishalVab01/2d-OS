import React from 'react';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Experience</h1>
            <div style={styles.headerContainer}>
                <div style={styles.companyRow}>
                    <div style={styles.header}>
                        <h2>WEB3TASK</h2>
                        <p style={styles.role}>Full Stack Developer</p>
                    </div>
                </div>
            </div>
            <div className="text-block" style={styles.responsibilities}>
                <ul style={styles.responsibilityList}>
                    <li>
                        <p>
                            Developed and optimized Kotlin backend services for{' '}
                            <a
                                href="https://voicetonotes.ai/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <strong>VoicetoNotes</strong>
                            </a>, an app with{' '}
                            <strong>1M+ users</strong>, reducing average API response
                            time by <strong>~30% (450ms → 315ms)</strong> through
                            query optimization and caching.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built and shipped <strong>5+ REST API endpoints</strong>{' '}
                            for{' '}
                            <a
                                href="https://traversevpn.com/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <strong>Traverse VPN</strong>
                            </a>{' '}
                            (<strong>100k+ users</strong>)
                            in Kotlin, covering user session management and
                            subscription handling, with <strong>99.9% uptime</strong>{' '}
                            during rollout.
                        </p>
                    </li>
                    <li>
                        <p>
                            Diagnosed and fixed <strong>15+ production bugs</strong>{' '}
                            across both projects, improving backend stability and
                            cutting crash-related error rates by <strong>~20%</strong>.
                        </p>
                    </li>
                    <li>
                        <p>
                            Wrote unit and integration tests in Kotlin, raising
                            backend test coverage from <strong>~40% to ~70%</strong>,
                            and collaborated with a team of <strong>6+ engineers</strong>{' '}
                            in code reviews and agile sprints.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.companyRow}>
                    <div style={styles.header}>
                        <h2>Agumentik Softwares</h2>
                        <p style={styles.role}>Full Stack Developer Intern (MERN)</p>
                    </div>
                    <div style={styles.date}>
                        <p>May 2026 – July 2026</p>
                        <p>Completed</p>
                    </div>
                </div>
            </div>
            <div className="text-block" style={styles.responsibilities}>
                <ul style={styles.responsibilityList}>
                    <li>
                        <p>
                            Engineered and optimized core modules of SpeedCopy using
                            the MERN stack (MongoDB, Express.js, React.js, Node.js);
                            refactored Mongoose queries and implemented Redis caching,
                            reducing average API response time by 35% and page load
                            time by 40%.
                        </p>
                    </li>
                    <li>
                        <p>
                            Architected a full-stack EdTech CRM using the MERN stack
                            with a RESTful API layer and Mongoose schemas to manage
                            leads, student enrollments, and counselor workflows.
                        </p>
                    </li>
                    <li>
                        <p>
                            Implemented JWT-based authentication and role-based access
                            control (RBAC) to secure admin, counselor, and management
                            dashboards with permission-specific views.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built a responsive React.js and Redux frontend enabling
                            real-time lead status tracking, follow-up scheduling, and
                            enrollment pipeline management for the counseling team.
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
    },
    headerContainer: {
        width: '100%',
        marginTop: 20,
        borderBottom: '2px solid #1f1f1f',
        paddingBottom: 16,
    },
    companyRow: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 24,
    },
    role: {
        fontFamily: "MillenniumBold, 'Times New Roman', Times, serif",
        fontSize: 20,
        marginTop: 6,
    },
    date: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'right',
        whiteSpace: 'nowrap',
        fontFamily: "MillenniumBold, 'Times New Roman', Times, serif",
        fontSize: 17,
        lineHeight: 1.35,
    },
    responsibilities: {
        marginTop: 24,
        marginBottom: 0,
        textAlign: 'left',
    },
    responsibilityList: {
        margin: 0,
        paddingLeft: 28,
    },
};

export default Experience;
