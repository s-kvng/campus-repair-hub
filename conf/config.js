const conf = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  databaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  serviceUsersCollectionId: String(
    process.env.NEXT_PUBLIC_APPWRITE_SERVICE_USERS_COLLECTION_ID
  ),
  normalUsersCollectionId: String(
    process.env.NEXT_PUBLIC_APPWRITE_NORMAL_USERS_COLLECTION_ID
  ),
  serviceRequestsCollectionId: String(
    process.env.NEXT_PUBLIC_APPWRITE_SERVICE_REQUESTS_COLLECTION_ID
  ),
};

export default conf;
