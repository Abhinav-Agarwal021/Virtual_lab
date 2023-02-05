import React, { useState } from 'react'
import styles from "./Experiments.module.css"

export const Experiments = () => {

    const [searchExp, setSearchExp] = useState("")

    const handleSearch = () => {

    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className={styles.subjects}>
            <div className={styles.header}>
                <div className={styles.heading}>
                    Subjects
                </div>
                <div className={styles.searchBox}>
                    <input type="text" value={searchExp} placeholder='search for a subject' className={styles.searchInput} onChange={(e) => setSearchExp(e.target.value)} onKeyDown={handleKeyDown} />
                    <img src="/images/search-icon.png" alt="search" onClick={handleSearch} />
                </div>
            </div>
            <div className={styles.allSubjects}>
                <div className={styles.subCard}>
                    <div className={styles.heading}>
                        Heat Transfer
                    </div>
                    <div className={styles.description}>
                        Heat transfer is the physical process of transferring heat energy from one body or substance to another. It plays a crucial role in a wide range of applications, including energy systems, thermal management, and industrial processes.
                    </div>
                    <div className={styles.progress}>
                        <div className={styles.progressBox}>
                            83%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
