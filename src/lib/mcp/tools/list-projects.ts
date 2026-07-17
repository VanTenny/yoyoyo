import { defineTool } from "@lovable.dev/mcp-js";

const PROJECTS = [
  {
    title: "Wind Turbine Drive Train Simulation",
    tag: "Research · University of Agder, Norway",
    description:
      "High-fidelity MATLAB/Simulink model of a 2MW wind turbine drive train with a five-interval control strategy regulating rotor speed across 0–25 m/s. Models generator torque and hydraulic pitch servo dynamics; verified via transient ramp and step-jump simulations.",
    technologies: ["MATLAB", "Simulink", "Simscape", "Control Systems"],
    link: "https://github.com/VanTenny/Wind_Turbine_Project_Researcher",
    category: "featured",
  },
  {
    title: "Statistical Mechanics of Polymer Chains",
    tag: "B.Tech Project · IIT Bombay",
    description:
      "Derived scaling laws for freely jointed, freely rotating, and worm-like chain architectures. Applied Flory mean-field theory and the thermal blob model to map ideal Gaussian to swollen coil states; simulations confirmed the R ~ N^(3/5) exponent for self-avoiding walks.",
    technologies: ["Statistical Physics", "Python", "Monte Carlo", "Scaling Theory"],
    link: "https://github.com/VanTenny/BTP_Project_Tenzing/blob/main/22B1808_Report.pdf",
    category: "featured",
  },
  {
    title: "Mechanical Impacting System — Electrical Analogue",
    tag: "Non-linear Dynamics · IIT Bombay",
    description:
      "Reproduced and extended a published paper on the electrical equivalent of a 1-DOF mechanical impacting system. Identified conditions for the period-1 → chaos → period-2 bifurcation and resolved a flaw in the original analysis using Python phase plots and differential calculus.",
    technologies: ["Python", "LTspice", "Nonlinear Dynamics", "Bifurcation Analysis"],
    link: "https://github.com/VanTenny/Mechanical-Impacting-Simulation-System/blob/main/Mechanical%20Impacting%20Systems-compressed.pdf",
    category: "featured",
  },
  {
    title: "RL Agent for Highway Self-Driving",
    tag: "Machine Learning · IIT Bombay Summer of Coding",
    description:
      "Implemented and compared Q-Learning, PPO, DDPG, and SAC on a simulated highway environment across an 8-week structured programme.",
    technologies: ["Python", "PyTorch", "PPO", "DDPG", "SAC", "OpenAI Gym"],
    link: "https://github.com/VanTenny/Reinforcement-Learning-in-Self-Driving-Cars",
    category: "featured",
  },
  {
    title: "Cosmology and Dark Matter — Research Report",
    tag: "Self Project · IIT Bombay Summer of Science",
    description:
      "8-week dive into foundational and frontier cosmology: Big Bang, CMB, GR in cosmological models, and dark matter candidates (WIMPs, axions, sterile neutrinos). Written in LaTeX with figures and derivations.",
    technologies: ["Astrophysics", "General Relativity", "LaTeX", "Scientific Writing"],
    link: "https://github.com/VanTenny/cosmology-and-dark-matter-report/blob/main/SOS_Tenzing.pdf",
    category: "featured",
  },
  {
    title: "Universal IR Remote Controller",
    tag: "Electronics · IIT Bombay",
    description:
      "Microcontroller-based universal IR remote that decodes and replays signals from common consumer electronics — a first-year intro to embedded signal handling.",
    technologies: ["Arduino", "C", "IR Protocols", "Embedded"],
    link: "https://thiv.notion.site/Universal-IR-Remote-29823ba45c8b4f3eb3f5b599a5765c0f",
    category: "smaller",
  },
  {
    title: "Line Following Bot",
    tag: "Robotics · IIT Bombay",
    description:
      "Two-wheeled line follower with IR reflectance sensors and a PID-tuned motor loop. Selected as one of the best out of 120+ teams for the institute-wide exhibition.",
    technologies: ["Arduino", "PID Control", "IR Sensors", "Circuit Design"],
    link: "https://youtu.be/mOh8zv66rmA",
    category: "smaller",
  },
];

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "Lists Tenzing's portfolio projects (featured and smaller). Optionally filter by category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PROJECTS, null, 2) }],
    structuredContent: { projects: PROJECTS },
  }),
});
