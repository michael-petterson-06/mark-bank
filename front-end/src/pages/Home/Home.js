import React from 'react';
import roitBank from '../../image/roitBank.png';
import styles from './Home.module.css';

const Home = () => {
    return (
        <main className={styles.home}>
            <header className={styles.header}>
                <div>
                <img src={ roitBank } alt="roit-bank" />
                </div>
            </header>
            <h1>Home</h1>
        </main>
        
    )
}

export default Home;