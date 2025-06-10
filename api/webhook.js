import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST allowed');
  }

  try {
    const data = req.body;

    await client.connect();
    const db = client.db('lupa_database'); // Change if needed
    const collection = db.collection('offers');

    await collection.insertOne(data);

    res.status(200).send('Saved to MongoDB');
  } catch (error) {
    console.error('MongoDB error:', error);
    res.status(500).send('Error saving to MongoDB');
  }
}
