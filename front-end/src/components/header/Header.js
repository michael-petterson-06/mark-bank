import React from 'react';
import styles from './Header.module.css';
import roitBank from './image/roitBank.png';
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
            <img src={ roitBank } alt="roit-bank" />
        </div>
        <div className={ styles.containerSearchHeader }>
            <form action="">
                <button><BsSearch/></button>
                <input type="text" placeholder='Busca'/>
            </form>
        </div>
    </header>
  )
}

export default Header;
