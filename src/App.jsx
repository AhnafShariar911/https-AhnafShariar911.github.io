const sections = [
  {
    id: 'about',
    heading: 'About Me',
    content: `I am Md. Shariar Sheikh Hridoy, a developer with experience in C++, Java, C#, HTML basics, and Microsoft Office. I build practical applications and systems with a focus on clear code and reliable results.`,
  },
  {
    id: 'projects',
    heading: 'Projects',
    content: `These are some of my main projects. I built desktop and management systems using Java, C++, and C# for real-world workflows.`,
    projects: [
      {
        title: 'Hospital Management System',
        description: 'A complete hospital management application built in Java. It handles patient records, appointment scheduling, and basic medical administration.',
        link: '#',
      },
      {
        title: 'Coaching Academy Management System',
        description: 'A C# system designed to manage coaching academy operations, including student records, course management, and fee tracking.',
        link: '#',
      },
      {
        title: 'Calculator Apps',
        description: 'Calculator applications created with Java, C++, and C# to demonstrate core programming skills and interface logic.',
        link: '#',
      },
    ],
  },
  {
    id: 'skills',
    heading: 'Skills',
    content: 'C++ · Java · C# · HTML basics · Microsoft Office · Desktop application development · System design',
  },
  {
    id: 'contact',
    heading: 'Contact',
    content: 'I am available to discuss new projects or roles. Reach out by phone or Facebook to collaborate on a practical, polished solution.',
    contactInfo: {
      phone: '01799353594',
      facebook: 'https://www.facebook.com/shariarsheikh.hridoy.90',
    },
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <p className="brand">Ahnaf</p>
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1>Hi, I’m <span>Ahnaf</span>.</h1>
          <p>
            I build polished React websites and apps that feel modern, structured, and easy to use.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">Contact Me</a>
            <a href="#projects" className="button button-secondary">View Projects</a>
          </div>
        </div>
        <aside className="hero-panel">
          <div className="hero-panel-inner">
            <p className="hero-panel-title">Current focus</p>
            <p className="hero-panel-text">React development, responsive interfaces, clean UI design, and polished web experiences.</p>
          </div>
        </aside>
      </section>

      <main>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="section-block">
            <div className="section-header">
              <p className="section-number">0{sections.indexOf(section) + 1}</p>
              <h2>{section.heading}</h2>
            </div>
            <p>{section.content}</p>
            {section.projects && (
              <div className="project-grid">
                {section.projects.map((project) => (
                  <article key={project.title} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
                  </article>
                ))}
              </div>
            )}

            {section.id === 'contact' && section.contactInfo && (
              <div className="contact-details">
                <p><strong>Phone:</strong> {section.contactInfo.phone}</p>
                <p>
                  <strong>Facebook:</strong>{' '}
                  <a href={section.contactInfo.facebook} target="_blank" rel="noreferrer">
                    {section.contactInfo.facebook}
                  </a>
                </p>
              </div>
            )}
          </section>
        ))}
      </main>

      <footer className="footer-section">
        <p>Made with React · Built for your portfolio</p>
      </footer>
    </div>
  )
}

export default App
