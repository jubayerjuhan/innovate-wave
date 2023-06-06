// sanity.js
import { createClient } from "@sanity/client";
// import {createClient} from 'https://esm.sh/@sanity/client'

export default createClient({
  projectId: "uykqua2c",
  dataset: "production",
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});
