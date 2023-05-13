import React from "react"
import Entity from "../Entity/Entity"
import PropTypes from "prop-types"
import styles from "./Maze.module.css"

function Maze({ json, width, height }){
    return (
        <div
            className={styles.MazeContainer}
            style={{
                gridTemplateColumns: `repeat(${width * 2 + width + 1}, 50px)`,
                gridTemplateRows: `repeat(${height * 2 + 1}, 50px)`,
                width: `${width * 2 + width + 1}px`,
                height: `${height * 2 + 1}px`,
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
