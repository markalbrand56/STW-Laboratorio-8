import Button from "./Button"

export default {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        onClick: { action: "clicked" },
    },
}

export const Primary = {
    args: {
        children: "Button",
        type: "primary",
    },
}

export const Secondary = {
    args: {
        children: "Button",
        type: "secondary",
    },
}
