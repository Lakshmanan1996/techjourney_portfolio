import { tsParticles, ISourceOptions } from "tsparticles";

/**
 * Initialize moving particles with cursor interaction
 */
export function initCursorParticles(): void {
  const options: ISourceOptions = {
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 }
      },
      color: { value: "#000000" }, // Black particles
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: 3, random: true },
      links: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,           // particle speed
        direction: "none",
        random: false,
        straight: false,
        outMode: "out",
        attract: { enable: false } // optional attraction effect
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: true, mode: "repulse" }, // particles move away from cursor
        onClick: { enable: true, mode: "push" },    // adds more particles on click
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 4 }
      }
    },
    detectRetina: true,
  };

  tsParticles.load("home-particles", options);
}
