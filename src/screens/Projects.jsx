import React, { useState, useEffect, useRef } from "react";
import terrainGif from '../assets/projects/terrain.gif'
import terrain2Gif from '../assets/projects/terrain2.gif'
import terrain3Gif from '../assets/projects/terrain3.gif'
import terrain4Gif from '../assets/projects/terrain4.gif'

import eyespyGif from '../assets/projects/eyespy.gif'
import eyespy2 from '../assets/projects/eyespy2.png'
import eyespy3 from '../assets/projects/eyespy3.gif'

import popnik from '../assets/projects/popnik.gif'

export default function Projects() {
  const projects = [
    {
      title: "3D World Generator",
      description: "Procedural terrain generation with OpenGL, controlled via webcam facial tracking.",
      techstack: "Tech Stack: C, OpenGL, GLFW, Mediapipe, Python",
      image: terrainGif,
      repo: "https://github.com/JayceFR/VisionTerrain",
      store: "",
      dataImages: [terrain2Gif, terrain3Gif, terrain4Gif],
      dataText: [
        "Procedural terrain generation driven by Perlin noise, with the world divided into chunks (each made of 16x16 blocks). This chunking system allows efficient rendering by only processing visible sections of the terrain, significantly improving performance.",
        "The environment can be navigated through an alternative interaction method: camera movement controlled by tracking facial data from a webcam. This approach was motivated by accessibility concerns, offering a hands-free alternative to traditional mouse input.",
        "Developed a custom OpenGL rendering pipeline with multiple shaders to achieve realistic visuals. Shaders were used for terrain rendering, animating fireflies, and simulating water with noise-based displacement and sine-wave oscillations, creating convincing lighting and surface effects."
    ]
    },
    {
        title: "EyeSpy – Mobile Security App",
        description: "Android security application that automatically detects and captures images of potential intruders, securely sending alerts and photos directly to your email.",
        techstack: "Tech Stack: Kotlin, Jetpack Compose, Flow, Google Sign-In, On-Device ML",
        image: eyespyGif,
        repo: "https://github.com/JayceFR/StepShadower",
        store: "https://play.google.com/store/apps/details?id=eye.spy",
        dataImages: [eyespy2, eyespy3],
        dataText: [
        "Features a built-in personal assistant powered by on-device machine learning, allowing users to easily configure capture settings and security preferences.",
        "Seamlessly integrated with Google Account sign-in for secure authentication and user management. Intruder alerts and captured images are sent directly from the user’s authenticated Google account."
        ]

    },
    {
      title: "Popnik - Mobile game",
      description: "A mobile game that challenges players to navigate a series of procedurally generated levels defeating enemies and hacking computers!",
      techstack: "Tech Stack: C, Raylib, GLSL",
      image: popnik,
      demo: "https://youtu.be/demo-video",
      repo: "https://github.com/username/pawn-race",
      store: "https://itch.io/game/pawn-race",
      dataImages: [],
      dataText: []
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {selectedProject && (
  <div className="project-popup">
    <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
    <h2>{selectedProject.title}</h2>
    <div className="popup-image">
      <img src={selectedProject.image} alt={selectedProject.title} />
    </div>
    <p>{selectedProject.description}</p>
    <p><em>{selectedProject.techstack}</em></p>

    {selectedProject.demo && (
          <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
            Watch Demo
          </a>
        )}
        {selectedProject.repo && (
          <a href={selectedProject.repo} target="_blank" rel="noopener noreferrer">
            View Repository
          </a>
        )}
        {selectedProject.store && (
          <a href={selectedProject.store} target="_blank" rel="noopener noreferrer">
            {selectedProject.store.includes("play.google") ? "Play Store" : "Itch.io"}
          </a>
        )}

        {Array.from(
          { length: Math.max(selectedProject.dataImages.length, selectedProject.dataText.length) },
          (_, idx) => (
            <div className="popup-box" key={idx}>
              {selectedProject.dataImages[idx] && (
                <div className="popup-image">
                  <img
                    src={selectedProject.dataImages[idx]}
                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                  />
                </div>
              )}
              {selectedProject.dataText[idx] && (
                <p className="popup-text">{selectedProject.dataText[idx]}</p>
              )}
            </div>
          )
        )}

      </div>
    )}

    </section>
  );
}