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
        custom: "default",
    },
}

export const Player1 = {
    args: {
        type: "player",
        custom: "default",
    },
}
export const Trail1 = {
    args: {
        type: "trail",
        custom: "Theme 1",
    },
}

export const Column1 = {
    args: {
        type: "column",
        custom: "Theme 1",
    },
}

export const HorizontalWall1 = {
    args: {
        type: "horizontalWall",
        custom: "Theme 1",
    },
}

export const VerticalWall1 = {
    args: {
        type: "verticalWall",
        custom: "Theme 1",
    },
}
