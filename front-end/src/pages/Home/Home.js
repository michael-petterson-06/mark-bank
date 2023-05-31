import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/header/Header';
import AsideOptions from '../../components/asideOptions/AsideOptions';
import AsideDatas from '../../components/asideDatas/AsideDatas';



const Home = () => {
   
    return (
        <main className={styles.home}>
            <Header/>
            <AsideOptions/>
            <AsideDatas/>
        </main>
        
   )

}

export default Home;