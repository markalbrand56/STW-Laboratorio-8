import Entity from "./Entity"

export default {
    title: "Components/Entity",
    component: Entity,
    tags: ["autodocs"],
    argTypes: {},
}

export const Default = {
    args: {
        type: "player",
    },
}

export const Player = {
    args: {
        type: "player",
    },
}

export const Goal = {
    args: {
        type: "goal",
    },
}

export const Column = {
    args: {
        type: "column",
    },
}

export const Trail = {
    args: {
        type: "trail",
    },
}

export const HorizontalWall = {
    args: {
        type: "horizontalWall",
    },
}

export const VerticalWall = {
    args: {
        type: "verticalWall",
    },
}
