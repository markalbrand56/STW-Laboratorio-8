import Input from "./Input"

export default {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
    },
}

export const Number = {
    args: {
        label: "Number",
        type: "number",
        value: 0,
        placeholder: "Enter a number",
        min: 0,
        max: 100,
    },
}
