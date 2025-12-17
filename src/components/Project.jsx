import { useState } from "react";
import "../styles/Project.css";

// Shudum images
import shudum1 from "../assets/images/shudum/f.jpg";
import shudum3 from "../assets/images/shudum/ui.jpg";
import shudum4 from "../assets/images/shudum/uii.jpg";

// Crypto images
import crypto1 from "../assets/images/crypto/download-from-group.png";
import crypto2 from "../assets/images/crypto/download-inbox.png";
import crypto3 from "../assets/images/crypto/group-hash-value.png";
import crypto4 from "../assets/images/crypto/home.png";

/* Centralized badge definitions */
const techBadges = {
  React:
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  "React Native":
    "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
  Expo:
    "https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white",
  AsyncStorage:
     "https://img.shields.io/badge/asyncstorage-F05032?style=for-the-badge&logo=git&logoColor=white", // Fallback/Generic badge
  Django:
    "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
  Python:
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
  MySQL:
    "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
  SQLite:
    "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
  Node:
    "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
  JavaScript:
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
};

/* Project data */
const projects = [
  {
    title: "Shudum app",
    description: "Shudum is a mobile application built with React Native and Expo that helps users improve productivity and manage personal finances by combining daily planning, expense tracking, and debt management in a simple, intuitive interface",
    tech: ["React Native", "Expo", "AsyncStorage"],
    link: "https://github.com/vkbacoder/shudum-app",
    images: [shudum1, shudum3, shudum4]
  },
  {
    title: "Cryptographic File Sharing System",
    description: (
      <>
        A secure file sharing platform using cryptographic techniques for data integrity and access control.
        <br /><br />
        <p>
          <strong>Elliptic Curve Cryptography (ECC):</strong><br />
          ECC is based on the algebraic structure of elliptic curves defined over finite fields.
          The algorithm starts by selecting a private key, which is a randomly generated large integer.
          The corresponding public key is derived by performing scalar multiplication of this private
          key with a predefined base point on the elliptic curve.
          Due to the difficulty of the Elliptic Curve Discrete Logarithm Problem (ECDLP), it is
          computationally infeasible to derive the private key from the public key.
          ECC provides high security with smaller key sizes; for example, a 256-bit ECC key offers
          equivalent security to a 3072-bit RSA key, resulting in lower computation cost, reduced
          memory usage, and faster performance in secure communication systems.
        </p>
        <br />
        <p>
          <strong>Advanced Encryption Standard (AES):</strong><br />
          AES is a symmetric block cipher that encrypts data in fixed blocks of 128 bits using secret
          keys of 128, 192, or 256 bits.
          The encryption process consists of multiple rounds, each involving byte substitution
          (SubBytes), row shifting (ShiftRows), column mixing (MixColumns), and key addition (AddRoundKey).
          The number of rounds depends on the key size: 10 rounds for AES-128, 12 rounds for AES-192,
          and 14 rounds for AES-256.
          These repeated transformations ensure strong diffusion and confusion, making AES resistant
          to known cryptographic attacks while maintaining high performance for encrypting large
          volumes of data.
        </p>
        <br />
        <p>
          <strong>SHA-256:</strong><br />
          SHA-256 is a cryptographic hash function belonging to the SHA-2 family that converts input
          data of arbitrary length into a fixed 256-bit hash value.
          The algorithm processes data in 512-bit blocks and applies a series of logical functions,
          bitwise operations, and modular additions through multiple compression rounds.
          SHA-256 exhibits the avalanche effect, where even a one-bit change in the input results in
          a completely different output hash.
          Since SHA-256 is a one-way function with no decryption process, it is widely used for data
          integrity verification, password hashing, and digital signature systems.
        </p>
      </>
    ),
    tech: ["Django", "Python", "SQLite"],
    link: "https://github.com/vkbacoder/cryptographic-file-sharing-system", // Added link back
    images: [crypto1, crypto2, crypto3, crypto4]
  },
  /* Portfolio could be here but usually doesn't need screenshots of itself */
];

function Project() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects" className="project-section">
      <h2 className="project-title">Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', display: 'inline-block', marginBottom: '15px' }}>View Code</a>

          <div className="project-tech" style={{ marginBottom: '20px' }}>
            {project.tech.map((tech) => (
              <img
                key={tech}
                src={techBadges[tech] || `https://img.shields.io/badge/${tech}-gray`} // Fallback
                alt={tech}
              />
            ))}
          </div>

          <div className="project-images" style={{ alignItems: 'center', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
             {project.images && project.images.map((img, i) => (
                <img 
                    key={i} 
                    src={img} 
                    alt={`${project.title} screenshot ${i+1}`}
                    onClick={() => setSelectedImage(img)}
                    className="project-screenshot"
                />
             ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedImage && (
            <div 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.95)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'zoom-out'
                }}
                onClick={() => setSelectedImage(null)}
            >
                <img 
                    src={selectedImage} 
                    alt="Full screen" 
                    style={{
                        maxWidth: '95%',
                        maxHeight: '95%',
                        objectFit: 'contain',
                        boxShadow: '0 4px 6px rgba(255,255,255,0.1)',
                    }}
                    onClick={(e) => e.stopPropagation()} 
                />
                <span style={{
                    position: 'fixed',
                    top: '20px',
                    right: '30px',
                    color: 'white',
                    fontSize: '40px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    zIndex: 2001,
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                    background: 'rgba(0,0,0,0.5)',
                    padding: '0 10px',
                    borderRadius: '5px'
                }}
                onClick={() => setSelectedImage(null)}
                >&times;</span>
            </div>
      )}
    </section>
  );
}

export default Project;
