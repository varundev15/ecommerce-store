import React from 'react';
import styles from "./styles.module.scss";
import nike from "../assets/nike-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";


function ProductCart() {
  return (
   <div className={styles.productcart}>
     <div className={styles.productcard}>
       <div className={styles.nav_wrapper}>
       <img src={nike} alt="" />
        <ul className={styles.nav_menu}>
          <li className={styles.nav_item +" "+ styles.selitem}> Women</li>
          <li className={styles.nav_item}>Men </li>
          <li className={styles.nav_item}>Collection</li>
          <li className={styles.nav_item}>Kids</li>
        </ul>
       </div>
      <div className={styles.main}>
      <div className={styles.left_cont}>
         <h1 className={styles.brand}>Nike Air  <br/>Max Pre-Day</h1>
         <p className={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam error libero laudantium ipsa reprehenderit! Neque explicabo eum quidem fuga impedit ab aspernatur ipsa ducimus iusto dolor exercitationem, veritatis quo doloribus?</p>
         <div className={styles.flex}>
           <button className={styles.btn}>  <FontAwesomeIcon icon={faAdd} className={styles.arr}/>Add to Cart</button>
           <span>₹11,578</span>
         </div>
       </div>
       <div className={styles.right_cont}>
       <img src= "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5f71f037-a14d-4b95-abc8-32fe6eafdc43/jordan-why-not-zer04-pf-basketball-shoe-0bpnfr.png" alt="" />
     </div>

     

     
   
      </div>
      <div className={styles.bottomcards}>
        <div className={styles.card}>
<img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cec3f0ac-d4ba-425f-bfb6-24b89ecbb0c3/jordan-why-not-zer04-pf-basketball-shoe-0bpnfr.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fd6a8cc4-572d-4b37-8b36-1c0973ed5b14/jordan-why-not-zer04-pf-basketball-shoe-0bpnfr.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/681bc071-7114-48cd-8e65-d696a6206165/jordan-why-not-zer04-pf-basketball-shoe-0bpnfr.png" alt="" />
        </div>
      </div>
     </div>
     
   </div>
  )
}

export default ProductCart;