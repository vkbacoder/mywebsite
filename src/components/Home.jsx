import "../styles/Home.css";
import backgroundVideo from "../assets/background.mp4";
function Home() {
  return (
    <section id="home" className="home">
      {/* background video */}
      <video autoPlay loop muted playsInline preload="auto" className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      
      <div className="home-container">
        <header className="home-header">
          <div>
            <h1>Vishnu K B</h1>
            <h2>Full Stack Developer</h2>
            <p className="tagline">I build accessible, pixel-perfect digital experiences for the web.</p>
          </div>
          
          <nav className="home-nav">
            <ul>
              <li><a href="#about" className="nav-link"><span className="nav-line"></span>ABOUT</a></li>
              <li><a href="#projects" className="nav-link"><span className="nav-line"></span>PROJECTS</a></li>
              <li><a href="#skills" className="nav-link"><span className="nav-line"></span>SKILLS</a></li>
              <li><a href="#contact" className="nav-link"><span className="nav-line"></span>CONTACT</a></li>
            </ul>
          </nav>

          <div className="social-links">
            {/* Add social icons if available, or keep text for now */}
          </div>
        </header>

        <main className="home-content-right">
            <div id="about" className="section-content">
              <p>
                I am a B.Tech Computer Science student, software developer, and founder of Altrax Technologies.
                I focus on building practical web and mobile applications while continuously improving my
                technical and problem-solving skills.
              </p>
              <p>
                Welcome to my small world of technology. Here you can find my projects, skills, and contact information.
                I am not a pro; I am an active learner who enjoys learning new things.
              </p>
            </div>
            {/* Other sections like Projects could ostensibly be moved here if we want a single page scroll, 
                but for now we are just redesigning the Home component's view */}
        </main>
      </div>
    </section>
  );
}

export default Home;

