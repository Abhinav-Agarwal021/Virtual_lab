import React from 'react'
import styles from "./Home.module.css"

export const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.offer}>
                <div className={styles.headOffer}>
                    <div className={styles.text}>
                        What do we offer
                    </div>
                </div>
            </div>
        </div>
    )
}
