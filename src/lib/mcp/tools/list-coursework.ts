import { defineTool } from "@lovable.dev/mcp-js";

const COURSEWORK = [
  { category: "Mathematics", courses: ["Calculus", "Linear Algebra", "Differential Equations", "Real Analysis", "Complex Analysis"] },
  { category: "Systems & Control", courses: ["Non-linear Dynamics", "Digital Photogrammetry and Cartography"] },
  { category: "Physics", courses: ["Classical Mechanics", "Quantum Mechanics", "Statistical Physics", "Numerical Methods in Physics", "Mathematical Physics", "Waves and Oscillations", "Quantum Information and Computing", "Semiconductors Physics", "Condensed Matter Physics", "Electromagnetic Theory", "Light Matter Interaction", "Molecular Spectroscopy", "Optical Physics", "Continuum Mechanics"] },
  { category: "Electrical", courses: ["Analog Electronics", "Digital Electronics", "Microprocessors", "Nano Devices and Applications"] },
  { category: "CS and ML", courses: ["Computer Programming and Utilisation", "Programming for Data Science", "Makers Space", "Introduction to Machine Learning"] },
];

export default defineTool({
  name: "list_coursework",
  title: "List coursework",
  description: "Lists Tenzing's selected coursework at IIT Bombay, grouped by category.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(COURSEWORK, null, 2) }],
    structuredContent: { coursework: COURSEWORK },
  }),
});
