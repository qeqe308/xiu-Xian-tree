/**
 * 输入一个节点的名字
 * @param {String} layer
 * @returns {object} {'maxHeight':number}
 * @example maxHeight('s')//返回S当前的最高值
 */
function maxHeight(layer) {
    if (layers[layer].tabFormat && !Array.isArray(layers[layer].tabFormat)) {
        let button = layers[layer].nodeStyle && layers[layer].nodeStyle['height'] ? (layers[layer].nodeStyle['height'] < '20px' ? '20px' : layers[layer].nodeStyle['height']) : '33px';
        if (player.suptabs[layer] === null) {
            return {'maxHeight': button}
        }
        else {
            let a = 0
            for (let i in layers[layer].tabFormat) {
                if (layers[layer].tabFormat[i].unlocked && layers[layer].tabFormat[i].unlocked() === false) {
                    continue;
                }
                if (layers[layer].tabFormat[i].buttonStyle && layers[layer].tabFormat[i].buttonStyle['height'] > '27px') {
                    a += +(layers[layer].tabFormat[i].buttonStyle['height'].replace('px', ''))
                }
                else a += 27
            }
            a += +button.replace('px', '')
            a = a + 'px'
            return {'maxHeight': a}
        }
    }
    else {
        let button = layers[layer].nodeStyle && layers[layer].nodeStyle['height'] ? layers[layer].nodeStyle['height'] : '33px'
        return {'maxHeight': button}
    }
}
/**
 *
 * @param {string} layer
 * @param {string}f
 * @returns {object} 返回当前节点→理应的度数
 *
 */
function rotate(layer, f) {
    let a = { '--deg': '90deg' }
    if (player.suptabs[layer] === 1) {
        return a
    }
    else {
        f === '左' ? a["--deg"] = '180deg' : a["--deg"] = '0deg'
        return a
    }
}

/**
 *
 * @returns {string} 返回灵根属性
 */
function linggenadddd() {
    let a = Math.ceil(Math.random() * 100)
    let b = 0
    let c = 0
    for (let i of wupin.linggen.gailv) {
        b += i
        if (a <= b) {
            return wupin.linggen.l[c]
        }
        c++
    }
}
