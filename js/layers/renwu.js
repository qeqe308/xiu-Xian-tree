addLayer("w", {
    name: "sunshine", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "人物", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0,
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
            linggen: Number
        }
    },
    grid: {
        rows: 5, // If these are dynamic make sure to have a max value as well!
        cols:13,
        getStartData(id) {
            return 0
        },
        getCanClick(data, id) {
            return true
        },
        onClick(data, id) {
            player[this.layer].grid[id]++
        },
        getDisplay(data, id) {
            return data
        },
    },
    color: "#cc9900",
    baseAmount() { return player.points }, // Get the current amount of baseResource
    // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent

    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown() { return true },
    tabFormat: {
        '背包': {
            buttonStyle: {
                'background-color': '#FE9A2E'
            },
            content: [
                ["display-text",
                    function () {
                        return `
                <div style='width:100%;height:288px;display:flex;margin-bottom:7px'>
                <div class='beibao'>
                </div>
                <div class='beibao' style='text-align:left'>
                <span style='font-size:30px;line-height:250%'>
                名字:qaqe308<br>
                境界:qaqe308<br>
                血量:qaqe308<br>
                灵根:qaqe308</span>
                </div>
                </div>
                ` },],
                'grid'
            ]
        },
        '技能': {
            buttonStyle: {
                'background-color': '#4da6ff'
            }
        },
        '详细属性': {
            buttonStyle: {
                'background-color': '#7bcb0c'
            }
        },
    }
})


