import "../styles/Navbar.css";


function Navbar() {
  return (
   <nav>
    {["Home", "Skills", "Projects", "Contact"].map(item => (
      <li key={item}>
        <a href={`#${item.toLowerCase()}`}>{item}</a>
      </li>
    ))}
  </nav> 
  );
}

export default Navbar;
