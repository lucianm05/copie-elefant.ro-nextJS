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
    let topCategories;

    try {
      topCategories = await getAllDocuments(client, 'top-categories', {});
      res.status(200).json({ message: 'Categoriile au fost preluate cu succes.', topCategories: topCategories });
    } catch (error) {
      res.status(500).json({ message: 'Preluarea categoriilor a eșuat.' });
    }
  }

  client.close();
};

export default handler;
