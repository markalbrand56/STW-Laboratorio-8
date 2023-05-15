import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Entity from "../Entity/Entity"
import styles from "./Maze.module.css"

function Maze({ json, width, height }) {
    const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 })
    const containerWidth = parseInt(width, 10) * 2 + parseInt(width, 10) + 1
    const containerHeight = height * 2 + 1
    const updateMaze = (jsonM, newPlayerPosition) => {
        const newMaze = jsonM
        newMaze[playerPosition.y][playerPosition.x] = " "
        newMaze[newPlayerPosition.y][newPlayerPosition.x] = "p"
        return newMaze
    }

    const handleKeyDown = (event) => {
        const { key } = event
        console.log("position", playerPosition)
        console.log("dentro del handleKeyDown", key)
        switch (key) {
            case "ArrowUp":
                if (json[playerPosition.y - 1][playerPosition.x] === " ") {
                    updateMaze(json, {
                        x: playerPosition.x,
                        y: playerPosition.y - 1,
                    })
                    setPlayerPosition({
                        ...playerPosition,
                        y: playerPosition.y - 1,
                    })
                }
                break
            case "ArrowDown":
                if (json[playerPosition.y + 1][playerPosition.x] === " ") {
                    updateMaze(json, {
                        x: playerPosition.x,
                        y: playerPosition.y + 1,
                    })
                    setPlayerPosition({
                        ...playerPosition,
                        y: playerPosition.y + 1,
                    })
                }
                break
            case "ArrowLeft":
                if (json[playerPosition.y][playerPosition.x - 1] === " ") {
                    updateMaze(json, {
                        x: playerPosition.x - 1,
                        y: playerPosition.y,
                    })
                    setPlayerPosition({
                        ...playerPosition,
                        x: playerPosition.x - 1,
                    })
                }
                break
            case "ArrowRight":
                if (json[playerPosition.y][playerPosition.x + 1] === " ") {
                    updateMaze(json, {
                        x: playerPosition.x + 1,
                        y: playerPosition.y,
                    })
                    setPlayerPosition({
                        ...playerPosition,
                        x: playerPosition.x + 1,
                    })
                }
                break
            default:
                break
        }
    }

    useEffect(() => {
        updateMaze(json, playerPosition)
    }, [playerPosition])

    return (
        <div
            className={styles.MazeContainer}
            style={{
                gridTemplateColumns: `repeat(${containerWidth}, 50px)`,
                gridTemplateRows: `repeat(${containerHeight}, 50px)`,
            }}
            onKeyDown={handleKeyDown}
            tabIndex="0"
        >
            {json.map((row) =>
                row.map((col) => {
                    switch (col) {
                        case "p":
                            return <Entity type="player" />
                        case "g":
                            return <Entity type="goal" />
                        case "+":
                            return <Entity type="column" />
                        case "-":
                            return <Entity type="horizontalWall" />
                        case "|":
                            return <Entity type="verticalWall" />
                        case " ":
                            return <Entity type="trail" />
                        default:
                            return null
                    }
                })
            )}
        </div>
    )
}

Maze.propTypes = {
    json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

export default Maze
