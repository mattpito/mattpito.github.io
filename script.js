// Load skill particles safely in main-content only
tsParticles.load("skills-particles", {
  fpsLimit: 60,
  background: {
    color: "#f4f4f4"
  },
  particles: {
    number: { value: 25 },
    size: { value: 4 },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: { default: "bounce" }
    },
    color: { value: "#888" },
    shape: { type: "circle" },
    links: {
      enable: true,
      distance: 120,
      color: "#aaa",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" }
    },
    modes: {
      grab: {
        distance: 100,
        links: { opacity: 0.6 }
      }
    }
  },
  detectRetina: true
});
