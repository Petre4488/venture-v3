import {createClient} from "next-sanity";

export const sanityClient = createClient({
    projectId: 'ynt38vv8',
    dataset: "production",
    apiVersion: '2022-03-07',
    useCdn: true
});