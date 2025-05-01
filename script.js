// Load the text shape plugin
tsParticles.load("skills-particles", {
  fpsLimit: 60,
  particles: {
    number: { value: 10 },
    shape: {
      type: "text",
      options: {
        text: {
          value: ["R", "Python", "Bash", "HTML", "JS", "ML", "Omics", "SQL", "Stats", "Linux"],
          font: "Verdana",
          style: "",
          weight: "400",
          fill: true
        }
      }
    },
    size: {
      value: 20
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: { default: "bounce" }
    },
    color: { value: "#333" },
    links: {
      enable: true,
      distance: 150,
      color: "#555",
      opacity: 0.5,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 120,
        links: {
          opacity: 0.5
        }
      }
    }
  },
  detectRetina: true
});
