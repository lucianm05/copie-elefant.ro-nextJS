import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.BASE_URL;

const getFileData = async (fileName) => {
  const filePath = path.join(process.cwd(), 'data', fileName);
  const fileData = await fs.readFileSync(filePath);
  const data = await JSON.parse(fileData);

  return data;
};

export const getSales = async () => {
  // Doesn't work in production
  // const result = await fetch(`${BASE_URL}/api/homepage/sales`);
  // const sales = await result.json();

  return await getFileData('sales.json');
};

export const getTopCategories = async () => {
  // Doesn't work in production
  // const result = await fetch(`${BASE_URL}/api/homepage/top-categories`);
  // const topCategories = await result.json();

  return await getFileData('top-categories.json');
};
