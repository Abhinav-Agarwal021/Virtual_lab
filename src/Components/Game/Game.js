import React, { useState, useEffect } from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from './Game.module.css';

export const Game = () => {

    const { unityProvider, loadingProgression, isLoaded, sendMessage, requestFullscreen } = useUnityContext({
        loaderUrl: "/Natural_Convection/Build/Natural_Convection.loader.js",
        dataUrl: "/Natural_Convection/Build/Natural_Convection.data",
        frameworkUrl: "/Natural_Convection/Build/Natural_Convection.framework.js",
        codeUrl: "/Natural_Convection/Build/Natural_Convection.wasm",
    });

    useEffect(() => {
        const A = document.querySelector('.Abubble');
        if (A) {
            A.style.left = `${Number(ammeter / 5)}px`;
        }
        const V = document.querySelector('.Vbubble');
        if (V) {
            V.style.left = `${Number(voltmeter / 5)}px`;
        }
        const T = document.querySelector('.Tbubble');
        if (T) {
            T.style.left = `${Number(roomTemp / 4)}px`;
        }
    })

    const [ammeter, setAmmeter] = useState(0)
    const [voltmeter, setVoltmeter] = useState(0)
    const [roomTemp, setRoomTemp] = useState(28)

    const getAmmeterReading = (value) => {
        sendMessage('Needle', 'AmReading', value);
        // sendMessage('Pipe', 'ChnagePipeDiameter', value * 10);
    }

    const changeAmmeterValue = (e) => {
        setAmmeter(e.target.value);
        getAmmeterReading(e.target.value);
    }

    const changeVoltmeterValue = (e) => {
        setVoltmeter(e.target.value);
    }

    const changeRTempValue = (e) => {
        setRoomTemp(e.target.value);
    }

    const EnterFullscreen = () => {
        requestFullscreen(true);
    }

    const EnterGame = () => {
        sendMessage('LevelLoader', 'LoadNextLevel');
        requestFullscreen(true);
    }

    return (
        <div className={styles.game}>
            <div className={styles.data}>
                <div className={styles.dataIntake}>
                    <div className={styles.heading}>
                        <div className={styles.Head}>Data Input</div>
                        <hr className={styles.border} />
                    </div>
                    <div className={styles.inputData}>
                        <div className={styles.slider}>
                            <div className={styles.Abubble}>
                                Current Input: {ammeter} A
                            </div>
                            <input type="range" min="0" max="1" step="0.2"
                                value={ammeter}
                                onChange={(e) => changeAmmeterValue(e)} />
                        </div>
                        <div className={styles.slider}>
                            <div className={styles.Vbubble}>
                                Voltage Input: {voltmeter} V
                            </div>
                            <input type="range" min="0" max="500" step="100"
                                value={voltmeter}
                                onChange={(e) => changeVoltmeterValue(e)} />
                        </div>
                        <div className={styles.slider}>
                            <div className={styles.Tbubble}>
                                Room Temperature: {roomTemp} ℃
                            </div>
                            <input type="range" min="28" max="32" step="1"
                                value={roomTemp}
                                onChange={(e) => changeRTempValue(e)} />
                        </div>
                    </div>
                </div>
                <div className={styles.btn} onClick={EnterGame}>
                    Start Machine
                </div>
            </div>
            <div className={styles.gameView}>
                <div className={styles.gameV}>
                    {
                        !isLoaded &&
                        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
                    }
                    <Unity
                        unityProvider={unityProvider}
                        style={{ visibility: isLoaded ? "visible" : "hidden", width: '100%', height: '100%' }}
                    />
                    {isLoaded && <div className={styles.FullScreen} onClick={EnterFullscreen}>
                        Enter Fullscreen mode
                    </div>}
                </div>
            </div>
        </div>
    )
}
