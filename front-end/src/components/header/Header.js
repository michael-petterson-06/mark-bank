import React from 'react';
import styles from './Header.module.css';
import roitBank from './image/Grupo 4.svg';
import menu from './image/menu.svg';
import lupa from './image/lupa-header.svg';
import brasil from './image/brazil.svg';
import foto from './image/foto.png';
import setaBaixo from './image/seta-baixo.svg';



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
                <div>
                  <img src={ lupa } alt="lupinha" />
                </div>
                <input type="text" placeholder='Busca'/>
            </form>
            
           <button>
              <span>
                <img src={brasil} alt="Bandeira do Brasil"/>
              </span>
              <span>
                <img src={ setaBaixo } alt="Setinha para baixo"/>
              </span>
           </button>
           
            <img className={ styles.fotoPerfil } src={ foto } alt="foto perfil" />
        </div>
    </header>
  )
}

export default Header;
