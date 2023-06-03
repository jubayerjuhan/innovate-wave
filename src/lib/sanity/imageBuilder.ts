import { client } from "@/client/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

const sanityImage = (source: SanityImageSource) => {
  return builder.image(source);
};

export default sanityImage;
