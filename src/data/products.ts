export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  imageURL: string;
  category: 'Niche' | 'Designer' | 'Exclusive' | 'Popular';
  type: string;
  gender: 'Hombre' | 'Mujer' | 'Unisex';
  prices: {
    [key: string]: number; // ml: price
  };
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  name: string;
  brand: string;
  size: string;
  price: number;
  quantity: number;
  imageURL: string;
}

export interface Promotion {
  id: string;
  name: string;
  description: string;
  prices: {
    [key: string]: number; // ml: price
  };
  items: string[]; // List of perfume names in the pack
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    brand: 'Antonio Banderas',
    name: 'Blue Seduction',
    description: 'Una fragancia fresca y seductora, perfecta para el uso diario.',
    imageURL: 'https://cl-dam-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/paris/629071999/variant/images/df1b0d01-4b21-4e73-a7ea-86bf18036fda/629071999-0000-001.jpg',
    category: 'Popular',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 2900, '5ml': 3500, '10ml': 4500 }
  },
  {
    id: '2',
    brand: 'Al Haramain',
    name: 'Amber Oud Gold Edition',
    description: 'Una fragancia oriental amaderada, lujosa y envolvente.',
    imageURL: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.51816.jpg',
    category: 'Exclusive',
    type: 'EDP',
    gender: 'Unisex',
    prices: { '3ml': 4900, '5ml': 6500, '10ml': 9500 }
  },
  {
    id: '3',
    brand: 'Armaf',
    name: 'Club de Nuit Intense Man',
    description: 'Un aroma potente y masculino, conocido por su gran proyección.',
    imageURL: 'https://media.falabella.com/falabellaCL/143607945_01/w=1200,h=1200,fit=pad',
    category: 'Popular',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 4500, '5ml': 5500, '10ml': 8500 }
  },
  {
    id: '4',
    brand: 'Armaf',
    name: 'Odyssey Sky Mandarin',
    description: 'Frescura cítrica con un toque moderno y vibrante.',
    imageURL: 'https://maisonarabia.com.pe/cdn/shop/files/ODYSSEY.webp?v=1758905908',
    category: 'Popular',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 4500, '5ml': 5500, '10ml': 8500 }
  },
  {
    id: '5',
    brand: 'Armani',
    name: 'Acqua Di Gio Parfum',
    description: 'La evolución de un clásico. Frescura marina profunda y elegante.',
    imageURL: 'https://media.falabella.com/falabellaCL/80130332_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'Parfum',
    gender: 'Hombre',
    prices: { '3ml': 6900, '5ml': 8900, '10ml': 13900 },
    featured: true
  },
  {
    id: '6',
    brand: 'Azzaro',
    name: 'The most Wanted edp',
    description: 'Una fragancia intensa y magnética para el hombre que lo quiere todo.',
    imageURL: 'https://media.falabella.com/falabellaCL/15617134_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 6500, '5ml': 8900, '10ml': 14900 },
    featured: true
  },
  {
    id: '7',
    brand: 'Calvin Klein',
    name: 'Be',
    description: 'Frescura minimalista y atemporal, ideal para cualquier ocasión.',
    imageURL: 'https://media.falabella.com/falabellaCL/70140_1/w=1200,h=1200,fit=pad',
    category: 'Popular',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 3500, '5ml': 4900, '10ml': 5900 }
  },
  {
    id: '8',
    brand: 'Carolina Herrera',
    name: 'La Bomba',
    description: 'Una explosión de feminidad y elegancia audaz.',
    imageURL: 'https://media.falabella.com/falabellaCL/80562302_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Mujer',
    prices: { '3ml': 9900, '5ml': 13500, '10ml': 22900 },
    featured: true
  },
  {
    id: '9',
    brand: 'Carolina Herrera',
    name: '212 Men Heroes',
    description: 'Juventud y libertad en un aroma fresco y amaderado.',
    imageURL: 'https://media.falabella.com/falabellaCL/14936407_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 6500, '5ml': 7900, '10ml': 13500 }
  },
  {
    id: '10',
    brand: 'Carolina Herrera',
    name: '212 Vip Black',
    description: 'Energía nocturna y seducción urbana.',
    imageURL: 'https://media.falabella.com/falabellaCL/5964503_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 6900, '5ml': 9500, '10ml': 15900 }
  },
  {
    id: '11',
    brand: 'Carolina Herrera',
    name: '212 Woman Heroes',
    description: 'La esencia de la mujer moderna y valiente.',
    imageURL: 'https://media.falabella.com/falabellaCL/50044656_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Mujer',
    prices: { '3ml': 7500, '5ml': 9900 }
  },
  {
    id: '12',
    brand: 'Dior',
    name: 'Sauvage edp',
    description: 'Un clásico moderno. Frescura salvaje y nobleza amaderada.',
    imageURL: 'https://media.falabella.com/falabellaCL/6245092_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 9500, '5ml': 12500, '10ml': 21900 },
    featured: true
  },
  {
    id: '13',
    brand: 'French Avenue',
    name: 'Liquid Brun',
    description: 'Elegancia sofisticada con matices cálidos.',
    imageURL: 'https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/prd-cl/product-medias/87d45dbf-efdf-444c-a41c-d2a96a42bb87/MKDV367VEE/MKDV367VEE-1/1744154694815-MKDV367VEE-1-1.jpg',
    category: 'Exclusive',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 4500, '5ml': 5500, '10ml': 8500 }
  },
  {
    id: '14',
    brand: 'Hugo Boss',
    name: 'Bottled',
    description: 'El aroma del éxito. Clásico, versátil y masculino.',
    imageURL: 'https://media.falabella.com/falabellaCL/330635_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 5500, '5ml': 6900, '10ml': 12500 }
  },
  {
    id: '15',
    brand: 'Lattafa',
    name: 'Asad Bourbon',
    description: 'Una fragancia intensa con notas de especias y maderas.',
    imageURL: 'https://media.falabella.com/falabellaCL/148205536_01/w=1200,h=1200,fit=pad',
    category: 'Popular',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 3900, '5ml': 4500, '10ml': 6900 }
  },
  {
    id: '16',
    brand: 'Lattafa',
    name: 'Eclaire',
    description: 'Dulce y sofisticada, una delicia olfativa.',
    imageURL: 'https://cosmetic.cl/cdn/shop/files/png_8a5bcbde-a5c3-4c1d-8872-6dbc3615440e_1000x.png?v=1735914793',
    category: 'Popular',
    type: 'EDP',
    gender: 'Mujer',
    prices: { '3ml': 3900, '5ml': 4500, '10ml': 6900 }
  },
  {
    id: '17',
    brand: 'Lattafa',
    name: 'Khamrah Qahwa',
    description: 'Una mezcla exquisita de café y especias orientales.',
    imageURL: 'https://media.falabella.com/falabellaCL/129611109_01/w=1200,h=1200,fit=pad',
    category: 'Popular',
    type: 'EDP',
    gender: 'Unisex',
    prices: { '3ml': 3500, '5ml': 4900, '10ml': 6500 }
  },
  {
    id: '18',
    brand: 'Lattafa',
    name: 'Yara Tous',
    description: 'Frutal y tropical, ideal para días soleados.',
    imageURL: 'https://media.falabella.com/falabellaCL/125084923_01/w=1200,h=1200,fit=pad',
    category: 'Popular',
    type: 'EDP',
    gender: 'Mujer',
    prices: { '3ml': 3500, '5ml': 3900, '10ml': 5500 }
  },
  {
    id: '19',
    brand: 'Mancera',
    name: 'Wind Wood',
    description: 'Frescura verde y amaderada con un toque de cuero.',
    imageURL: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.24778.jpg',
    category: 'Niche',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 7900, '5ml': 10900, '10ml': 17900 }
  },
  {
    id: '20',
    brand: 'Polo',
    name: 'Polo 67 edp',
    description: 'Un aroma deportivo y elegante para el hombre activo.',
    imageURL: 'https://media.falabella.com/falabellaCL/80135639_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 6900, '5ml': 8900, '10ml': 14900 }
  },
  {
    id: '21',
    brand: 'Tous',
    name: 'LoveMe edp',
    description: 'Una fragancia tierna y sofisticada, como una joya.',
    imageURL: 'https://cl-dam-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/640x0/filters:quality(75)/paris/727187999/variant/images/58a235e0-ac53-4917-b9f0-9ccc0f73b709/727187999-0000-001.jpg',
    category: 'Designer',
    type: 'EDP',
    gender: 'Mujer',
    prices: { '3ml': 4900, '5ml': 5900, '10ml': 9500 }
  },
  {
    id: '22',
    brand: 'Valentino',
    name: 'Born in Roma edt',
    description: 'Elegancia romana con un toque rebelde y moderno.',
    imageURL: 'https://media.falabella.com/falabellaCL/15109058_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 7500, '5ml': 10500, '10ml': 16900 },
    featured: true
  },
  {
    id: '23',
    brand: 'Versace',
    name: 'Dylan Blue',
    description: 'Un aroma mediterráneo, fuerte y carismático.',
    imageURL: 'https://media.falabella.com/falabellaCL/5572340_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 3900, '5ml': 4900, '10ml': 7500 }
  },
  {
    id: '24',
    brand: 'Versace',
    name: 'Flame edp',
    description: 'Pasión y fuerza en una fragancia ardiente.',
    imageURL: 'https://media.falabella.com/falabellaCL/7206204_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 5900, '5ml': 8500, '10ml': 12500 }
  },
  {
    id: '25',
    brand: 'Yves Saint Laurent',
    name: 'Black Opium',
    description: 'Adictiva y misteriosa, con notas de café y flores blancas.',
    imageURL: 'https://media.falabella.com/falabellaCL/4696580_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Mujer',
    prices: { '3ml': 7500, '5ml': 9900, '10ml': 16500 }
  },
  {
    id: '26',
    brand: 'Yves Saint Laurent',
    name: 'Y EdP',
    description: 'Para el hombre que se atreve a soñar y a actuar.',
    imageURL: 'https://media.falabella.com/falabellaCL/8040402_1/w=1200,h=1200,fit=pad',
    category: 'Designer',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 7500, '5ml': 9900, '10ml': 16500 }
  },
  {
    id: '27',
    brand: 'Zara',
    name: 'Bogoss Vibrant Leather',
    description: 'Frescura frutal con un fondo de cuero suave.',
    imageURL: 'https://static.zara.net/assets/public/0438/41b9/8ed74acca5ec/46652f2eabc2/20210723999-000-e1/20210723999-000-e1.jpg?ts=1756458222868',
    category: 'Popular',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 2900, '5ml': 3500, '10ml': 4500 }
  },
  {
    id: '28',
    brand: 'Zara',
    name: 'Seoul',
    description: 'Aroma acuático y fresco, ideal para el verano.',
    imageURL: 'https://static.zara.net/assets/public/1da6/7470/9de04588a04f/2186ba9b708f/20210026999-000-e1/20210026999-000-e1.jpg?ts=1756456996023',
    category: 'Popular',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 2900, '5ml': 3500, '10ml': 4500 }
  },
  {
    id: '29',
    brand: 'Zara',
    name: 'Uomo Red',
    description: 'Energía y calidez en una fragancia moderna.',
    imageURL: 'https://static.zara.net/photos/assets/public/b0a1/3d71/f11e4de49ccd/b8cde7f3458e/20210770999-000-e1/20210770999-000-e1.jpg?ts=1756457914793',
    category: 'Popular',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 2900, '5ml': 3500, '10ml': 4500 }
  },
  {
    id: '30',
    brand: 'Zara',
    name: 'Uomo Silver',
    description: 'Elegancia metálica y fresca.',
    imageURL: 'https://static.zara.net/assets/public/513a/2104/71eb436c9e5b/023a3164be0a/20210737999-000-e1/20210737999-000-e1.jpg?ts=1756457914616',
    category: 'Popular',
    type: 'EDT',
    gender: 'Hombre',
    prices: { '3ml': 2900, '5ml': 3500, '10ml': 4500 }
  },
  {
    id: '31',
    brand: 'Zara',
    name: 'Oud Vibrant Leather',
    description: 'La profundidad del oud con la frescura del cuero.',
    imageURL: 'https://static.zara.net/assets/public/ee02/c90a/c4394819b8c1/c94ddee5a255/20210722999-e1/20210722999-e1.jpg?ts=1736416612330&w=1126',
    category: 'Popular',
    type: 'EDP',
    gender: 'Hombre',
    prices: { '3ml': 2900, '5ml': 3500, '10ml': 4500 }
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: 'promo-top-ventas',
    name: 'Pack Top Ventas',
    description: 'Los favoritos indiscutibles de nuestros clientes en un solo pack.',
    prices: { '3ml': 19900, '5ml': 27900 },
    items: ['Azzaro The Most Wanted EdP Intense', 'Dior Sauvage EdP', 'Valentino Born In Roma EdT']
  },
  {
    id: 'promo-femenino',
    name: 'Pack Femenino',
    description: 'Una selección elegante y seductora diseñada para ella.',
    prices: { '3ml': 17900, '5ml': 23900 },
    items: ['La Bomba Carolina Herrera', 'Black Opium YSL', 'Eclaire Lattafa']
  },
  {
    id: 'promo-low-cost',
    name: 'Pack Iniciación Low Cost',
    description: 'La mejor forma de empezar en el mundo de los decants sin gastar de más.',
    prices: { '3ml': 8900, '5ml': 11500 },
    items: ['Dylan Blue Versace', 'Seoul Zara', 'Calvin Klein BE']
  },
  {
    id: 'promo-arabes',
    name: 'Pack Árabes',
    description: 'Fragancias orientales con una proyección y duración excepcionales.',
    prices: { '3ml': 10500, '5ml': 13500 },
    items: ['Khamrah Qahwa Lattafa', 'Mandarin Sky Lattafa', 'Liquid Brun French Avenue']
  },
  {
    id: 'promo-nocturno',
    name: 'Pack Nocturno',
    description: 'Aromas intensos y magnéticos ideales para la noche y eventos especiales.',
    prices: { '3ml': 16500, '5ml': 22900 },
    items: ['Azzaro The Most Wanted EdP Intense', 'Eros Flame Versace', '212 Vip Black']
  },
  {
    id: 'promo-versatil',
    name: 'Pack Versátil',
    description: 'Fragancias que se adaptan a cualquier situación, desde el gimnasio hasta una cena.',
    prices: { '3ml': 20500, '5ml': 26500 },
    items: ['Polo 67', 'Sauvage Dior EdP', 'Y EdP Yves Saint Laurent']
  },
  {
    id: 'promo-oficina',
    name: 'Pack Oficina',
    description: 'Aromas limpios, profesionales y agradables para el día a día laboral.',
    prices: { '3ml': 18900, '5ml': 25900 },
    items: ['Valentino Born In Roma', 'Wind Wood Mancera', 'Acqua Di Gio Parfum']
  }
];

export const WHATSAPP_NUMBER = '56951936433';
