import { MongoClient, ServerApiVersion } from "mongodb"
const uri = process.env.MONGO_URI;

if(!uri) {
    throw new Error("MONGO_URI is not provided")
}
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const db = client.db("gc02_fase3")

export const getCollection = (collectionName: string) => {
  return db.collection(collectionName)
}