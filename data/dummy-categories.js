const DUMMY_CATEGORIES = [
  {
    id: 1,
    title: 'Carte',
    subcategories: ['Cărțile lunii iulie', 'Cartea bate filmul', 'Târg de carte pentru copii', 'Târgul  cărților de dezvoltare personală'],
  },
  {
    id: 2,
    title: 'Carte străină',
    subcategories: ['Foreign books'],
  },
  {
    id: 3,
    title: 'Jucării, Copii & Bebe',
    subcategories: ['Jucării', 'Categorii', 'LEGO', 'Branduri populare', 'Articole bebe', 'Scutece'],
  },
  {
    id: 4,
    title: 'Parfumuri',
    subcategories: ['Parfumuri pentru femei', 'Top branduri femei', 'Premium brands femei', 'Parfumuri Unisex', 'Parfumuri pentru bărbați', 'Top branduri bărbați', 'Premium brands bărbați'],
  },
  {
    id: 5,
    title: 'Cosmetice',
    subcategories: ['Lorem', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum sit', 'Lorem ipsum amet'],
  },
  {
    id: 6,
    title: 'Ceasuri',
    subcategories: ['Lorem', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum sit', 'Lorem ipsum amet'],
  },
  {
    id: 7,
    title: 'Electro',
    subcategories: ['Lorem', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum sit', 'Lorem ipsum amet'],
  },
  {
    id: 8,
    title: 'Home&Deco',
    subcategories: ['Lorem', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum sit', 'Lorem ipsum amet'],
  },
  {
    id: 9,
    title: 'Fashion',
    subcategories: ['Lorem', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum sit', 'Lorem ipsum amet'],
  },
  {
    id: 10,
    title: 'Nutriție',
    subcategories: ['Lorem', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum sit', 'Lorem ipsum amet'],
  },
  {
    id: 11,
    title: 'Băuturi & Gourmet',
    subcategories: ['Lorem', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum sit', 'Lorem ipsum amet'],
  },
  {
    id: 12,
    title: 'Outlet',
    subcategories: ['Lorem', 'Lorem ipsum', 'Lorem ipsum dolor', 'Lorem ipsum sit', 'Lorem ipsum amet'],
  },
];

export const getAllCategories = () => {
  return DUMMY_CATEGORIES;
}

export const getSelectedCategory = (id) => {
  return DUMMY_CATEGORIES.find(category => category.id === +id);
}