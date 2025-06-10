export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Only POST allowed');
  }

  try {
    const data = req.body;
    console.log('Webhook received:', data);
    res.status(200).send('Received');
  } catch (error) {
    res.status(500).send('Error');
  }
}
