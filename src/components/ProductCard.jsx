/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router';
import styles from '../components/styles/ProductCard.module.css';


function ProductCard({id,title, price, description, image, rating}) {
  const navigate = useNavigate();

  const productHandler = () => {
    navigate(`/products/${id}`);
  }

  // console.log(Math.round(rating.rate))
  function renderStars(ratings) {
    const yellowStar = "⭐"; // Emoji for yellow star
    const whiteStar = "☆";  // Emoji for white star
  
    return yellowStar.repeat(ratings) + whiteStar.repeat(5 - ratings);
  }

  return (
    <div className={styles.cardContainer} onClick={productHandler}>
      <img className={styles.prodImg} src={image} alt="" />
      <div className={styles.cardTitle}>
        <div className={styles.prodSection}>
            <h4 className={styles.prodTitle}>{title}</h4>
            <p className={styles.prodRatings}><span>{renderStars(Math.round(rating.rate))}</span>({rating.count})</p>
        </div>
        <h2 className={styles.prodPrice}>${price}</h2>
      </div>
      <p className={styles.cardDesc}>
      {description}
      </p>
      <button className={styles.cardBtn}>Add to cart</button>
    </div>
  )
}

export default ProductCard
