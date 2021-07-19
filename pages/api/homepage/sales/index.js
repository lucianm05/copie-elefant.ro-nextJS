import { connectDatabase, getAllDocuments } from '../../../../helpers/db-util';

const handler = async (req, res) => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Conexiunea cu baza de date nu a putut fi stabilită.' });
    return;
  }

  if (req.method === 'GET') {
    let sales;

    try {
      sales = await getAllDocuments(client, 'sales', {});
      res.status(200).json({ message: 'Produsele au fost preluate cu succes.', sales: sales });
    } catch (error) {
      res.status(500).json({ message: 'Preluarea produselor a eșuat.' });
    }
  }

  client.close();
};

export default handler;
