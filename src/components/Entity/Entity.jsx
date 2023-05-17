import React from "react"
import illustrations from "../../assets/ilustrations"
import PropTypes from "prop-types"
import styles from "./Entity.module.css"

function Entity({ type, custom }) {
    const className = `${styles[type]} ${styles.Entity}`

    let illustration
    switch (type) {
        case "player":
            switch (custom) {
                case "default":
                    illustration = illustrations.player.default
                    break
                case "var1":
                    illustration = illustrations.player.var1
                    break
                case "var2":
                    illustration = illustrations.player.var2
                    break
                default:
                    illustration = ""
            }
            break
        case "goal":
            switch (custom) {
                case "Theme 1":
                    illustration = illustrations.goal.Theme1
                    break
                case "Theme 2":
                    illustration = illustrations.goal.Theme2
                    break
                default:
                    illustration = ""
            }
            break
        case "column":
            switch (custom) {
                case "Theme 1":
                    illustration = illustrations.column.Theme1
                    break
                case "Theme 2":
                    illustration = illustrations.column.Theme2
                    break
                default:
                    illustration = ""
            }
            break
        case "trail":
            switch (custom) {
                case "Theme 1":
                    illustration = illustrations.trail.Theme1
                    break
                case "Theme 2":
                    illustration = illustrations.horizontalWall
                    break
                default:
                    illustration = ""
            }
            break
        case "horizontalWall":
            switch (custom) {
                case "Theme 1":
                    illustration = illustrations.horizontalWall.Theme1
                    break
                case "Theme 2":
                    illustration = illustrations.horizontalWall.Theme2
                    break
                default:
                    illustration = ""
            }
            break
        case "verticalWall":
            switch (custom) {
                case "Theme 1":
                    illustration = illustrations.verticalWall.Theme1
                    break
                case "Theme 2":
                    illustration = illustrations.verticalWall.Theme2
                    break
                default:
                    illustration = ""
            }
            break
        default:
            illustration = ""
    }

    return (
        <div className={className}>
            <img src={illustration} alt={custom}/>
        </div>
    )
}

Entity.propTypes = {
    type: PropTypes.string.isRequired,
    custom: PropTypes.string.isRequired,
}

export default Entity
