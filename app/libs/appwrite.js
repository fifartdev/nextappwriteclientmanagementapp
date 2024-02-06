import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fifartapp.eu/v1")
  .setProject("65a6bec5bf8ecaaa9cf2");

export const account = new Account(client);
export const demoDb = new Databases(client);

export const DATABASE_ID = "65bcf48d892a272917a6";
export const COLLECTION_ID = "65bcf49387bf977d8159";

export { ID } from "appwrite";
