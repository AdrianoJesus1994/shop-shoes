import {Product} from './../interfaces/product';

const products: Product[] = [
  {
    id: 1,
    product_name: 'Tenis Adidas',
    product_description: 'Tenis de alta qualidade para os melhores clientes.',
    price: 150.5,
    sale_price: 120.5,
    principal_image:
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
    other_images: [
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
    ],
    evaluations: [],
    comments: [
      {
        author_name: 'Carlos Eduardo',
        comment_text: 'Produto de excelente qualidade',
      },
      {
        author_name: 'João Pedro',
        comment_text: 'Correspondeu às minha expectativas',
      },
    ],
  },
  {
    id: 2,
    product_name: 'Tenis Nike',
    product_description: 'Tenis de alta qualidade para os melhores clientes.',
    price: 150.5,
    principal_image:
      'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
    other_images: [
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
    ],
    evaluations: [],
    comments: [],
  },
  {
    id: 3,
    product_name: 'Tenis Nike',
    product_description: 'Tenis de alta qualidade para os melhores clientes.',
    price: 150.5,
    principal_image:
      'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
    other_images: [
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
    ],
    evaluations: [],
    comments: [],
  },
  {
    id: 4,
    product_name: 'Tenis Nike',
    product_description: 'Tenis de alta qualidade para os melhores clientes.',
    price: 150.5,
    principal_image:
      'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
    other_images: [
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
    ],
    evaluations: [],
    comments: [],
  },
  {
    id: 5,
    product_name: 'Tenis Nike',
    product_description: 'Tenis de alta qualidade para os melhores clientes.',
    price: 150.5,
    principal_image:
      'https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom1.jpg?ts=1569489111?ims=544x',
    other_images: [
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
      'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&ims=544x',
    ],
    evaluations: [],
    comments: [],
  },
];
class ProductService {
  /**
   * List all products
   */
  getProducts(): Product[] {
    return products;
  }

  /**
   *Get Product By Id
   *
   * @param {number} id Product Id
   * @returns {(Product | null)} Product finded
   * @memberof ProductService
   */
  getById(id: number): Product | null {
    return products.find((p) => p.id === id) || null;
  }

  /**
   *Find products with name
   *
   * @param {string} name Product Name
   * @returns {Product[]} List products
   * @memberof ProductService
   */
  findByName(name: string): Product[] {
    if (!name || name.trim() === '') {
      return [];
    }
    return products.filter(
      (p) =>
        p.product_name.toLowerCase().startsWith(name.toLowerCase()) ||
        p.product_name.toLowerCase().endsWith(name.toLowerCase()),
    );
  }
}
export default new ProductService();
