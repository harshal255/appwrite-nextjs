import config from '@/config';
import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') 
  .setProject(config.appwrite.projectID); //project id

const databases = new Databases(client);

export { databases };
