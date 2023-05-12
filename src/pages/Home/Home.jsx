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
        <div className={styles.HomeMenu}>
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
    )
}

export default Home
