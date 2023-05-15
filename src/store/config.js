const config = (store) => {
    store.on("@init", () => ({
        config: {
            width: 4,
            height: 4,
            skin: "default",
            theme: "default",
            timeLimit: null,
            timeLimitEnabled: false,
            gameOver: false,
        },
    }))
    store.on("config/set", (_, newConfig) => ({
        config: newConfig,
    }))
}
export default config
