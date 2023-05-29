import styles from './card.module.css'

import arrowImg from './../../img/icons/arrow.svg'

const Card = (props) => {
  console.log(props)
  return ( 
    <section className={styles.card}>
      <a href="#!" className={styles.card__link}></a>
      <img className={styles.card__img} src={props.img} alt="Cat-ya" />

      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>
            {props.title}
          </div>
          <div className={styles.card__secondary}>Explore Now!</div>
        </div>

        <div className={styles.card__icon}>
          <img src={arrowImg} alt="IMG" />
        </div>
      </div>
    </section>
   );
}
 
export default Card;