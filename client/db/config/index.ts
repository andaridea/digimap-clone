import { MongoClient, ServerApiVersion } from "mongodb"
const uri = "mongodb+srv://deaaapuspita17:LkpuX28bZWov8v30@cluster0.r51mz44.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
