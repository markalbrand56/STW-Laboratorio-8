import React from "react"
import styles from "./Home.module.css"
import Button from "../../components/Button/Button"
import { navigate } from "../../store/index"

function Home() {
    const handleStartButtonClick = () => {
        navigate("/game")
    }

    const handleConfigButtonClick = () => {
        navigate("/config")
    }

    return (
        <div className={styles.Container}>
            <img src="src/assets/Geralt bc.png" alt="Geralt"/>
            <div className={styles.HomeMenu}>
                <img src="src/assets/TW3 Logo.png" alt="Logo"/>
                <h1>Welcome</h1>
                <div className={styles.Buttons}>
                    <Button type="primary" onClick={handleStartButtonClick}>
                        Start
                    </Button>
                    <Button type="secondary" onClick={handleConfigButtonClick}>
                        Settings
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
