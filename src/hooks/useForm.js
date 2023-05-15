import { useState, useEffect } from "react"
import { useStoreon } from "storeon/react"

const useForm = (schema, initialValues) => {
    const { dispatch, config } = useStoreon("config")
    const [errors, setErrors] = useState(false)
    const [values, setValues] = useState(initialValues)

    console.log("useForm", config)

    const setValue = (field, value) => {
        setValues({
            ...values,
            [field]: value,
        })
        dispatch("config/set", {
            ...config,
            [field]: value,
        })
    }

    const onChange =
        (field) =>
        ({ target: { value } }) => {
            if (field === "timeLimitEnabled") {
                const timeLimit = value === false ? null : 1
                setValue(field, value)
                setValue("timeLimit", timeLimit)
            } else if (field === "timeLimit") {
                const intValue = parseInt(value, 10)
                setValue(field, intValue)
            } else {
                setValue(field, value)
            }
        }

    const validate = () => {
        const validation = schema.validate(values)
        if (validation.error) {
            setErrors(validation.error.details)
            return false
        }

        setErrors(false)

        return true
    }

    useEffect(() => {
        setValues(config || initialValues)
    }, [])

    return {
        values,
        setValue,
        setValues,
        onChange,
        validate,
        errors,
    }
}

export default useForm
