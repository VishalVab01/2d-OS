import React from 'react';
import buildForGoodFinale from '../../assets/pictures/achievements/build-for-good-finale.jpeg';
import buildForGoodAwards from '../../assets/pictures/achievements/build-for-good-awards.jpeg';
import angaWebsite from '../../assets/pictures/achievements/anga-website.png';

export interface AchievementsProps {}

const Achievements: React.FC<AchievementsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Achievements</h1>
            <h2>Build for Good 2026 — National-Level Hackathon Finalist</h2>
            <br />
            <div className="text-block">
                <p>
                    Qualified for the Build for Good finale in Hubballi,
                    Karnataka, as part of Team Waffles. Our team placed among
                    India&apos;s top 20 teams and received a MacBook M1 Pro and
                    goodies in recognition of the achievement.
                </p>
            </div>
            <div className="captioned-image">
                <img
                    src={buildForGoodFinale}
                    alt="Team Waffles at the Build for Good finale in Hubballi"
                />
                <p>
                    <sub>
                        <b>Build for Good finale</b> — Hubballi, Karnataka
                    </sub>
                </p>
            </div>
            <div className="text-block">
                <h2>Anga</h2>
                <p>
                    Anga is a mobile-first, multilingual platform that connects
                    daily-wage and local-service workers with nearby customers.
                    The full-stack MVP includes worker and customer journeys,
                    role-based authentication, MongoDB-backed APIs, job
                    discovery and hiring flows, and an AI Rozgar assistant for
                    relevance-aware job and worker matching.
                </p>
                <br />
                <p>
                    <a
                        href="https://anga-six.vercel.app"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <b>LIVE DEMO</b> — anga-six.vercel.app
                    </a>
                </p>
                <p>
                    <a
                        href="https://github.com/VishalVab01/anga"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <b>GITHUB REPOSITORY</b> — github.com/VishalVab01/anga
                    </a>
                </p>
            </div>
            <div className="captioned-image">
                <img
                    src={angaWebsite}
                    alt="Anga website showing its local-work marketplace landing page"
                />
                <p>
                    <sub>
                        <b>Anga website</b> — local work and hiring platform
                    </sub>
                </p>
            </div>
            <div className="captioned-image">
                <img
                    src={buildForGoodAwards}
                    alt="MacBook M1 Pro and Build for Good event goodies"
                />
                <p>
                    <sub>
                        <b>Recognition</b> — MacBook M1 Pro and event goodies
                    </sub>
                </p>
            </div>
        </div>
    );
};

export default Achievements;
