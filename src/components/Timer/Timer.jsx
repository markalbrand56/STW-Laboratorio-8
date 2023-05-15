import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./Timer.module.css"

function Timer({ timeLimit, onChange }) {
    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] = React.useState(0)

    const limit = new Date().getTime() + timeLimit * 1000

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = limit - now

            if (distance < 0) {
                clearInterval(interval)
                setSeconds(0)
                setMinutes(0)
                onChange({ target: { value: true } })
                return
            }

            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const formatNumber = (number) => {
        if (number < 10) {
            return `0${number}`
        }
        return number
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Timer}>
                {formatNumber(minutes)}:{formatNumber(seconds)}
            </div>
        </div>
    )
}

Timer.propTypes = {
    timeLimit: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Timer
