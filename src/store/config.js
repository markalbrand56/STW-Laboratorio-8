const config = (store) => {
    store.on("@init", () => ({
        config: {
            width: 10,
            height: 10,
            skin: "default",
            theme: "default",
            timeLimit: null,
        },
    }))
    store.on("config/set", (_, newConfig) => ({
        config: newConfig,
    }))
}
export default config
