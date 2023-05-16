import React from "react"
import Joi from "joi"
import Button from "../../components/Button/Button"
import useForm from "../../hooks/useForm"
import styles from "./Result.module.css"
import { navigate } from "../../store/index"

const schema = Joi.object({
    height: Joi.number().min(4).max(100).required(),
    width: Joi.number().min(4).max(100).required(),
    skin: Joi.string().required(),
    theme: Joi.string().required(),
    timeLimit: Joi.number().min(1).max(60).allow(null),
})

function Result() {
    const form = useForm(schema, {
        height: 4,
        width: 4,
        skin: "default",
        theme: "default",
        timeLimit: null,
        timeLimitEnabled: false,
        gameOver: false,
        win: false,
    })

    const handleButton = () => {
        form.onChange("gameOver")({ target: { value: false } })
        form.onChange("win")({ target: { value: false } })
        navigate("/")
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Result}>
                <div className={styles.Title}>
                    {form.values.win ? "You Win!" : "Game Over"}
                </div>
                <div className={styles.Subtitle}>
                    {form.values.win ? "Congratulations!" : "Try again"}
                </div>
            </div>
            <Button onClick={handleButton}> Return </Button>
        </div>
    )
}

export default Result
