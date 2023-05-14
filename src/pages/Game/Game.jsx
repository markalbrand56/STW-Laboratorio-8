import React, { useState, useEffect } from "react"
import { useStoreon } from "storeon/react"
import Maze from "../../components/Maze/Maze"
import styles from "./Game.module.css"

function Game() {
    const { config } = useStoreon("config")
    const [mazeLayout, setMazeLayout] = useState(null)

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

    return (
        <div className={styles.Container}>
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
