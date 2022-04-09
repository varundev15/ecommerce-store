import styles from "./styles.module.scss";
import nike from "./assets/nike-removebg-preview.png";
import shoe from "./assets/shoe.png";
import shoe1 from "./assets/shoe1.png";
import shoe2 from "./assets/shoe2.png";
import rightshoe from "./assets/heroShoe2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShop,
  faHeart,
  faArrowRight,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.nav_wrapper}>
        <img src={nike} alt="" />
        <ul className={styles.nav_menu}>
          <li className={styles.nav_item}>Home</li>
          <li className={styles.nav_item}>Men </li>
          <li className={styles.nav_item}>women</li>
          <li className={styles.nav_item}>Kids</li>
        </ul>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faSearch} className={styles.faicons} />
          <FontAwesomeIcon icon={faHeart} className={styles.faicons} />
          <FontAwesomeIcon icon={faShop} className={styles.faicons} />
        </div>
      </div>
   <div className={styles.main}>
   <div className={styles.left_content}>
        <h3>Nike Shoe Collection</h3>
        <h1>
          Find Your <br />
          Stride
        </h1>
        <p className={styles.price}>
          $249.99 <del>$449.99</del>
        </p>

        <div>
          <button className={styles.checkout}>
            Check out now &nbsp;
            <FontAwesomeIcon icon={faArrowRight} className={styles.arr} />
          </button>
          <button className={styles.bag}>
            <FontAwesomeIcon icon={faBagShopping} />
          </button>
        </div>

        <div className={styles.shoelist}>
          <div className={styles.circle}>
            <img src={shoe} alt="" className={styles.cirshoe} />
          </div>
          <div className={styles.circle}>
            <img src={shoe1} alt="" className={styles.cirshoe} />
          </div>
          <div className={styles.circle}>
            <img src={shoe2} alt="" className={styles.cirshoe} />
          </div>
        </div>
      </div>
      <div className={styles.rightcont}>
        <h1 className={styles.textimg}>NIKE</h1>
        <img src={rightshoe} alt="" />
        <button className={styles.org}>+</button>
      </div>
   </div>
      

     <Features/>
    <Ourstore/>
    <Newproducts/>
    </div>
  );
}



function Features(){
  return(
    <div className={styles.features}>
       <h1 className={styles.brand}>Featured Items</h1>
       <div className={styles.cards}>
       <div className={styles.shoecard}>
         <div className={styles.cardimg}><img src={shoe} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
       <div className={styles.cardimg}><img src={shoe1} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>React Vision</h2>
         <h1>$250.00</h1>
       </div>
       <div className={styles.shoecard}>
       <div className={styles.cardimg}><img src={shoe2} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Sportswear Club</h2>
         <h1>$250.00</h1>
       </div>
       <div className={styles.shoecard}>
       <div className={styles.cardimg}><img src={shoe1} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Air Max 270</h2>
         <h1>$250.00</h1>
       </div>
       </div>
    </div>
  )
}


function Ourstore(){
  return(
    <div className={styles.ourstore}>
      <h1 className={styles.brand}>Our Store</h1>
      <ul className={styles.storelist}>
        <li className={styles.listitem +" "+ styles.selecteditem}>All</li>
        <li className={styles.listitem}>Male</li>
        <li className={styles.listitem}>Female</li>
        <li className={styles.listitem}>Kids</li>
      </ul>
      <div className={styles.storecards}>
      <div className={styles.shoecard}>
         <div className={styles.cardimg}><img src={shoe} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
         <div className={styles.cardimg}><img src={shoe2} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
         <div className={styles.cardimg}><img src={shoe1} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
         <div className={styles.cardimg}><img src={shoe2} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       
       <div className={styles.shoecard}>
         <div className={styles.cardimg}><img src={shoe} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
         <div className={styles.cardimgs}><img src={shoe2} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
         <div className={styles.cardimgs}><img src={shoe1} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
         <div className={styles.cardimgs}><img src={shoe2} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
         <div className={styles.cardimgs}><img src={shoe1} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
         <div className={styles.cardimgs}><img src={shoe} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
      </div>
    </div>
  )
}


function Newproducts(){
  return(
  <div className={styles.newproducts}>
       <h1 className={styles.brand}>New Products</h1>
       <div className={styles.cards}>
       <div className={styles.shoecard}>
         <div className={styles.cardimg}><img src={shoe} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Pegasus 38</h2>
         <h1>$250.00</h1>
       </div> 
       <div className={styles.shoecard}>
       <div className={styles.cardimg}><img src={shoe1} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>React Vision</h2>
         <h1>$250.00</h1>
       </div>
       <div className={styles.shoecard}>
       <div className={styles.cardimg}><img src={shoe2} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Sportswear Club</h2>
         <h1>$250.00</h1>
       </div>
       <div className={styles.shoecard}>
       <div className={styles.cardimg}><img src={shoe1} alt="" /></div>
         <p><span>	&#9733;</span>{"{4.0}"}</p>
         <h2>Air Max 270</h2>
         <h1>$250.00</h1>
       </div>
       </div>
    </div>
  )
}


export default App;
