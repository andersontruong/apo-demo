import { cdnClient, cmaClient } from "./contentfulClient";

/**
 * Fetches documents from Contentful matching a query.
 * A query object should contain a string property `content_type`.
 * @param query
 */
export async function getDocs(query: { content_type: string }) {
    const entries = await cdnClient.getEntries(query);
    return entries.items;
}

export async function getCMADocs(query) {
    const entries = await (await getDB()).getEntries(query);
    return entries.items;
}

/**
 * Fetches documents from Contentful matching a Content Type.
 * @param contentType
 */
export async function getDocsByType(contentType: string) {
    return getDocs({ content_type: contentType });
}

export function fieldsToQuery(fields: { [key: string]: string }) {
    const fieldsQuery = Object.fromEntries(
        Object.entries(fields).map(
            (pair) => {
                return [`fields.${pair[0]}`, pair[1]]
            }
        )
    );
    return fieldsQuery
}

/**
 * Fetches documents from Contentful matching a Content Type.
 * @param contentType
 * @param fields
 */
export async function getDocsByField(contentType: string, fields: { [key: string]: string }) {
    const typeQuery = {
        content_type: contentType
    }
    const fieldsQuery = fieldsToQuery(fields);
    const query = { ...typeQuery, ...fieldsQuery };
    
    return getDocs(query);
}

export async function getDocsByQuery(query: any) { 
    return getDocs(query);
}

export async function getDB() {
    return (await cmaClient.getSpace(process.env.NEXT_PUBLIC_SPACE_ID)).getEnvironment('master');
}

export async function publishDoc(entryId: string) {
    let result: any = undefined;
    (await getDB()).getEntry(entryId)
        .then((entry) => {
            entry.publish()
                .then(entry => {
                    result = entry;
                })
                .catch((err) => {
                    console.error(`publishDoc Error: ${err}`);
                });
        })
        .catch((err) => {
            console.error(`publishDoc Error: ${err}`);
        });
    return result;
}

export async function createDoc(contentType: string, fields: Object) {
    let result: any = undefined;
    (await getDB()).createEntry(contentType, { fields: fields })
        .then((entry) => {
            result = entry
        })
        .catch((err) => {
            console.error(`createDoc Error: ${err}`);
        });
    return result;
}

export async function createPublishDoc(contentType: string, fields: Object) {
    let result: any = undefined;
    (await getDB()).createEntry(contentType, { fields: fields })
        .then((entry) => {
            entry.publish()
                .then(entry => {
                    result = entry;
                })
                .catch((err) => {
                    entry.delete();
                    console.error(`createPublishDoc Error: ${err}`);
                });
        })
        .catch((err) => {
            console.error(`createPublishDoc Error: ${err}`);
        });
    return result;
}