import React, { useState } from 'react'
import styles from "./ExperimentDetails.module.css"
import data from '../../Data.json'
import MathJax from 'react-mathjax';
import { Quiz } from '../../SharedComponents/Quiz/Quiz';

export const ExperimentDetails = () => {

    var url = window.location.pathname;
    var result = url.split('/');
    var index = result[result.length - 1];
    var id = result[result.length - 2];

    const [selected, setSelected] = useState(0)

    const options = ["Theory", "Experimental Setup", "Experimental Procedure", "Simulator", "Observations", "Calculations", "Assessment"];

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                {data.data[id].experiments[index].name}
            </div>
            <div className={styles.content}>
                <div className={styles.sidebar}>
                    {options.map((option, idx) => (
                        <div key={idx} className={`${styles.options} ${selected === idx && styles.selected}`} onClick={() => setSelected(idx)}>
                            {option}
                            {selected === idx && <hr className={styles.border} style={{ width: 8 * (option.length) }} />}
                        </div>
                    ))}
                </div>
                <div className={styles.data}>
                    {selected === 0 ?
                        <div className={styles.expContent}>
                            <div className={styles.aimHead}>
                                Aim:
                            </div>
                            <div className={styles.aimContent}>
                                {data.data[id].experiments[index].aim.map((data, idx) => (
                                    <li key={idx}>{data}</li>
                                ))}
                            </div>
                            <br />
                            <div className={styles.theoryHead}>
                                Theory:
                            </div>
                            <div className={styles.theoryContent}>
                                {data.data[id].experiments[index].theory[0].th1.map((data, idx) => (
                                    <div key={idx} className={styles.contentData}>{data}</div>
                                ))}
                                {data.data[id].experiments[index].theory[0].formula1.map((data, idx) => (
                                    <MathJax.Provider key={idx}>
                                        <MathJax.Node formula={data} />
                                    </MathJax.Provider>
                                ))}
                                {data.data[id].experiments[index].theory[0].th2.map((data, idx) => (
                                    <div key={idx} className={styles.contentData}>{data}</div>
                                ))}
                            </div>
                        </div>
                        : selected === 1 ?
                            <div className={styles.setup}>
                                <div className={styles.aimHead}>
                                    Experimental Setup:
                                </div>
                                <div className={styles.aimContent}>
                                    {data.data[id].experiments[index].experimentalSetup.map((data) => (
                                        <li>{data}</li>
                                    ))}
                                </div>
                            </div>
                            : selected === 2 ?
                                <div className={styles.procedure}>
                                    <div className={styles.aimHead}>
                                        Experimental Procedure:
                                    </div>
                                    <div className={styles.aimContent}>
                                        {data.data[id].experiments[index].experimantalProcedure.map((data) => (
                                            <li>{data}</li>
                                        ))}
                                    </div>
                                </div>
                                : selected === 6 ?
                                    <div className={styles.quiz}>
                                        <Quiz subject={id} experiment={index} />
                                    </div>
                                    : <div></div>}
                </div>
            </div>
        </div>
    )
}
