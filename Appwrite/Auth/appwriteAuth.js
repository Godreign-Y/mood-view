import { ID } from "appwrite";
import { account } from "./appwriteConfig";

export async function signup(email, password, name = "") {
  await account.create(ID.unique(), email, password, name);
  return login(email, password);
}

export async function login(email, password) {
  return account.createEmailPasswordSession(email, password);
}

export async function logout() {
  try {
    await account.deleteSession("current");
  } catch (error) {
    // Ignore missing-session errors so logout remains safe to call.
    if (error?.code !== 401) {
      throw error;
    }
  }
}

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch (error) {
    if (error?.code === 401) {
      return null;
    }
    throw error;
  }
}

export async function getCurrentSession() {
  try {
    return await account.getSession("current");
  } catch (error) {
    if (error?.code === 401) {
      return null;
    }
    throw error;
  }
}
