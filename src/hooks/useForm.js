import { useState } from "react"
import { useStoreon } from "storeon/react"

const useForm = (schema) => {
    const { dispatch, config } = useStoreon("config")
    const [errors, setErrors] = useState(false)

    const setValue = (field, value) => {
        console.log("set value", field, value)
        dispatch("config/set", {
            ...config,
            [field]: value,
        })
    }

    const clean = () => {
        console.log("CLEANING")
        dispatch("config/clean")
    }

    const onChange =
        (field) =>
        ({ target: { value } }) => {
            if (field === "timeLimit") {
                const newValue =
                    value === ("0" || NaN) ? null : parseInt(value, 10)
                setValue(field, newValue)
            } else {
                setValue(field, value)
            }
        }

    const validate = () => {
        const validation = schema.validate(config)
        if (validation.error) {
            setErrors(validation.error.details)
            return false
        }

        setErrors(false)

        return true
    }

    return {
        setValue,
        onChange,
        validate,
        errors,
        config,
        clean,
    }
}

export default useForm
