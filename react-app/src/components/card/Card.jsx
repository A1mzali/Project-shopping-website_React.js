import styles from './card.module.css'
import cat01Img from './../../img/categories/cat-01.jpg'
import arrowIMg from './../../img/icons/arrow.svg'

const Card = () => {
  return ( 
    <section className={styles.card}>
      <a href="#!" className={styles.card__link}></a>
      <img className={styles.card__img} src={cat01Img} alt="Cat-ya" />
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>Hoodies & Sweetshirt</div>
          <div className={styles.card__secondary}>Explore Now!</div>
        </div>

        <div className={styles.card__icon}>
          <img src={arrowIMg} alt="IMG" />
        </div>
      </div>
    </section>
   );
}
 
export default Card;