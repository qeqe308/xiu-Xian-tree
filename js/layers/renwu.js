// @ts-ignore
addLayer("w",
    {
        name: "sunshine", // This is optional, only used in a few places, If absent it just uses the layer id.
        symbol: "人物", // This appears on the layer's node. Default is the id with the first letter capitalized
        position: 0,
        startData() {
            return {
                unlocked: true,
                points: new Decimal(0),
                linggen: linggenadddd(),
                xueliang: [1, 1],
                lingshi: 0,
                zizhi:[Math.floor(Math.random()*11),Math.floor(Math.random()*11),Math.floor(Math.random()*11),Math.floor(Math.random()*11),Math.floor(Math.random()*11),Math.floor(Math.random()*11)],
                jiajing:jisjingadddd(),
                shuliandu:{
                    liandan:[0,100,0],
                    lianqi:[0,100,0],
                    zhenfa:[0,100,0],
                    renou:[0,100,0],
                    xunshou:[0,100,0]
                }
            }
        },
        grid: {
            rows: 5, // If these are dynamic make sure to have a max value as well!
            cols: 13,
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
        baseAmount() {
            return player.points
        },
        exponent: 0.5,
        row: 1, // Row the layer is in on the tree (0 is the first row)
        layerShown() {
            return true
        },
        bars: {
            liandan: {
                direction: RIGHT,
                width:800,
                height: 50,
                textStyle:{
                    'font-size':'50px'
                },
                progress() { return player.w.shuliandu.liandan[0]/player.w.shuliandu.liandan[1] },
                display(){return `${player.w.shuliandu.liandan[0]/player.w.shuliandu.liandan[1]}%`}
            },
            lianqi: {
                direction: RIGHT,
                width:800,
                height: 50,
                textStyle:{
                    'font-size':'50px'
                },
                progress() { return player.w.shuliandu.lianqi[0]/player.w.shuliandu.lianqi[1] },
                display(){return `${player.w.shuliandu.lianqi[0]/player.w.shuliandu.lianqi[1]}%`}
            },
            zhenfa: {
                direction: RIGHT,
                width:800,
                height: 50,
                textStyle:{
                    'font-size':'50px'
                },
                progress() { return player.w.shuliandu.zhenfa[0]/player.w.shuliandu.zhenfa[1] },
                display(){return `${player.w.shuliandu.zhenfa[0]/player.w.shuliandu.zhenfa[1]}%`}
            },
            renou: {
                direction: RIGHT,
                width:800,
                height: 50,
                textStyle:{
                    'font-size':'50px'
                },
                progress() { return player.w.shuliandu.renou[0]/player.w.shuliandu.renou[1] },
                display(){return `${player.w.shuliandu.renou[0]/player.w.shuliandu.renou[1]}%`}
            },
            xunshou: {
                direction: RIGHT,
                width:800,
                height: 50,
                textStyle:{
                    'font-size':'50px'
                },
                progress() { return player.w.shuliandu.xunshou[0]/player.w.shuliandu.xunshou[1] },
                display(){return `${player.w.shuliandu.xunshou[0]/player.w.shuliandu.xunshou[1]}%`}
            },
        },
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
                血量:${player.w.xueliang[0]}/${player.w.xueliang[1]}<br>
                <span class="linggen">灵根:</span>
                <span style="color:${wupin.linggen.color[player.w.linggen]}">${player.w.linggen}</span></span>
                </div>
                </div>
               `
                        },],
                    'grid'
                ]
            },
            '技能': {
                buttonStyle: {
                    'background-color': '#4da6ff'
                },
                content:[
                    ["display-text",
                        function () {
                    return `
                    当前炼丹师等级:${player.w.shuliandu.liandan[2]}阶炼丹师,距离下一阶还差${player.w.shuliandu.liandan[1]-player.w.shuliandu.liandan[0]}熟练度
                    `
                    }],
                    ['row',[['bar','liandan']]],
                    ["display-text",
                        function () {
                            return `
                    当前炼器师等级:${player.w.shuliandu.lianqi[2]}阶炼器师,距离下一阶还差${player.w.shuliandu.lianqi[1]-player.w.shuliandu.lianqi[0]}熟练度
                    `
                        }],
                    ['row',[['bar','lianqi']]],
                    ["display-text",
                        function () {
                            return `
                    当前阵法师等级:${player.w.shuliandu.zhenfa[2]}阶阵法师,距离下一阶还差${player.w.shuliandu.zhenfa[1]-player.w.shuliandu.zhenfa[0]}熟练度
                    `
                        }],
                    ['row',[['bar','zhenfa']]],
                    ["display-text",
                        function () {
                            return `
                    当前人偶师等级:${player.w.shuliandu.renou[2]}阶人偶师,距离下一阶还差${player.w.shuliandu.renou[1]-player.w.shuliandu.renou[0]}熟练度
                    `
                        }],
                    ['row',[['bar','renou']]],
                    ["display-text",
                        function () {
                            return `
                    当前驯兽师等级:${player.w.shuliandu.xunshou[2]}阶驯兽师,距离下一阶还差${player.w.shuliandu.xunshou[1]-player.w.shuliandu.xunshou[0]}熟练度
                    `
                        }],
                    ['row',[['bar','xunshou']]],
                ]
            },
            '详细属性': {
                buttonStyle: {
                    'background-color': '#7bcb0c'
                },
                content: [
                    ["display-text",
                        function () {
                            return `
<div style="width:100%;height:99vh;display: flex">
<div class="zizhinakuai">
        资质<br>
        修仙资质:${player.w.zizhi[0]}<br>
        炼丹资质:${player.w.zizhi[1]}<br>
        炼器资质:${player.w.zizhi[2]}<br>
        阵法资质:${player.w.zizhi[3]}<br>
        人偶资质:${player.w.zizhi[4]}<br>
        驯兽资质:${player.w.zizhi[5]}<br>
</div>
<div class="zizhinakuai" style="overflow:auto">
    家境<br>
    ${wupin.jiajing[player.w.jiajing].name}<br>
    ${wupin.jiajing[player.w.jiajing].jieshao}
</div>
<div class="zizhinakuai">
 灵根
 <br><span style="color:${wupin.linggen.color[player.w.linggen]}">${player.w.linggen}</span>
 <br>${wupin.linggen.jieshao[player.w.linggen]}
</div>
</div>
               `
                        },],
                ]
            },
        }
    })
const wupin = {
    linggen: {
        l: ['金', '木', '水', '火', '土', '冰', '毒'],
        color: {
            '金': 'Yellow',
            '木': 'Green',
            '水': '#0051ff',
            '火': 'Red',
            '土': '#6c2e2e',
            '冰': 'cyan',
            '毒': 'Purple'
        },
        jieshao: {
            '金': '给予拥有者10%的攻击加成',
            '木': '给予攻击者10%的血量加成',
            '水': '暂时没想到有啥加成',
            '火': '给予拥有者攻击时附带火焰buff效果',
            '土': '给予拥有者10%的免伤',
            '冰': '给予拥有者攻击时附带冰冻buff',
            '毒': '我tm不想写这个(恼恼恼'
        },
        gailv: [17, 34, 51, 68, 85, 95, 100],
    },
    jiajing:[
        {
            'name':'最低',
            'jieshao': `你出生在一个贫穷困难小家庭，这里处于贫民窟。到处都有老鼠、垃圾、排泄物。
            你和你的父母亲只能勉强居住在一个用各种垃圾堆叠起来的小房子，累死累活也只能赚到一点钱，仅仅刚刚能够生活下去。你也只好忍受这种痛苦。`,
            'gailv':20
        },
        {
            'name':'较低',
            'jieshao':`你出生在一个普普通通大家庭，这里的环境不算太好，但仍然井井有条。你住在一个租的小房子，不过可以承载你所有的生活需要。
            你的父母亲赚的钱，不仅可以养活一家人，有时还可以稍微奢侈一点。在这里你可以感受到亲情，已经比较满足了。`,
            'gailv':70
        },
        {
            'name':'较高',
            'jieshao':'你生活在一个富有富足好家庭，这里的环境不错，你住在一栋三层的大房子内，这里面的环境比较奢侈，纯白色的墙壁上，' +
                '有时候还会挂着壁画，或者画着金黄色的花纹。你父母亲的工资，足够让你一直奢侈。你非常满意这里。',
            'gailv':90
        },
        {
            'name':'最高',
            'jieshao':'你生活在一个富可敌国大家族，这个家族有好几十个庄园，里面都配备了各种豪华的设施，有各种名画古董，装修风格也十分豪华。' +
                '这里的人早已因为太过富有而不再惦记着金钱，因为这足够他们非常奢侈的花上几千年，你对这里充满了震惊，并且非常喜欢。',
            'gailv':100
        },
]
};