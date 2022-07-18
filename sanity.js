import SanityClient  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const client = SanityClient({
    projectId: "y0a1q3qv",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
    token: "skeWaKhALO01QAdSFlSEIxbn3SPeZTbkO1NNSikoyymNHI3fphggk2WV3Lp4xh2HsNXoEOyrZEMTTFtZcX4DTQZ4KmOyGeQUkfbusmniP1WcIaSbTHDA6QF9prCe80Ociq9dY4ziWEyr1Svgzv2kbz01CbBkk3Pj3hQTjwpS0sdi7mHjrxsN"
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;