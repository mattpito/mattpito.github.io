tsParticles.load("skills-particles", {
  fullScreen: {
    enable: false
  },
  background: {
    color: "#f4f4f4"
  },
  fpsLimit: 60,
  particles: {
    number: { value: 10 },
    shape: {
      type: "text",
      options: {
        text: {
          value: ["R", "Python", "bash", "HTML", "JS", "SQL", "ML", "Statistics", "Omics"],
          font: "Verdana",
          style: "",
          weight: "400",
          fill: true
        }
      }
    },
    size: {
      value: 16
    },
    move: {
      enable: true,
      speed: 1.2,
      outModes: { default: "bounce" }
    },
    color: {
      value: "#333"
    },
    links: {
      enable: true,
      distance: 140,
      color: "#888",
      opacity: 0.5,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" }
    },
    modes: {
      grab: {
        distance: 120,
        links: { opacity: 0.6 }
      }
    }
  },
  detectRetina: true
});
