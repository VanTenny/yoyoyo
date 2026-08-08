import { defineTool } from "@lovable.dev/mcp-js";

const ABOUT = {
  name: "Tenzing Jampa",
  headline: "Engineering Physics graduate from IIT Bombay; incoming Master's student in Physics at KIT",
  hometown: "Kalimpong, Eastern Himalayas",
  location: "Mumbai, India",
  bio: [
    "I'm Tenzing, an Engineering Physics graduate from IIT Bombay, originally from Kalimpong in the eastern Himalayas. I will begin a Master's degree in Physics at Karlsruhe Institute of Technology (KIT) in the Winter 2026/27 semester. My work tends to sit at the intersection of physics and computation — modelling polymer chains, simulating wind turbine drive trains, or training RL agents.",
    "I spent Autumn 2025 as an exchange student at the University of Agder in Norway, which was equal parts great research experience and a genuine culture shock. Outside academics, I play basketball, speak six languages, and pick up random side projects that usually teach me more than I expected.",
  ],
  quickFacts: [
    "Engineering Physics graduate · IIT Bombay ('26)",
    "Incoming Master's student in Physics · KIT · Winter 2026/27",
    "Condensed Matter · Nonlinear Dynamics · Astrophysics",
    "Top 1.1% JEE Main · Top 2.6% JEE Advanced",
    "Six languages: English, Hindi, Nepali, Tibetan, Japanese, German",
    "Exchange Student · University of Agder, Norway ('25)",
    "Basketball · 3rd place, IIT Bombay General Championships ('25)",
    "Based in Mumbai, India",
  ],
  skills: [
    "Python", "C++", "MATLAB / Simulink", "Machine Learning",
    "LaTeX", "Scikit-learn", "PyTorch", "Nonlinear Dynamics", "Figma", "Knime",
  ],
};

export default defineTool({
  name: "get_about",
  title: "Get about Tenzing",
  description: "Returns Tenzing Jampa's bio, quick facts, and skills from the portfolio's About section.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ABOUT, null, 2) }],
    structuredContent: ABOUT,
  }),
});
