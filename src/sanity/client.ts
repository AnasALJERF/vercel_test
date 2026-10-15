import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true, perspective: "published" });

const builder = imageUrlBuilder({ projectId, dataset });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => builder.image(source);
