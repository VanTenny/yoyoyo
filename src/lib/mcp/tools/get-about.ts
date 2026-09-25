import { defineTool } from "@lovable.dev/mcp-js";

const ABOUT = {
  name: "Tenzing Jampa",
  headline: "Engineering Physics graduate from IIT Bombay; Master's student in Physics at KIT",
  hometown: "Kalimpong, Eastern Himalayas",
  location: "Karlsruhe, Germany",
  bio: [
    "I'm Tenzing, an Engineering Physics graduate from IIT Bombay, originally from Kalimpong in the eastern Himalayas. I am now a Master's student in Physics at Karlsruhe Institute of Technology (KIT) in Germany. My work tends to sit at the intersection of physics and computation — modelling polymer chains, simulating wind turbine drive trains, or training RL agents.",
    "I spent Autumn 2025 as an exchange student at the University of Agder in Norway, which was equal parts great research experience and a genuine culture shock. Outside academics, I play basketball, speak six languages, and pick up random side projects that usually teach me more than I expected.",
  ],
  quickFacts: [
    "Engineering Physics graduate · IIT Bombay ('26)",
    "Master's student in Physics · KIT · Karlsruhe, Germany",
    "Condensed Matter · Nonlinear Dynamics · Astrophysics",
    "Top 1.1% JEE Main · Top 2.6% JEE Advanced",
    "Six languages: English, Hindi, Nepali, Tibetan, Japanese, German",
    "Exchange Student · University of Agder, Norway ('25)",
    "Basketball · 3rd place, IIT Bombay General Championships ('25)",
    "Based in Karlsruhe, Germany",
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
