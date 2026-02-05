export default function Overlay() {
    return (
        <main className="overlay">
            {/* Hero Section */}
            <section className="hero-section" style={{ height: '100vh', padding: '10vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ fontSize: '8vw', lineHeight: '0.9', fontWeight: 800, letterSpacing: '-0.05em' }}>
                    KARAN<br />
                    <span style={{ fontSize: '0.6em', fontWeight: 400, color: '#aaa' }}>BHARDWAJ</span>
                </h1>
                <p style={{ fontSize: '1.5rem', marginTop: '2rem', maxWidth: '600px', fontWeight: 300 }}>
                    Software Executive & Full-Stack Developer.<br />
                    <span style={{ opacity: 0.7 }}>Bridging the gap between functionality and discoverability.</span>
                </p>
            </section>

            {/* About Section */}
            <section className="about-section" style={{ padding: '10vw', minHeight: '80vh' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Professional Profile</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.8, maxWidth: '800px', marginBottom: '2rem' }}>
                    Based in <strong>Gurgaon, India</strong>, I specialize in building high-performance, commercially viable web ecosystems.
                    A 2025 Computer Science graduate from <strong>Galgotias University</strong>, I combine core software engineering with business-critical strategies like Technical SEO and Digital Visibility.
                </p>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.8, maxWidth: '800px' }}>
                    Unlike a standard developer who focuses solely on code execution, I build platforms that are optimized for search engine crawlers to ensure business growth.
                </p>
            </section>

            {/* Expertise Section */}
            <section className="expertise-section" style={{ padding: '10vw' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '5rem' }}>Core Pillars</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Business-First Developer</h3>
                        <p style={{ opacity: 0.7, lineHeight: '1.5' }}>
                            Intersection of Next.js and SEO. Leveraging SSR and dynamic sitemaps to ensure complex apps rank effectively.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Ecosystem Architect</h3>
                        <p style={{ opacity: 0.7, lineHeight: '1.5' }}>
                            Architecting dual-module digital ecosystems. Integrating E-commerce with community-driven social engagement.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Full-Cycle Delivery</h3>
                        <p style={{ opacity: 0.7, lineHeight: '1.5' }}>
                            Managing the entire SDLC. From client requirement analysis to final deployment, including cross-platform mobile apps.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Tech Stack Versatility</h3>
                        <p style={{ opacity: 0.7, lineHeight: '1.5' }}>
                            <strong>Frontend:</strong> Next.js, React, Tailwind, MUI<br />
                            <strong>Backend:</strong> Python (Flask), Node.js<br />
                            <strong>Automation:</strong> Voice CLI, Internal Tools
                        </p>
                    </div>
                </div>
            </section>

            {/* Technical Proficiency / Skills Section */}
            <section className="skills-section" style={{ padding: '5vw 10vw', background: 'rgba(255,255,255,0.02)' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Technical Proficiency</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', color: '#888', marginBottom: '1rem' }}>Languages</h4>
                        <p style={{ lineHeight: '1.6' }}>JavaScript (ES6+)<br />TypeScript<br />Python<br />C++<br />SQL</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', color: '#888', marginBottom: '1rem' }}>Frontend</h4>
                        <p style={{ lineHeight: '1.6' }}>React.js / Next.js<br />Redux / Context API<br />Tailwind CSS<br />Three.js / R3F<br />HTML5 / CSS3</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', color: '#888', marginBottom: '1rem' }}>Backend</h4>
                        <p style={{ lineHeight: '1.6' }}>Node.js / Express<br />Python (Flask)<br />RESTful APIs<br />GraphQL<br />MongoDB / MySQL</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', color: '#888', marginBottom: '1rem' }}>Tools & DevOps</h4>
                        <p style={{ lineHeight: '1.6' }}>Git / GitHub<br />Docker<br />AWS (EC2, S3)<br />CI/CD Pipelines<br />Agile / Scrum</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', color: '#888', marginBottom: '1rem' }}>Core Concepts</h4>
                        <p style={{ lineHeight: '1.6' }}>Data Structures & Algorithms<br />Object-Oriented Programming (OOP)<br />System Design Basics<br />Technical SEO<br />Web Performance</p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects-section" style={{ padding: '10vw' }}>
                <h2 style={{ fontSize: '4rem', marginBottom: '4rem', textAlign: 'right' }}>Selected Works</h2>

                <div className="project-item" style={{ marginBottom: '8rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>SOCIOGLAMM</h3>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '1rem' }}>Mediaxpedia Technologies</p>
                    <p style={{ opacity: 0.6, maxWidth: '600px', lineHeight: '1.5' }}>
                        A complex platform integrating brand advertising E-commerce with community-driven social engagement (videos & reels). Managed complex state logic optimized for user retention.
                    </p>
                </div>

                <div className="project-item" style={{ marginBottom: '8rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>CARSNBIKE</h3>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '1rem' }}>Automotive Listing Platform</p>
                    <p style={{ opacity: 0.6, maxWidth: '600px', lineHeight: '1.5' }}>
                        Engineered a dynamic listing platform with location-based filtering. Demonstrated expertise in handling large datasets and scalable CMS.
                    </p>
                </div>

                <div className="project-item" style={{ marginBottom: '8rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>HEALTHCARE APP</h3>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '1rem' }}>React Native Mobile Application</p>
                    <p style={{ opacity: 0.6, maxWidth: '600px', lineHeight: '1.5' }}>
                        Built a cross-platform mobile application for doctor appointment scheduling.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section" style={{ height: '80vh', padding: '10vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <p style={{ marginBottom: '2rem', opacity: 0.5 }}>Ready to build something scalable?</p>
                    <h2 style={{ fontSize: '5rem', marginBottom: '2rem' }}>Let's Talk</h2>
                    <a href="mailto:hello@example.com" style={{ fontSize: '2rem', color: 'inherit', textDecoration: 'none', borderBottom: '1px solid white', paddingBottom: '5px' }}>
                        Get in Touch
                    </a>
                </div>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="https://www.linkedin.com/in/karan-bhardwaj-849296227/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>LinkedIn</a>
                    <a href="https://github.com/karanOnGit" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>GitHub</a>
                    <a href="https://www.behance.net/karanbhardwaj13" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Behance</a>
                    <a href="https://www.instagram.com/reely_karan/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', opacity: 0.7 }}>Instagram</a>
                </div>
            </section>
        </main>
    )
}