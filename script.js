tsParticles.load("skills-particles", {
  fullScreen: { enable: false },
  background: { color: "#f4f4f4" },
  fpsLimit: 60,
  particles: {
    number: {
      value: 0 // don't auto-generate
    },
    shape: {
      type: "text",
      options: {
        text: {
          font: "Verdana",
          value: [],
          fill: true
        }
      }
    },
    size: { value: 16 },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: { default: "bounce" }
    },
    color: { value: "#333" },
    links: {
      enable: true,
      distance: 140,
      color: "#888",
      opacity: 0.5,
      width: 1
    }
  },
  detectRetina: true,
  manualParticles: [
    { position: { x: 10, y: 30 }, options: { shape: { type: "text", options: { text: { value: "R" } } } } },
    { position: { x: 20, y: 50 }, options: { shape: { type: "text", options: { text: { value: "Python" } } } } },
    { position: { x: 30, y: 40 }, options: { shape: { type: "text", options: { text: { value: "bash" } } } } },
    { position: { x: 40, y: 60 }, options: { shape: { type: "text", options: { text: { value: "HTML" } } } } },
    { position: { x: 50, y: 30 }, options: { shape: { type: "text", options: { text: { value: "JS" } } } } },
    { position: { x: 60, y: 50 }, options: { shape: { type: "text", options: { text: { value: "SQL" } } } } },
    { position: { x: 70, y: 40 }, options: { shape: { type: "text", options: { text: { value: "ML" } } } } },
    { position: { x: 80, y: 60 }, options: { shape: { type: "text", options: { text: { value: "Statistics" } } } } },
    { position: { x: 90, y: 50 }, options: { shape: { type: "text", options: { text: { value: "Omics" } } } } }
  ]
});
