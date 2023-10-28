import { createClient } from "next-sanity";

// yes, ik ik. required.
const projectId = "xvzoobpp";

const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
