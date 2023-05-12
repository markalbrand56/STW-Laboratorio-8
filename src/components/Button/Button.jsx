import React from "react"
import styles from "./Button.module.css"
import PropTypes from "prop-types"

function Button({ children, onClick, type = "primary" }) {
    return (
        <button
            className={`${styles.Button} ${
                type === "primary" ? styles.Primary : styles.Secondary
            }`}
            type="button"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["primary", "secondary"]),
}

Button.defaultProps = {
    type: "primary",
}

export default Button