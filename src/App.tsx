
import './App.css'
import profileImage from './assets/profile.jpg'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    number: '01',
    name: 'PCJ Property Consultants',
    category: 'Client Project · Full-Stack Development',
    description:
      'Developed a production real estate website for a property consultancy in Uttarakhand. Built property and project listings, interactive location maps, consultation forms, and a secure administration dashboard for managing website content and enquiries.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Leaflet',
      'Cloudflare Pages',
    ],
    liveLink: 'https://pcjproperty.com',
    githubLink: 'https://github.com/divy000/pcj-property-consultants',
  },
  {
    number: '02',
    name: 'Blood Vault',
    category: 'Full-Stack Application · MERN',
    description:
      'Built a blood bank management application with JWT-based authentication, donor and recipient management, blood inventory tracking, order processing, and inventory recommendation functionality.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'REST API',
    ],
    liveLink: null,
    githubLink: 'https://github.com/divy000/Blood-Vault',
  },
  {
    number: '03',
    name: 'Mini Compiler with Web IDE',
    category: 'Compiler Design · Academic Project',
    description:
      'Developed a compiler for a small programming language with lexical analysis, syntax parsing, semantic validation, three-address code generation, and interpretation. Integrated a browser-based code editor and automated tests.',
    technologies: [
      'Python',
      'Flask',
      'PLY',
      'CodeMirror',
      'JavaScript',
    ],
    liveLink: null,
    githubLink: 'https://github.com/divy000/Mini-Compiler-Web-IDE',
  },
]

const education = [
  {
    number: '01',
    qualification: 'B.Tech — Computer Science and Engineering',
    institution: 'Graphic Era Hill University, Bhimtal Campus',
    location: 'Bhimtal, Uttarakhand',
    period: '2023 — 2027',
    detail: 'Undergraduate degree · Currently pursuing',
  },
  {
    number: '02',
    qualification: 'Higher Secondary Education (Class XII)',
    institution: "St. Joseph's College",
    location: 'Nainital, Uttarakhand',
    period: '2023',
    detail: 'ISC Board · Completed',
  },
  {
    number: '03',
    qualification: 'High School Education (Class X)',
    institution: 'Long View Public School',
    location: 'Nainital, Uttarakhand',
    period: '2021',
    detail: 'CBSE Board · Completed',
  },
]

const skills = [
  'C++',
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express.js',
  'Flask',
  'HTML & CSS',
  'Tailwind CSS',
  'MongoDB',
  'PostgreSQL',
  'Supabase',
  'REST APIs',
  'Git & GitHub',
  'Data Structures & Algorithms',
]

function App() {
  return (
    <div className="portfolio">
      <aside className="sidebar">
        <div className="profile">
          <img
            src={profileImage}
            alt="Portrait of Divyanshu Singh Parihar"
            className="profile-image"
          />

          <h2>Divyanshu Singh Parihar</h2>
          <p>Computer Science Engineering Student</p>
        </div>

        <nav className="navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="text-link"
          href="https://github.com/divy000"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>

        <div className="sidebar-footer">
          <p>Based in India</p>
          <p>Open to internship opportunities</p>
        </div>
      </aside>

      <main className="main-content">
        <section className="hero section" id="home">
          <p className="eyebrow">
            COMPUTER SCIENCE · SOFTWARE ENGINEERING
          </p>

          <h1>
            Turning ideas
            <br />
            into meaningful
            <br />
            software.
          </h1>

          <p className="hero-description">
            I'm Divyanshu Singh Parihar, a final-year Computer Science
            Engineering student at Graphic Era Hill University.
            I build full-stack applications, explore software engineering,
            and enjoy solving practical problems through code.
          </p>

          <div className="hero-actions">
            <a className="primary-link" href="#projects">
              Explore my projects <span aria-hidden="true">↗</span>
            </a>

            <a className="secondary-link" href="#contact">
              Get in touch
            </a>
          </div>
        </section>

        <section className="section about-section" id="about">
          <p className="eyebrow">01 / ABOUT</p>
          <h2>A little about me</h2>

          <p>
            I'm pursuing a B.Tech in Computer Science and Engineering
            at Graphic Era Hill University, Bhimtal, graduating in 2027.
            My interests include software development, full-stack web
            engineering, data structures, and problem solving.
          </p>

          <p>
            Through academic and independent projects, I've worked
            with frontend interfaces, backend APIs, databases, and
            application deployment. I'm currently focused on strengthening
            my software engineering fundamentals and preparing for
            internship and entry-level development opportunities.
          </p>
        </section>

        <section className="section" id="skills">
          <p className="eyebrow">02 / EXPERTISE</p>
          <h2>Skills & technologies</h2>

          <p className="section-intro">
            Programming languages, frameworks, tools, and concepts
            I've worked with or am actively developing.
          </p>

          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Projects</h2>

          <p className="section-intro">
            Selected work across full-stack development, practical
            applications, and compiler design.
          </p>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span className="project-number">
                    {project.number}
                  </span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveLink && (
                    <a
                      className="project-link"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit live website
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}

                  <a
                    className="project-link"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <p className="eyebrow">04 / BACKGROUND</p>
          <h2>Education</h2>

          <p className="section-intro">
            My academic background and education.
          </p>

          <div className="education-list">
            {education.map((item) => (
              <article className="education-card" key={item.number}>
                <span className="education-number">
                  {item.number}
                </span>

                <div className="education-details">
                  <h3>{item.qualification}</h3>
                  <p className="education-institution">
                    {item.institution}
                  </p>
                  <p className="education-location">
                    {item.location}
                  </p>
                  <p className="education-detail">
                    {item.detail}
                  </p>
                </div>

                <span className="education-period">
                  {item.period}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <p className="eyebrow">05 / GET IN TOUCH</p>
          <h2>Let's connect.</h2>

          <p>
            I'm open to internship and entry-level software development
            opportunities, collaborations, and conversations about
            technology. Feel free to get in touch.
          </p>

          <a
            className="text-link"
            href="mailto:divyanshusparihar2005@gmail.com"
          >
            divyanshusparihar2005@gmail.com
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="text-link"
            href="https://github.com/divy000"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub — divy000
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="text-link"
            href="https://www.linkedin.com/in/divyanshu-singh-parihar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn — Divyanshu Singh Parihar
            <span aria-hidden="true">↗</span>
          </a>

          <a
            className="text-link"
            href="https://leetcode.com/u/divy000_0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode — divy000_0
            <span aria-hidden="true">↗</span>
          </a>
        </section>

        <footer className="footer">
          <p>© 2026 Divyanshu Singh Parihar</p>
          <p>Built with React and TypeScript.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
