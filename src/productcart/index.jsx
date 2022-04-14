import React from 'react';
import styles from "./styles.module.scss";
import nike from "../assets/nike-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import dataContext from '../context/data';

function ProductCart() {

  const [productDataStore, setproductDataStore, selectedProduct, setselectedProduct] = useContext(dataContext);

  console.log(selectedProduct);

  return (
    <div className={styles.productcart}>
      <div className={styles.productcard}>
        <div className={styles.nav_wrapper}>
          <img src={nike} alt="" />
          <ul className={styles.nav_menu}>
            <li className={styles.nav_item + " " + styles.selitem}> Women</li>
            <li className={styles.nav_item}>Men </li>
            <li className={styles.nav_item}>Collection</li>
            <li className={styles.nav_item}>Kids</li>
          </ul>
        </div>
        <div className={styles.main}>
          <div className={styles.left_cont}>
            <h1 className={styles.brand}>{productDataStore[selectedProduct].name}</h1>
            <p className={styles.desc}>{getInnerText(productDataStore[selectedProduct].desc)}</p>
            <div className={styles.flex}>
              <button className={styles.btn}>  <FontAwesomeIcon icon={faAdd} className={styles.arr} />Add to Cart</button>
              <span>₹{productDataStore[selectedProduct].price}</span>
            </div>
          </div>
          <div className={styles.right_cont}>
            <img src={productDataStore[selectedProduct].images[0]} alt="" />
          </div>





        </div>
        <div className={styles.bottomcards}>
          <div className={styles.card}>
            <img src={productDataStore[selectedProduct].images[3]} alt="" />
          </div>
          <div className={styles.card}>
            <img src={productDataStore[selectedProduct].images[4]} alt="" />
          </div>
          <div className={styles.card}>
            <img src={productDataStore[selectedProduct].images[5]} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

const getInnerText = (node) => {
  console.log(node.split('<p>')[2]);
  return(node.split('<p>')[2].replace('</p><br>',''))
}

export default ProductCart;