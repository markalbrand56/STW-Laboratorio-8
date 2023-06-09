import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Entity from "../Entity/Entity"
import styles from "./Maze.module.css"

function Maze({ json, width, height, onWin, theme, skin }) {
    const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 })
    const containerWidth = parseInt(width, 10) * 2 + parseInt(width, 10) + 1
    const containerHeight = height * 2 + 1

    const checkWin = (maze, position) => {
        if (maze[position.y][position.x] === "g") {
            onWin("win", true)
        }
    }

    const updateMaze = (jsonM, newPlayerPosition) => {
        const newMaze = jsonM
        checkWin(newMaze, newPlayerPosition)
        newMaze[playerPosition.y][playerPosition.x] = " "
        newMaze[newPlayerPosition.y][newPlayerPosition.x] = "p"
        return newMaze
    }

    const handleKeyDown = (event) => {
        const { key } = event
        switch (key) {
            case "ArrowUp":
                if (
                    json[playerPosition.y - 1][playerPosition.x] === " " ||
                    json[playerPosition.y - 1][playerPosition.x] === "g"
                ) {
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
                if (
                    json[playerPosition.y + 1][playerPosition.x] === " " ||
                    json[playerPosition.y + 1][playerPosition.x] === "g"
                ) {
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
                if (
                    json[playerPosition.y][playerPosition.x - 1] === " " ||
                    json[playerPosition.y][playerPosition.x - 1] === "g"
                ) {
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
                if (
                    json[playerPosition.y][playerPosition.x + 1] === " " ||
                    json[playerPosition.y][playerPosition.x + 1] === "g"
                ) {
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
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
                            return <Entity type="player" custom={skin} />
                        case "g":
                            return <Entity type="goal" custom={theme} />
                        case "+":
                            return <Entity type="column" custom={theme} />
                        case "-":
                            return (
                                <Entity type="horizontalWall" custom={theme} />
                            )
                        case "|":
                            return <Entity type="verticalWall" custom={theme} />
                        case " ":
                            return <Entity type="trail" custom={theme} />
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
    onWin: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
    skin: PropTypes.string.isRequired,
}

export default Maze
