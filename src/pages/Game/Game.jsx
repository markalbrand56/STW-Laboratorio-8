import React, { useEffect, useState } from "react"
import { useStoreon } from "storeon/react"
import Joi from "joi"
import Maze from "../../components/Maze/Maze"
import styles from "./Game.module.css"
import Timer from "../../components/Timer/Timer"
import useForm from "../../hooks/useForm"
import {navigate} from "../../store/index"

const schema = Joi.object({
    height: Joi.number().min(4).max(100).required(),
    width: Joi.number().min(4).max(100).required(),
    skin: Joi.string().required(),
    theme: Joi.string().required(),
    timeLimit: Joi.number().min(1).max(60).allow(null),
})

function Game() {
    const { config } = useStoreon("config")
    const [mazeLayout, setMazeLayout] = useState(null)
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

    const getMaze = async (w, h) => {
        const url = `https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`
        const response = await fetch(url)
        return response.json()
    }

    const loadMaze = async () => {
        const maze = await getMaze(config.width, config.height)
        setMazeLayout(maze)
        form.onChange("gameOver")({ target: { value: false } })
        form.onChange("win")({ target: { value: false } })
    }

    useEffect(() => {
        console.log("CARGANDO EL MAZE")
        loadMaze()
    }, [])

    console.log(config)
    console.log(mazeLayout)

    if (form.values.win || form.values.gameOver) {
        setTimeout(() => {
            navigate("/result")
        }, 3000)
    }

    return (
        <div className={styles.Container}>
            {config.timeLimitEnabled && (
                <Timer
                    timeLimit={config.timeLimit}
                    onChange={form.onChange("gameOver")}
                    win={form.values.win}
                />
            )}
            {mazeLayout && !form.values.gameOver && (
                <Maze
                    json={mazeLayout}
                    height={config.height}
                    width={config.width}
                    onWin={form.onChange("win")}
                />
            )}
        </div>
    )
}

export default Game
