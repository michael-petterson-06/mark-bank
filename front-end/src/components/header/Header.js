import React from 'react';
import styles from './Header.module.css';
import roitBank from './image/Grupo 4.svg';
import menu from './image/menu.svg';
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className= { styles.containerHamburguer}>
            <div>
                <img className={ styles.menu } src={ menu } alt="menu" />
            </div>
            <img className={ styles.roitBank } src={ roitBank } alt="roit-bank" />
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
