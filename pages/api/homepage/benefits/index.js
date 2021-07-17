import { connectDatabase, getAllDocuments } from '../../../../helpers/db-util';

const handler = async (req, res) => {
  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: 'Conexiunea cu baza de date nu a putut fi stabilită.' });
    return;
  }

  let benefits;

  try {
    benefits = await getAllDocuments(client, 'benefits', {});
    res.status(200).json({ message: 'Beneficiile au fost preluate cu succes.', benefits: benefits });
  } catch (error) {
    res.status(500).json({ message: 'Preluarea beneficiilor a eșuat.' });
  }

  client.close();
};

export default handler;
