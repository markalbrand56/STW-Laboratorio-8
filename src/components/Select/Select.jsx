import React from "react"
import PropTypes from "prop-types"
import styles from "./Select.module.css"

function Select({ value, onChange, options, label }) {
    return (
        <div className={styles.ContainerSelect}>
            <span>{label}: </span>
            <select
                className={styles.Select}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        selected={value === option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

Select.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ).isRequired,
    label: PropTypes.string.isRequired,
}

export default Select
