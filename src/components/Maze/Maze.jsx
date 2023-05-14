import React from "react"
import PropTypes from "prop-types"
import Entity from "../Entity/Entity"
import styles from "./Maze.module.css"

function Maze({ json, width, height }){
    console.log("dentro del maze")
    const containerWidth = parseInt(width, 10) * 2 + parseInt(width, 10) + 1
    const containerHeight = height * 2 + 1
    return (
        <div
            className={styles.MazeContainer}
            style={{
                gridTemplateColumns: `repeat(${containerWidth}, 50px)`,
                gridTemplateRows: `repeat(${containerHeight}, 50px)`,
            }}
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
