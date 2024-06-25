import { avatar } from "@nextui-org/react";
import conf from "../conf/config";
import { Client, Account, ID, Avatars, Databases, Query } from "appwrite";

const appwriteClient = new Client();

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);
export const avatars = new Avatars(appwriteClient);
export const databases = new Databases(appwriteClient);

export class AppwriteService {
  //create a new record od user inside appwrite
  async createUserAccount({ email, password, name }) {
    try {
      const userAccount = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      return userAccount;
    } catch (error) {
      throw new Error(error);
    }
  }

  //
  async createNormalUser({ email, password, name, firstname, lastname }) {
    try {
      const userAuthAccount = await this.createUserAccount({
        email: email,
        password: password,
        name: name,
      });

      if (!userAuthAccount) throw Error;

      const avatarUrl = avatars.getInitials(name);
      console.log(firstname, avatarUrl, lastname, email);
      const newNormalUser = await databases.createDocument(
        conf.databaseId,
        conf.normalUsersCollectionId,
        ID.unique(),
        {
          email: email,
          accountId: userAuthAccount.$id,
          avatar: avatarUrl,
          firstname: firstname,
          lastname: lastname,
        }
      );

      return newNormalUser;
    } catch (error) {
      throw new Error(error);
    }
  }

  //Register Service user
  async createServiceUser(
    email,
    password,
    username,
    firstname,
    lastname,
    phone,
    address,
    bio,
    availability,
    category
  ) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
      if (!newAccount) throw Error;

      const avatarUrl = avatars.getInitials(username);

      const newUser = await databases.createDocument(
        conf.databaseId,
        conf.serviceUsersCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          firstname,
          lastname,
          phone,
          address,
          bio,
          availability,
          category,
          email,
          avatar: avatarUrl,
        }
      );

      console.log("logging user data -> ", newUser);
      return newUser;
    } catch (error) {
      console.log("create user error -> ", error);
    }
  }

  async login(email, password) {
    // login the user on appwrite
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Session error: " + error);
      throw new Error(error);
    }
  }

  async loggedIn() {
    try {
      const data = await this.getCurrentUser();
      return Boolean(data);
    } catch (error) {}
    return false;
  }

  async getCurrentUser() {
    try {
      const currentAccount = await account.get();

      if (!currentAccount) throw Error;

      const currentUser = await databases.listDocuments(
        conf.databaseId,
        conf.normalUsersCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );

      console.log("current user: " + currentUser.documents);
      if (!currentUser) throw Error;
      return currentUser.documents[0];
    } catch (error) {
      console.log("getCurrentUser error -> ", error);
    }
    return null;
  }

  //
  async getCurrentServiceUser() {
    try {
      const currentAccount = await account.get();

      if (!currentAccount) throw Error;

      const currentUser = await databases.listDocuments(
        conf.databaseId,
        conf.serviceUsersCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );

      if (!currentUser) throw Error;
      return currentUser.documents[0];
    } catch (error) {
      console.log("getCurrentUser error -> ", error);
    }
    return null;
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (error) {
      console.log("logout error -> ", error);
    }
  }

  /***** Requests  ******/
  async getIncomingRequests(accountId) {
    try {
      const incomingRequest = await databases.listDocuments(
        conf.databaseId,
        conf.serviceRequestsCollectionId,
        [Query.equal("repairer", [accountId]), Query.equal("pending", true)]
      );

      return incomingRequest.documents;
    } catch (error) {
      console.log("request document error -> ", error);
    }
    return null;
  }

  async getClaimedRequests(accountId) {
    try {
      const claimedRequest = await databases.listDocuments(
        conf.databaseId,
        conf.serviceRequestsCollectionId,
        [Query.equal("repairer", [accountId]), Query.equal("claimed", true)]
      );

      return claimedRequest.documents;
    } catch (error) {
      console.log("request document error -> ", error);
    }
    return null;
  }

  async getCompletedRequests(accountId) {
    console.log("id to complete->", accountId);
    try {
      const completedRequest = await databases.listDocuments(
        conf.databaseId,
        conf.serviceRequestsCollectionId,
        [Query.equal("repairer", [accountId]), Query.equal("done", true)]
      );

      console.log("completed ->: " + completedRequest.documents);
      return completedRequest.documents;
    } catch (error) {
      console.log("request document error -> ", error);
    }
    return null;
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;

// Register User
// export const createUser = async (email, password, username) => {
//   try {
//     const newAccount = await account.create(
//       ID.unique(),
//       email,
//       password,
//       username
//     );
//     if (!newAccount) throw Error;

//     const avatarUrl = avatars.getInitials(username);
//     await signIn(email, password);

//     const newUser = await databases.createDocument(
//       config.databaseId,
//       config.usersCollectionId,
//       ID.unique(),
//       {
//         accountId: newAccount.$id,
//         username,
//         email,
//         avatar: avatarUrl,
//       }
//     );

//     console.log("logging user data -> ", newUser);
//     return newUser;
//   } catch (error) {
//     console.log("create user error -> ", error);
//   }
// };

// export const getCurrentUser = async () => {
//   try {
//     const currentAccount = await account.get(); // get the current account that is in session(currently logged in)
//     console.log("trying to find  a session ", currentAccount);
//     if (!currentAccount) throw Error;

//     const currentUser = await databases.listDocuments(
//       config.databaseId,
//       config.usersCollectionId,
//       [Query.equal("accountId", currentAccount.$id)]
//     );

//     console.log("trying to find  the document of user -> ", currentUser);
//     if (!currentUser) throw Error;

//     return currentUser.documents[0];
//   } catch (error) {
//     console.log(error);
//   }
// };
