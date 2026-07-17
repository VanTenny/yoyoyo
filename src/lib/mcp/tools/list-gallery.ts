import { defineTool } from "@lovable.dev/mcp-js";

const GALLERY = [
  { title: "Basketball Championship", description: "Secured 3rd place in Hostel 5 General Championships at IIT Bombay" },
  { title: "Marathon Achievement", description: "Participating in my first 5K Run organized by Avhaan IITB" },
  { title: "Hiking", description: "At the summit of Rajgad fort, Maharashtra with my friends" },
  { title: "EP_26", description: "Graduation Photoshoot of Engineering Physics batch '26" },
  { title: "Milan", description: "At Duomo di Milano, Italy" },
  { title: "Norway", description: "Homecooked dinner by me, Nanako and Asumi for our international friends at UiA, Kristiansand" },
  { title: "Oslo", description: "The upper deck of Astrup Fearnley Museum of Modern Art in Oslo, Norway" },
  { title: "Paris", description: "At a museum in Paris, France" },
  { title: "Preikestolen (Pulpit Rock)", description: "Summited a world famous nature's wonder Preikestolen, Norway" },
  { title: "Mount Fuji", description: "Climbed Mount Fuji on a crazy hike which took around 7 hours" },
  { title: "Osaka Palace", description: "Travelling and being crazy about Japan define me" },
  { title: "Cultural Exchange Dinner", description: "Enjoying time with friends from various countries" },
];

export default defineTool({
  name: "list_gallery",
  title: "List gallery photos",
  description: "Lists photos in Tenzing's portfolio gallery with their titles and captions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(GALLERY, null, 2) }],
    structuredContent: { photos: GALLERY },
  }),
});
