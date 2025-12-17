import "../styles/Navbar.css";


function Navbar() {
  return (
   <nav>
    {["Home", "Skills", "Projects", "Contact"].map(item => (
      <a key={item} href={`#${item.toLowerCase()}`} className="navbar-link">{item}</a>
    ))}
  </nav> 
  );
}

export default Navbar;
