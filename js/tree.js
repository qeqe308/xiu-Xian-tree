var layoutInfo = {
    startTab: 's',
    startNavTab: "tree-tab",
	showTree: true,

    treeLayout: ""

    
}

//啊顶顶顶
// A "ghost" layer which offsets other layers in the tree
addNode("blank", {
    layerShown: "ghost",
}, 
)


addLayer("tree-tab", {
    tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]],
    previousTab: "",
    leftTab: true,
})
//wwwwwwwwww
addLayer('qitaxinxi', {
    symbol: "其他", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    color: "#ffff",
    startData() {
        return {
            unlocked: true,
            points: new Decimal(0),
            jiantou: 0
        }
    },
    baseAmount() { return player.points }, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 999, // Row the layer is in on the tree (0 is the first row)

    layerShown() { return true },
    tabFormat: {
        '设置': {
            content: [
                ['raw-html', function () {
                    return `<div class='opinestab'>
                            <br><br><br><br>
                             存档:
                             <button class='opt' onclick='save()'>保存</button>
                            <button class="opt" onclick="toggleOpt('autosave')">自动保存: ${options.autosave ? "开" : "关"}</button>
                            <button class="opt" onclick="hardReset()">硬复位</button>
                            <button class="opt" onclick="exportSave()">导出到剪切板</button>
                            <button class="opt" onclick="importSave()">导入</button> <br>   
                            <br><br><br><br>             
                            游戏:
                            <button class="opt" onclick="toggleOpt('offlineProd')">离线进度: ${options.offlineProd ? "开" : "关"}</button> 
                            <br><br><br><br><br>
                            外观:    
                            <button class="opt" onclick="switchTheme()">主题: ${getThemeName()}</button>
                            <button class="opt" onclick="player.qitaxinxi.jiantou==1?player.qitaxinxi.jiantou=0:player.qitaxinxi.jiantou=1">箭头切换:${player.qitaxinxi.jiantou == 1 ? '>>>' : '→'}</button>
                    </div>    
                    `
                }]
            ]
        },
        '作者': {
            content: [
                ['raw-html', () => {
                    return `
                    <div>
                    <h2>${modInfo.name}</h2>
                    <br>
                    <h3>${VERSION.withName}</h3>
                    <span v-if="modInfo.author">
                        <br>
                        作者： ${modInfo.author}	
                    </span>

                    <span v-if="modInfo.discordLink"><a class="link" v-bind:href="modInfo.discordLink" target="_blank">${modInfo.discordName}</a><br></span>
                    <br><br>
                    已游玩时间: ${formatTime(player.timePlayed)}<br><br>
                `
                }]
            ]
        },
        '版本': {
            content: [
                ['raw-html', () => {
                    return `
                    <div>
                    更新日志:<br>
                    <h2>当前版本:v${VERSION.num}</h2><br><br>
                    v0.1:<br>
                    1.对于游戏的展现形式进行了变化(借鉴了神秘的一些)<br>
                    2.决定了游戏的基础规则与世界观<br>
                    </div>
                    `
                }]

            ]
        },
    }
})