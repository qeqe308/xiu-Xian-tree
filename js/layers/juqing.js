addLayer("z", {
    name: "sunshine", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "剧情", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
        }
    },
    color: "#4BDC13",
    baseAmount() { return player.points }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    tabFormat: {
        '暂时没有': {}
    }
})