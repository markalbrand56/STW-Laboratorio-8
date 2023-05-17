import React, { useEffect, useState } from "react"
import ilustrations from "../../assets/ilustrations"
import Joi from "joi"
import Maze from "../../components/Maze/Maze"
import styles from "./Game.module.css"
import Timer from "../../components/Timer/Timer"
import useForm from "../../hooks/useForm"
import { navigate } from "../../store/index"
import illustrations from "../../assets/ilustrations";

const schema = Joi.object({
    height: Joi.number().min(4).max(100).required(),
    width: Joi.number().min(4).max(100).required(),
    skin: Joi.string().required(),
    theme: Joi.string().required(),
    timeLimit: Joi.number().min(1).max(60).allow(null),
})

function Game() {
    const [mazeLayout, setMazeLayout] = useState(null)
    const form = useForm(schema)

    const getMaze = async (w, h) => {
        const url = `https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`
        const response = await fetch(url)
        return response.json()
    }

    const loadMaze = async () => {
        const maze = await getMaze(form.config.width, form.config.height)
        setMazeLayout(maze)
        form.clean()
    }

    useEffect(() => {
        console.log("CARGANDO EL MAZE")
        loadMaze()
    }, [])

    console.log(form.config.gameOver)

    useEffect(() => {
        console.log("desde el useEffect", form.config.gameOver)
        if(form.config.gameOver || form.config.win) navigate("/result")
    }, [form.config.gameOver, form.config.win])

    useEffect(() => {
        document.addEventListener("scroll", (event) => {
            event.preventDefault()
            event.stopPropagation()
        })
    }, [])

    let skinIllustration = null
    switch (form.config.skin) {
        case "Default":
            skinIllustration = ilustrations.player.default
            break
        case "var1":
            skinIllustration = ilustrations.player.var1
            break
        case "var2":
            skinIllustration = ilustrations.player.var2
            break
        default:
            skinIllustration = ilustrations.player.default
    }

    return (
        <div className={styles.Outer}>
            <img
                src={
                    form.config.theme === "Theme 1"
                        ? illustrations.goal.Theme1
                        : illustrations.goal.Theme2
                }
                alt="Ilustration"
                className={styles.Illustration}
            />
            <div className={styles.Container}>
                {form.config.timeLimitEnabled && (
                    <Timer
                        timeLimit={form.config.timeLimit}
                        onChange={form.setValue}
                        win={form.config.win}
                    />
                )}
                {mazeLayout && !form.config.gameOver && (
                    <Maze
                        json={mazeLayout}
                        height={form.config.height}
                        width={form.config.width}
                        onWin={form.setValue}
                        theme={form.config.theme}
                        skin={form.config.skin}
                    />
                )}
            </div>
            <img
                src={skinIllustration}
                alt={skinIllustration}
                className={styles.Illustration}
            />
        </div>
    )
}

export default Game
