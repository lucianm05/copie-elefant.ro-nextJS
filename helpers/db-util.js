import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDatabase() {
  const client = await MongoClient.connect(MONGODB_URI);

  return client;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const result = await db.collection(collection).find().sort(sort).toArray();

  return result;
}