import React from "react"
import styles from "./Home.module.css"
import Button from "../../components/Button/Button"
import { navigate } from "../../store/index"
import illustrations from "../../assets/ilustrations"

function Home() {
    const handleStartButtonClick = () => {
        navigate("/game")
    }

    const handleConfigButtonClick = () => {
        navigate("/config")
    }

    return (
        <div className={styles.Container}>
            <img src={illustrations.backgrounds.background1} alt="Geralt" />
            <div className={styles.HomeMenu}>
                <img src={illustrations.logo.mainLogo} alt="Logo" />
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
            <img src={illustrations.backgrounds.background2} alt="Ciri" />
        </div>
    )
}

export default Home
