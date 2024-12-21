const config = {
    appwrite: {
        projectID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
        databaseID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
        collectionID: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID,
    },
};

export default config;
