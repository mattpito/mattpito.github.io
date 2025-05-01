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
    size: { value: 14 },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: { default: "bounce" }
    },
    color: { value: "#000000" }, // default to black
    links: {
      enable: true,
      distance: 140,
      color: "#aaa",
      opacity: 0.5,
      width: 1
    }
  },
  detectRetina: true,
  manualParticles: [
    { position: { x: 10, y: 30 }, options: { shape: { type: "text", options: { text: { value: "R" } } }, color: { value: "#000000" } } },
    { position: { x: 20, y: 50 }, options: { shape: { type: "text", options: { text: { value: "Python" } } }, color: { value: "#000000" } } },
    { position: { x: 30, y: 40 }, options: { shape: { type: "text", options: { text: { value: "bash" } } }, color: { value: "#000000" } } },
    { position: { x: 40, y: 60 }, options: { shape: { type: "text", options: { text: { value: "HTML" } } }, color: { value: "#000000" } } },
    { position: { x: 50, y: 30 }, options: { shape: { type: "text", options: { text: { value: "JS" } } }, color: { value: "#000000" } } },
    { position: { x: 60, y: 50 }, options: { shape: { type: "text", options: { text: { value: "SQL" } } }, color: { value: "#000000" } } },
    { position: { x: 70, y: 40 }, options: { shape: { type: "text", options: { text: { value: "ML" } } }, color: { value: "#000000" } } },
    { position: { x: 80, y: 60 }, options: { shape: { type: "text", options: { text: { value: "Statistics" } } }, color: { value: "#000000" } } },
    { position: { x: 90, y: 50 }, options: { shape: { type: "text", options: { text: { value: "Omics" } } }, color: { value: "#A23CBD" } } },
    { position: { x: 20, y: 20 }, options: { shape: { type: "text", options: { text: { value: "DNA" } } }, color: { value: "#1E90FF" } } },
    { position: { x: 30, y: 25 }, options: { shape: { type: "text", options: { text: { value: "RNA" } } }, color: { value: "#1E90FF" } } },
    { position: { x: 40, y: 20 }, options: { shape: { type: "text", options: { text: { value: "Protein" } } }, color: { value: "#1E90FF" } } },
    { position: { x: 50, y: 25 }, options: { shape: { type: "text", options: { text: { value: "Metabolism" } } }, color: { value: "#E53935" } } }
  ]
});
