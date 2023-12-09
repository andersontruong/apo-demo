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

/**
 * Fetches documents from Contentful matching a Content Type.
 * @param contentType
 */
export async function getDocsByType(contentType: string) {
    return getDocs({ content_type: contentType });
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
    const fieldsQuery = Object.fromEntries(
        Object.entries(fields).map(
            (pair) => {
                return [`fields.${pair[0]}`, pair[1]]
            }
        )
    );
    const query = { ...typeQuery, ...fieldsQuery };
    
    return getDocs(query);
}

export async function getDB() {
    return (await cmaClient.getSpace(process.env.SPACE_ID)).getEnvironment('master');
}

export async function createDoc(contentType: string, fields: Object) {
    let result: any = undefined;
    (await getDB()).createEntry(contentType, { fields: fields })
        .then((entry) => {
            entry.publish()
                .then(entry => {
                    result = entry;
                })
                .catch((err) => {
                    entry.delete();
                    console.error(`createDoc Error: ${err}`);
                });
        })
        .catch((err) => {
            console.error(`createDoc Error: ${err}`);
        });
    return result;
}