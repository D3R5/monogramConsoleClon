import ProductCard from '../productcard/ProductCard';
import styles from './productlist.module.css'
import image1 from '../../../assets/pag2/p1/p1.jpeg';
import image2 from '../../../assets/pag2/p1/p2.jpeg';
import image3 from '../../../assets/pag2/p2/p1.jpeg';
import image4 from '../../../assets/pag2/p2/p2.jpeg';
import image5 from '../../../assets/pag2/p3/p1.jpeg';
import image6 from '../../../assets/pag2/p3/p2.jpeg';
import image7 from '../../../assets/pag2/p4/p1.jpeg';
import image8 from '../../../assets/pag2/p4/p2.jpeg';

const products = [
  {
    name: 'MINI CONSOLE',
    description: 'Ideal for everyday shortcuts. Adaptable to any workflow.',
    price: 19.99,
    images: [image1],
    images2: [image2]
  },
  {
    name: 'AUDIO CONSOLE',
    description: 'Ideal for music & audio. Adaptable to any workflow.',
    price: 29.99,
    images: [image3],
    images2: [image4]
  },
  {
    name: 'PHOTO CONSOLE',
    description: 'Ideal for photo & video. Adaptable to any workflow.',
    price: 29.99,
    images: [image5],
    images2: [image6]
  },
  {
    name: 'VIDEO CONSOLE',
    description: 'Ideal for Video & Film. Adaptable to any workflow.',
    price: 29.99,
    images: [image7],
    images2: [image8]
  },
];

const ProductList = () => {
  return (
    <div className={styles.productGrid}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          price={product.price}
          images={product.images}
          images2={product.images2} 
        />
      ))}
    </div>
  );
};

export default ProductList;
