import React from "react"
import PropTypes from "prop-types"
import styles from "./Input.module.css"

function Input({ label, type, value, onChange, placeholder, min, max }) {
    return (
        <div className={styles.InputContainer}>
            <span>{label}: </span>
            <input
                value={value}
                onChange={onChange}
                type={type}
                className={styles.InputNumber}
                placeholder={placeholder}
                min={min}
                max={max}
            />
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOf(["number", "text"]).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default Input
