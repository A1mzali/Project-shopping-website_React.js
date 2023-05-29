import './baner.css'
import banerImg from './../../img/images/baner-img.jpg'


const Baner = () => {
  return (
    <section className="baner">
      <div className="container">
        <div className="baner__content">
          <div className="baner__img">
            <img src={banerImg} alt="banerImg" />
          </div>

          <div className="baner__text">
            <div className="baner__title">
            <span className='baner__highlight'>
                <span>
                  PAYDAY
                </span>
              </span>
                 SALE NOW
            </div>
      

            <div className="baner__desc">
              Spend minimal $100 get 30% off
              voucher code for your next purchase
            </div>
            <div className="baner__daty">
              1 June - 10 June 2021
            </div>
            <div className="baner__desc">
              *Terms & Conditions apply
            </div>

            <div className="baner__btn-wrapper">
              <a href="#!">SHOP NOW</a>
            </div>


          </div>
        </div>
      </div>
    </section>
    );
}
 
export default Baner;