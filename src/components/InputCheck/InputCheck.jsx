import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from "./InputCheck.module.css"

function InputCheck({
    label,
    type,
    value,
    onChangeInput,
    onChangeCheck,
    placeholder,
    min,
    max,
    check,
}) {
    const [checked, setChecked] = useState(check)

    const handleCheck = () => {
        setChecked(!checked)
        onChangeCheck({ target: { value: !checked } })
    }

    return (
        <div className={styles.InputContainer}>
            <span>{label}: </span>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheck}
                className={styles.InputCheck}
            />
            {checked && (
                <input
                    value={value}
                    onChange={onChangeInput}
                    type={type}
                    className={styles.InputNumber}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    step={5}
                />
            )}
        </div>
    )
}

InputCheck.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["number", "text"]).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChangeInput: PropTypes.func.isRequired,
    onChangeCheck: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    check: PropTypes.bool.isRequired,
}

export default InputCheck
