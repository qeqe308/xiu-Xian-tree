addLayer("z", {
    name: "sunshine", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "剧情", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row.it uses the layer id and sorts in alphabetical order
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
        '前情提要': {
            content:[
                ["display-text",function (){
                return`
                <h1>背景故事</h1><br>
                <span>
                这是一个修仙的世界<br>
                修仙境界共分七阶(练气,筑基,金丹,元婴,化神,大乘,飞升),每阶共分十重,到达最终境界既可飞升到主世界<br>
                世界共分五大洲,除却一片海域之外,皆有一宗统治<br>
                在星海洲的是:新耀宗<br>
                在烈阳洲的是:江月宗<br>
                在枫红洲的是:时海宗<br>
                在粼光洲的是:蓝祥宗<br>
                在这四大宗中,以新耀宗实力为胜,江月宗功法为多,时海宗炼丹师众多,蓝祥宗阵法师最多
</span>
                `
                }]
            ]
        }
    }
})