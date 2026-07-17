import { defineMcp } from "@lovable.dev/mcp-js";
import getAbout from "./tools/get-about";
import listProjects from "./tools/list-projects";
import listAchievements from "./tools/list-achievements";
import listCoursework from "./tools/list-coursework";
import listGallery from "./tools/list-gallery";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "tenzing-portfolio-mcp",
  title: "Tenzing Jampa — Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Read-only access to Tenzing Jampa's public portfolio: bio, projects, achievements, coursework, gallery captions, and contact links. Use get_about for a general overview, then drill into list_projects, list_achievements, list_coursework, list_gallery, or get_contact as needed.",
  tools: [getAbout, listProjects, listAchievements, listCoursework, listGallery, getContact],
});
