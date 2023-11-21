import { Client, Account, Databases, ID } from 'appwrite';

export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65421f7c73886bb0d16e');

export const account = new Account(client);
export const databases = new Databases(client);
export const id = ID;
