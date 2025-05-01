tsParticles.load("skills-particles", {
  fullScreen: { enable: false },
  background: { color: "#f4f4f4" },
  fpsLimit: 60,
  particles: {
    number: { value: 0 },
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
    size: { value: 14 }, // slightly smaller text
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
    { position: { x: 80, y: 60 }, options: { shape: { type: "text", options: { text: { value: "Stats" } } } } },
    {
      position: { x: 90, y: 50 },
      options: {
        shape: {
          type: "text",
          options: { text: { value: "Omics" } }
        },
        color: { value: "#A23CBD" } // custom color for Omics
      }
    },
    { position: { x: 20, y: 20 }, options: { shape: { type: "text", options: { text: { value: "DNA" } } } } },
    { position: { x: 30, y: 25 }, options: { shape: { type: "text", options: { text: { value: "RNA" } } } } },
    { position: { x: 40, y: 20 }, options: { shape: { type: "text", options: { text: { value: "Protein" } } } } },
    { position: { x: 50, y: 25 }, options: { shape: { type: "text", options: { text: { value: "Metabolism" } } } } }
  ]
});
