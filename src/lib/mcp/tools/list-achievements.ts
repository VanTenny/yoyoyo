import { defineTool } from "@lovable.dev/mcp-js";

const ACHIEVEMENTS = [
  { title: "TOEFL iBT — 99/120 (CEFR C1)", year: "2025", description: "99/120 on the TOEFL iBT with a perfect 30/30 in Listening (Reading 24, Listening 30, Speaking 20, Writing 25). CEFR C1 — Advanced English proficiency." },
  { title: "Top 1.10% in JEE Main", year: "2022", description: "Top 1.10% among 0.9 million+ candidates in JEE Main." },
  { title: "Top 2.57% in JEE Advanced", year: "2022", description: "Top 2.57% rank among 0.15 million+ candidates in JEE Advanced." },
  { title: "Institute Exhibition Selection", year: "2023", description: "One of the best teams out of 120+ selected for the institute-wide exhibition for the Line Following Bot project at IIT Bombay." },
  { title: "Perfect Score in Product Design", year: "2025", description: "Perfect score (10/10) from PhD-level evaluators for all product design projects in the DE344 course." },
  { title: "A+ in Japanese Communication", year: "2024", description: "A+ in a 100-hour Japanese Communication course by IIT Bombay's Office of International Relations." },
  { title: "Basketball Championship Podium", year: "2025", description: "3rd place in the Hostel 5 General Championships at IIT Bombay after a yearlong basketball training." },
];

export default defineTool({
  name: "list_achievements",
  title: "List achievements",
  description: "Lists Tenzing's achievements and recognitions from the portfolio.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(ACHIEVEMENTS, null, 2) }],
    structuredContent: { achievements: ACHIEVEMENTS },
  }),
});
