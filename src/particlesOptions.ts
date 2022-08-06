import { ISourceOptions } from "tsparticles-engine";

export const particlesOptions: ISourceOptions = {
  background: {
    color: {
      value: "#4ABEF9",
    },
  },
  fullScreen: {
    enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
  },
  particles: {
    color: {
      value: ["#86d3fb"],
    },

    move: {
      angle: {
        offset: 0,
        value: 15,
      },
      direction: "bottom",
      enable: true,
      outModes: {
        default: "out",
      },
      speed: 3,
    },
    number: {
      value: 50,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: "triangle",
    },
    size: {
      value: 30,
    },
    rotate: {
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: {
          min: 1,
          max: 10,
        },
        sync: true,
      },
      random: true,
    },
    zIndex: {
      value: {
        min: 0,
        max: 100,
      },
      opacityRate: 0,
      velocityRate: 2,
    },
  },
  detectRetina: true,
};
