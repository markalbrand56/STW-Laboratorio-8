import React, { useState, useEffect } from "react"
import { useStoreon } from "storeon/react"
import Joi from "joi"
import Maze from "../../components/Maze/Maze"
import styles from "./Game.module.css"
import Timer from "../../components/Timer/Timer"
import useForm from "../../hooks/useForm"

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
    })

    const getMaze = async (w, h) => {
        const url = `https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`
        console.log(url)
        const response = await fetch(url)
        const json = await response.json()
        return json
    }

    const loadMaze = async () => {
        const maze = await getMaze(config.width, config.height)
        setMazeLayout(maze)
    }

    useEffect(() => {
        console.log("CARGANDO EL MAZE")
        loadMaze()
    }, [])

    console.log(config)
    console.log(mazeLayout)

    const verifyGame = () => {
        if (form.values.gameOver && form.values.timeLimitEnabled && (form.values.timeLimit !== 0)) {
            form.onChange("gameOver")(false)
        }
    }

    useEffect(() => {
        verifyGame()
    }, [])

    return (
        <div className={styles.Container}>
            {config.timeLimitEnabled && <Timer timeLimit={config.timeLimit} onChange={form.onChange("gameOver")} />}
            {mazeLayout && (
                <Maze
                    json={mazeLayout}
                    height={config.height}
                    width={config.width}
                />
            )}
        </div>
    )
}

export default Game
