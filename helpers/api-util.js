import fs from 'fs';
import path from 'path';

export const getSales = async () => {
  // Doesn't work in production
  // const result = await fetch('http://localhost:3000/api/homepage/sales');
  // const sales = await result.json();

  const filePath = path.join(process.cwd(), 'data', 'sales.json');
  const fileData = await fs.readFileSync(filePath);
  const sales = await JSON.parse(fileData);

  return sales;
};
