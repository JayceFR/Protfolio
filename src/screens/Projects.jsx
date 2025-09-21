import React, { useState, useEffect, useRef } from "react";
import terrainGif from '../assets/projects/terrain.gif'
import terrain2Gif from '../assets/projects/terrain2.gif'
import terrain3Gif from '../assets/projects/terrain3.gif'

export default function Projects() {
  const projects = [
    {
      title: "Fitness Tracker App",
      description: "Android app using Jetpack Compose + Flow to track steps and workouts.",
      image: "/images/fitness-app.png",
      demo: "https://youtu.be/demo-video",
      repo: "https://github.com/username/fitness-tracker",
      store: "https://play.google.com/store/apps/details?id=fitness.tracker",
      dataImages: [],
      dataText: []
    },
    {
      title: "Pawn Race Game",
      description: "C program implementing a fast pawn-only chess engine optimized for tournaments.",
      image: "/images/pawn-race.png",
      demo: "https://youtu.be/demo-video",
      repo: "https://github.com/username/pawn-race",
      store: "https://itch.io/game/pawn-race",
      dataImages: [],
      dataText: []
    },
    {
      title: "3D World Generator",
      description: "C++ + OpenGL project generating procedural terrain with custom rendering pipeline.",
      image: terrainGif,
      demo: "https://youtu.be/demo-video",
      repo: "https://github.com/username/3d-world-generator",
      store: "",
      dataImages: [terrain2Gif, terrain3Gif],
      dataText: ["Procedural terrain generation with Perlin noise. Implemented a chunking system to efficiently manage and render large terrains.", "Can be explored by tracking facial data from webcam!", "Custom OpenGL rendering pipeline with shaders for realistic lighting and textures.", "Added custom physics as well."]
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

        {/* Alternate between images and text */}
        {/* Alternate between images and text in a box */}
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