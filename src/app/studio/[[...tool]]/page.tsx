import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import StudioDirection from "./StudioDirection";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return (
    <>
      <StudioDirection />
      <NextStudio config={config} />
    </>
  );
}
