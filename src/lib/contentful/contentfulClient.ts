import * as contentfulCDN from "contentful";
import * as contentfulCMA from "contentful-management"

if (!process.env.SPACE_ID || !process.env.CDN_TOKEN || !process.env.CMA_TOKEN)
    throw new ReferenceError('No Contentful API Environmental Variables set. Please set them as `SPACE_ID`, `CDN_TOKEN`, `CMA_TOKEN` in /.env.local');

export const cdnClient = contentfulCDN.createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.CDN_TOKEN
});

export const cmaClient = contentfulCMA.createClient({
    accessToken: process.env.CMA_TOKEN
});