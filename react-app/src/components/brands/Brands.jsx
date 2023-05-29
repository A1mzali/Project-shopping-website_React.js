import './brands.css'
import hm from './../../img/brands/HM.png' 
import obey from './../../img/brands/Obey.png' 
import shopify from './../../img/brands/Shopify.png' 
import lacoste from './../../img/brands/Lacoste.png' 
import lefis from './../../img/brands/Levis.png' 
import amazon from './../../img/brands/Amazon.png' 

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className='brands__list'>
          <li><a href="#!"><img src={hm} alt="hm" /></a></li>
          <li><a href="#!"><img src={obey} alt="hm" /></a></li>
          <li><a href="#!"><img src={shopify} alt="hm" /></a></li>
          <li><a href="#!"><img src={lacoste} alt="hm" /></a></li>
          <li><a href="#!"><img src={lefis} alt="hm" /></a></li>
          <li><a href="#!"><img src={amazon} alt="hm" /></a></li>

        </ul>
      </div>
    </section>
  );
}
 
export default Brands;