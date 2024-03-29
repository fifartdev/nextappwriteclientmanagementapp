import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_END_POINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export const account = new Account(client);
export const demoDb = new Databases(client);

export const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
export const COLLECTION_ID = process.env.NEXT_PUBLIC_COLLECTION_ID;
export const COLLECTION_JC_ID = process.env.NEXT_PUBLIC_COLLECTION_JC_ID;
export const COLLECTION_JOB_ID = process.env.NEXT_PUBLIC_COLLECTION_JOB_ID;
export const dynamic = "force-dynamic";
export { ID, Permission, Role } from "appwrite";
