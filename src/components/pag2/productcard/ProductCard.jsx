import React, { useState } from 'react';
import styles from './productcard.module.css';

const ProductCard = ({ name, description, price, images, images2 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className={styles.imageContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.holaRectangle}>PRE-ORDER</div>
        <img
          src={isHovered && images2 ? images2[0] : images[0]}
          alt={`Imagen de ${name}`}
          className={styles.productImage}
        />  
      </div>
      <div className={styles.font}>
        <div className={styles.right}>
          <h2 className={styles.right2}>{name}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.left}>
          {isHovered ? (
            <p className={styles.shopNowText}>Shop Now</p>
          ) : (
            <p className={styles.price}>{price} €</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
