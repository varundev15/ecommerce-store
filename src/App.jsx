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
import {faFacebookF,faInstagram,faGithub,faTwitter,faCcVisa, faGooglePay,   faCcAmazonPay} from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState } from "react";
import axios from "axios";
import { getProducts } from './utils/APIRoutes';

function App() {

  const [productDataStore, setproductDataStore] = useState([]);
  
  useEffect(() => {
    let getAllProducts = async () => {
      let res = await axios.get(getProducts);
      if (res.data.status === true) {
        setproductDataStore(res.data.data);
      }
      else {
        alert("Network error boiiiiiii");
      }
    }
    getAllProducts();
  }, [])

  console.log(productDataStore);

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


      <Features data={productDataStore} />
      <Ourstore data={productDataStore} />
      <Newproducts data={productDataStore}/>
      <Footer/>
    </div>
  );
}



function Features({data,showpopup,setPopup}) {
  
  return (
    <div className={styles.features}>
      <h1 className={styles.brand}>Featured Items</h1>
      <div className={styles.cards} >
      {
          data.slice(5,9).map((ele) => {
            return (
              <div key={ele._id} className={styles.shoecard} >
                <div className={styles.cardimg}><img src={ele.images[0]} alt="" /></div>
                <p><span>	&#9733;</span>{`{${Math.floor(Math.random()*5)+1}.0}`}</p>
                <h2>{ele.name}</h2>
                <h1>₹{ele.price}</h1>
              </div>
            )
          })
        }
       
      </div>
    </div>
  )
}


function Ourstore({ data }) {
  return (
    <div className={styles.ourstore}>
      <h1 className={styles.brand}>Our Store</h1>
      <ul className={styles.storelist}>
        <li className={styles.listitem + " " + styles.selecteditem}>All</li>
        <li className={styles.listitem}>Male</li>
        <li className={styles.listitem}>Female</li>
        <li className={styles.listitem}>Kids</li>
      </ul>
      <div className={styles.storecards}>
        {
          data.slice(0,9).map((ele) => {
            return (
              <div key={ele._id} className={styles.shoecard}>
                <div className={styles.cardimg}><img src={ele.images[0]} alt="" /></div>
                <p><span>	&#9733;</span>{`{${Math.floor(Math.random()*5)+1}.0}`}</p>
                <h2>{ele.name}</h2>
                <h1>₹{ele.price}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


function Newproducts({data}) {
  return (
    <div className={styles.newproducts}>
      <h1 className={styles.brand}>New Products</h1>
      <div className={styles.cards}>
      {
          data.slice(14,18).map((ele) => {
            return (
              <div key={ele._id} className={styles.shoecard}>
                <div className={styles.cardimg}><img src={ele.images[0]} alt="" /></div>
                <p><span>	&#9733;</span>{`{${Math.floor(Math.random()*5)+1}.0}`}</p>
                <h2>{ele.name}</h2>
                <h1>₹{ele.price}</h1>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.top_sec}>
        <div className={styles.socialicons}>
        <FontAwesomeIcon icon={faFacebookF} className={styles.icn+" "+styles.selecteditem}/>
        <FontAwesomeIcon icon={faInstagram} className={styles.icn}/>
        <FontAwesomeIcon icon={faGithub} className={styles.icn}/>
        <FontAwesomeIcon icon={faTwitter} className={styles.icn}/>
        </div>
        <img src={nike} alt="" />
        <div className={styles.pay}>
        <FontAwesomeIcon icon={faCcVisa} className={styles.icon}/>
        <FontAwesomeIcon icon={faGooglePay} className={styles.icon}/>
        <FontAwesomeIcon icon={faCcAmazonPay} className={styles.icon}/>
       
        </div>
 
      </div>
      <div className={styles.cont}>
        <div className={styles.data}>
          <h1>Quick Links</h1>
          <ul className={styles.menu}>
            <li className={styles.item}>My Account</li>
            <li className={styles.item}>My Cart</li>
            <li className={styles.item}>Wish List</li>
            <li className={styles.item}>Track It</li>
            <li className={styles.item}>Blog</li>
          </ul>
        </div>
        <div className={styles.data}>
          <h1>Helpful Links</h1>
          <ul className={styles.menu}>
            <li className={styles.item}>Shop</li>
            <li className={styles.item}>Privacy Policy</li>
            <li className={styles.item}>FAQ</li>
            <li className={styles.item}>Terms & Conditions</li>
            <li className={styles.item}>Contact us</li>
          </ul>
        </div>
        <div className={styles.data}>
          <h1>Our Information</h1>
          <ul className={styles.menu}>
            <li className={styles.item}>4NHL VISSHAL CITY,MY ROAD44</li>
            <li className={styles.item}>+91887876872</li>
            <li className={styles.item}>help@gmail.com</li>
          </ul>
        </div>
        <div className={styles.data}>
          <h1>Get In Touch</h1>
          <ul className={styles.menu}>
            <li className={styles.item}>Your Feedback </li>
            <li className={styles.item}>&#9733;&#9733;&#9733;&#9733;&#9733;</li>
           
          </ul>
        </div>
      </div>
      <p>All @Copyrights Reserved</p>
    </footer>
  )
}


export default App;
