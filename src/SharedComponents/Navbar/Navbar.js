import React from 'react'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

export const Navbar = () => {

    return (
        <nav className={`${styles.navbar} container`}>
            <div className={styles.logos}>
                <img className={styles.eLogo} alt="" src="/Images/Elabslogo.png" />
                <hr className={styles.logoBreaker} />
                <div className={styles.brandStyle}>
                    <img className={styles.logo} alt="" src="/Images/Indian_Institute_of_Technology_Roorkee_logo.png"></img>
                    <span className={styles.logoText}>
                        <span className={styles.logoTextHindi}>
                            <span>भारतीय</span>
                            <span>प्रौद्योगिकी</span>
                            <span>संस्थान</span>
                            <span>रुड़की</span>
                        </span>
                        <span className={styles.logoTextEng}>Indian Instiute of Technology Roorkee</span>
                    </span>
                </div>
            </div>
            <hr className={styles.logoLineBreak} />
            <div className={styles.navMenu}>
                <div className={styles.leftMenu}>
                    <Link to="/">
                        <button className={styles.btnss}>
                            Home
                        </button>
                    </Link>
                    <button className={styles.btnss}>
                        About
                    </button>
                    <button className={styles.btnss}>
                        Exeriments
                    </button>
                    <button className={styles.btnss}>
                        Contact Us
                    </button>
                </div>
                <div className={styles.rightMenu}>
                    <button className={styles.btnss}>
                        Login
                    </button>
                    <button className={styles.btnss}>
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    )
}
