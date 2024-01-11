import * as contentfulCDN from "contentful";
import * as contentfulCMA from "contentful-management"

if (!process.env.NEXT_PUBLIC_SPACE_ID || !process.env.NEXT_PUBLIC_CDN_TOKEN || !process.env.NEXT_PUBLIC_CMA_TOKEN) {
    throw new ReferenceError('No Contentful API Environmental Variables set. Please set them as `SPACE_ID`, `CDN_TOKEN`, `CMA_TOKEN` in /.env.local');
    
}

export const cdnClient = contentfulCDN.createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CDN_TOKEN
});

export const cmaClient = contentfulCMA.createClient({
    accessToken: process.env.NEXT_PUBLIC_CMA_TOKEN
});