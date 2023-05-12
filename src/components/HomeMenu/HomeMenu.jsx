import React from "react"
import { navigate } from "../../store/index"
import styles from "./HomeMenu.module.css"

function HomeMenu() {
    const classNameStartButton = `${styles.StartButton} ${styles.Button}`
    const classNameConfigButton = `${styles.ConfigButton} ${styles.Button}`

    const handleStartButtonClick = () => {
        navigate("/game")
    }

    const handleConfigButtonClick = () => {
        navigate("/config")
    }

    return (
        <div className={styles.HomeMenu}>
            <h1>Welcome</h1>
            <div className={styles.Buttons}>
                <button
                    className={classNameStartButton}
                    type="button"
                    onClick={handleStartButtonClick}
                >
                    Start
                </button>
                <button
                    className={classNameConfigButton}
                    type="button"
                    onClick={handleConfigButtonClick}
                >
                    Settings
                </button>
            </div>
        </div>
    )
}

export default HomeMenu
