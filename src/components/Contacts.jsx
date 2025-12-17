import "../styles/Contacts.css";
import mailIcon from "../assets/images/mail.png";
import githubIcon from "../assets/images/github-6980894_1920.png";
import linkedinIcon from "../assets/images/linkedin.png";

function Contacts(){
   return (
    <div id="contact" className="contact-section">
      <h1>Contact</h1>
      
      <div className="contact-links">
          <a href="mailto:vkb4477@gmail.com" title="Email">
            <img src={mailIcon} alt="Email" className="contact-icon" />
          </a>

          <a
            href="https://github.com/vkbacoder"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="contact-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/vishnu-k-b-12b766231/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
          </a>
      </div>
    </div>
  );
}

export default Contacts;