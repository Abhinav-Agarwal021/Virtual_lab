import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom"

export const Navbar = () => {

    const [searchExp, setSearchExp] = useState("")

    const handleSearch = () => {

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <nav className={`${styles.navbar} container`}>
            <div className={styles.brandStyle} to="/">
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
            <hr className={styles.logoLineBreak} />
            <div className={styles.navMenu}>
                <div className={styles.menuBtns}>
                    <Link to="/">
                        <button className={styles.btnss}>
                            Home
                        </button>
                    </Link>
                    <button className={styles.btnss}>
                        Contact Us
                    </button>
                    <button className={styles.btnss}>
                        Login
                    </button>
                </div>
                <div className={styles.searchBox}>
                    <input type="text" value={searchExp} placeholder='Search for an experiment' className={styles.searchInput} onChange={(e) => setSearchExp(e.target.value)} onKeyDown={handleKeyDown} />
                    <img src="/images/search-icon.png" alt="search" onClick={handleSearch} />
                </div>
            </div>
        </nav>
    )
}
