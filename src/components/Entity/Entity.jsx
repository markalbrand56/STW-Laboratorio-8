import React from "react"
import PropTypes from "prop-types"
import styles from "./Entity.module.css"

function Entity({ type, custom }) {
    const className = `${styles[type]} ${styles.Entity}`

    const ilustrations = {
        player: {
            default: "src/assets/skins/Geralt.png",
            var1: "src/assets/skins/Ciri.png",
            var2: "src/assets/skins/Yennefer.png",
        },
        goal: {
            Theme1: "src/assets/themes/theme1/icons8-lord-voldemort.svg",
            Theme2: "IMAGEN 2 GOAL",
        },
        column: {
            Theme1: "src/assets/themes/theme1/brick-wall-svgrepo-com (1).svg",
            Theme2: "IMAGEN 2 COLUMN",
        },
        trail: {
            Theme1: "src/assets/themes/theme1/draws-floor-svgrepo-com (1).svg",
            Theme2: "IMAGEN 2 TRAIL",
        },
        horizontalWall: {
            Theme1: "src/assets/themes/theme1/brick-wall-svgrepo-com (2).svg",
            Theme2: "IMAGEN 2 HORIZONTAL WALL",
        },
        verticalWall: {
            Theme1: "src/assets/themes/theme1/brick-wall-svgrepo-com (2).svg",
            Theme2: "IMAGEN 2 VERTICAL WALL",
        },
    }

    let illustration
    switch (type) {
        case "player":
            switch (custom) {
                case "default":
                    illustration = ilustrations.player.default
                    break
                case "var1":
                    illustration = ilustrations.player.var1
                    break
                case "var2":
                    illustration = ilustrations.player.var2
                    break
                default:
                    illustration = ""
            }
            break
        case "goal":
            switch (custom) {
                case "Theme 1":
                    illustration = ilustrations.goal.Theme1
                    break
                case "Theme 2":
                    illustration = ilustrations.goal.Theme2
                    break
                default:
                    illustration = ""
            }
            break
        case "column":
            switch (custom) {
                case "Theme 1":
                    illustration = ilustrations.column.Theme1
                    break
                case "Theme 2":
                    illustration = ilustrations.column.Theme2
                    break
                default:
                    illustration = ""
            }
            break
        case "trail":
            switch (custom) {
                case "Theme 1":
                    illustration = ilustrations.trail.Theme1
                    break
                case "Theme 2":
                    illustration = ilustrations.horizontalWall
                    break
                default:
                    illustration = ""
            }
            break
        case "horizontalWall":
            switch (custom) {
                case "Theme 1":
                    illustration = ilustrations.horizontalWall.Theme1
                    break
                case "Theme 2":
                    illustration = ilustrations.horizontalWall.Theme2
                    break
                default:
                    illustration = ""
            }
            break
        case "verticalWall":
            switch (custom) {
                case "Theme 1":
                    illustration = ilustrations.verticalWall.Theme1
                    break
                case "Theme 2":
                    illustration = ilustrations.verticalWall.Theme2
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
