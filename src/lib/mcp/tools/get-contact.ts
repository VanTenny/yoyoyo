import { defineTool } from "@lovable.dev/mcp-js";

const CONTACT = {
  officialEmail: "22B1808@iitb.ac.in",
  personalEmail: "jampatenzin280@gmail.com",
  phone: "+918016037894",
  github: "https://github.com/VanTenny",
  linkedin: "https://linkedin.com/in/TenzinZen27",
  cv: "https://github.com/VanTenny/CV/blob/main/CV_Tenzing.pdf",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Returns Tenzing's public contact information and links (email, phone, GitHub, LinkedIn, CV).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(CONTACT, null, 2) }],
    structuredContent: CONTACT,
  }),
});
