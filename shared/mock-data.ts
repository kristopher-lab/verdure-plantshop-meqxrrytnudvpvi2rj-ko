import type { Product } from './types';
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod_01',
    name: 'Monstera Deliciosa',
    slug: 'monstera-deliciosa',
    description: 'Iconic for its large, glossy, heart-shaped leaves that develop characteristic splits or holes. A must-have for any plant enthusiast.',
    price: 3500,
    images: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Monstera_deliciosa2.jpg/1280px-Monstera_deliciosa2.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Monstera_deliciosa2.jpg/1280px-Monstera_deliciosa2.jpg',
    ],
    category: 'Indoor',
    tags: ['Partial Shade', 'Air Purifying'],
    variants: [
      { id: 'var_01a', name: '6" Pot', sku: 'MD-S-01', price: 3500, inventory: 15 },
      { id: 'var_01b', name: '10" Pot', sku: 'MD-L-01', price: 6500, inventory: 8 },
    ],
  },
  {
    id: 'prod_02',
    name: 'Snake Plant',
    slug: 'sansevieria-trifasciata',
    description: 'Extremely hardy and low-maintenance, the Snake Plant features stiff, upright leaves and is known for its air-purifying qualities.',
    price: 2800,
    images: [
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_(Sansevieria_trifasciata_'Laurentii').jpg/1280px-Snake_Plant_(Sansevieria_trifasciata_'Laurentii').jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_(Sansevieria_trifasciata_'Laurentii').jpg/1280px-Snake_Plant_(Sansevieria_trifasciata_'Laurentii').jpg",
    ],
    category: 'Indoor',
    tags: ['Low Light', 'Air Purifying', 'Pet-Friendly'],
    variants: [
      { id: 'var_02a', name: '4" Pot', sku: 'SP-S-02', price: 2800, inventory: 20 },
      { id: 'var_02b', name: '8" Pot', sku: 'SP-L-02', price: 5200, inventory: 10 },
    ],
  },
  {
    id: 'prod_03',
    name: 'Fiddle Leaf Fig',
    slug: 'ficus-lyrata',
    description: 'A trendy and dramatic plant with large, violin-shaped leaves. It makes a stunning statement piece in any bright room.',
    price: 7500,
    images: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Starr_031108-0130_Ficus_lyrata.jpg/1280px-Starr_031108-0130_Ficus_lyrata.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Starr_031108-0130_Ficus_lyrata.jpg/1280px-Starr_031108-0130_Ficus_lyrata.jpg',
    ],
    category: 'Indoor',
    tags: ['Full Sun', 'Partial Shade'],
    variants: [
      { id: 'var_03a', name: '3ft Tall', sku: 'FLF-M-03', price: 7500, inventory: 5 },
      { id: 'var_03b', name: '5ft Tall', sku: 'FLF-L-03', price: 15000, inventory: 3 },
    ],
  },
  {
    id: 'prod_04',
    name: 'Echeveria "Lola"',
    slug: 'echeveria-lola',
    description: 'A beautiful rosette-forming succulent with pale, silvery-green leaves that have a hint of pink and lavender. Perfect for sunny windowsills.',
    price: 1200,
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Echeveria_elegans_-_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Echeveria_elegans_-_1.jpg',
    ],
    category: 'Succulents',
    tags: ['Full Sun'],
    variants: [
      { id: 'var_04a', name: '2" Pot', sku: 'ECH-S-04', price: 1200, inventory: 30 },
    ],
  },
  {
    id: 'prod_05',
    name: 'Pothos "Marble Queen"',
    slug: 'epipremnum-aureum-marble-queen',
    description: 'A popular and easy-to-care-for vining plant with heart-shaped leaves variegated with creamy white. Great for hanging baskets.',
    price: 2200,
    images: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Money_Plant_(Epipremnum_aureum)_4.jpg/960px-Money_Plant_(Epipremnum_aureum)_4.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Money_Plant_(Epipremnum_aureum)_4.jpg/960px-Money_Plant_(Epipremnum_aureum)_4.jpg',
    ],
    category: 'Indoor',
    tags: ['Partial Shade', 'Low Light', 'Air Purifying'],
    variants: [
      { id: 'var_05a', name: '6" Hanging Basket', sku: 'PQ-M-05', price: 2200, inventory: 18 },
    ],
  },
  {
    id: 'prod_06',
    name: 'Bird of Paradise',
    slug: 'strelitzia-nicolai',
    description: 'Bring a tropical vibe indoors with this large, upright plant featuring banana-like leaves. A true showstopper.',
    price: 8500,
    images: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Strelitzia_nicolai_3.jpg/960px-Strelitzia_nicolai_3.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Strelitzia_nicolai_3.jpg/960px-Strelitzia_nicolai_3.jpg',
    ],
    category: 'Indoor',
    tags: ['Full Sun'],
    variants: [
      { id: 'var_06a', name: '10" Pot', sku: 'BOP-L-06', price: 8500, inventory: 7 },
    ],
  },
  {
    id: 'prod_07',
    name: 'Bunny Ear Cactus',
    slug: 'opuntia-microdasys',
    description: 'A charming cactus that grows in pads resembling bunny ears, covered in fuzzy glochids instead of sharp spines.',
    price: 1800,
    images: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Opuntia_microdasys_3.jpg/1280px-Opuntia_microdasys_3.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Opuntia_microdasys_3.jpg/1280px-Opuntia_microdasys_3.jpg',
    ],
    category: 'Cacti',
    tags: ['Full Sun'],
    variants: [
      { id: 'var_07a', name: '4" Pot', sku: 'BEC-S-07', price: 1800, inventory: 25 },
    ],
  },
  {
    id: 'prod_08',
    name: 'Calathea Orbifolia',
    slug: 'calathea-orbifolia',
    description: 'Known for its large, round leaves with beautiful silver stripes. A statement plant that is also pet-friendly.',
    price: 4000,
    images: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Calathea_orbifolia_2.jpg/960px-Calathea_orbifolia_2.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Calathea_orbifolia_2.jpg/960px-Calathea_orbifolia_2.jpg',
    ],
    category: 'Indoor',
    tags: ['Partial Shade', 'Pet-Friendly'],
    variants: [
      { id: 'var_08a', name: '6" Pot', sku: 'CO-M-08', price: 4000, inventory: 12 },
    ],
  },
];