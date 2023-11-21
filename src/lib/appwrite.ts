import { env } from '$env/dynamic/public';
import { Client, Account, Databases, ID } from 'appwrite';

export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject(env.PUBLIC_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const id = ID;
