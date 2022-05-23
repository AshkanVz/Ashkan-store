import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footernav.module.css';
//icon
import Bag from '../assets/icons/bag.svg';
import Mag from '../assets/icons/mag.svg';
import Acc from '../assets/icons/accessory.svg';
import Credit from '../assets/icons/credit.svg';
import Store from '../assets/icons/shopping.svg';


const Footernav = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
            <Link to="/main"><img className={styles.image} src={Bag} alt="bag" /></Link>
            <Link to="/main"><img className={styles.image} src={Mag} alt="mag" /></Link>
            <Link to="/main"><img className={styles.image} src={Acc} alt="acc" /></Link>
            <Link to="/main"><img className={styles.image} src={Credit} alt="credit" /></Link>
            <Link to="/products"><img className={styles.image} src={Store} alt="store" /></Link>
            </div>
           
        </div>
    );
};

export default Footernav;

