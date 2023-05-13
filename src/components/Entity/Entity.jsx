import React from "react"
import PropTypes from "prop-types"
import styles from "./Entity.module.css"

function Entity({ type }) {
    const className = `${styles[type]} ${styles.Entity}`

    let letter
    switch (type) {
        case "player":
            letter = "p"
            break
        case "goal":
            letter = "g"
            break
        case "column":
            letter = "+"
            break
        case "trail":
            letter = " "
            break
        case "horizontalWall":
            letter = "-"
            break
        case "verticalWall":
            letter = "|"
            break
        default:
            letter = ""
    }

    return <div className={className}> {letter} </div>
}

Entity.propTypes = {
    type: PropTypes.string.isRequired,
}

export default Entity
