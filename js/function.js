/**
 * 输入一个节点的名字
 * @param {String} layer
 * @returns 返回span元素的当前状态下的最高值
 */
function maxHeight(layer) {
    if (layers[layer].tabFormat && !Array.isArray(layers[layer].tabFormat)) {
        let button = layers[layer].nodeStyle && layers[layer].nodeStyle['height'] ? (layers[layer].nodeStyle['height'] < '20px' ? '20px' : layers[layer].nodeStyle['height']) : '33px';
        if (player.suptabs[layer] === null) {
            let height = { 'maxHeight': button }
            return height
        }
        else {
            let a = 0
            for (i in layers[layer].tabFormat) {
                if (layers[layer].tabFormat[i].unlocked&& layers[layer].tabFormat[i].unlocked() == false) {
                    continue;
                }
                if (layers[layer].tabFormat[i].buttonStyle && layers[layer].tabFormat[i].buttonStyle['height'] > '27px') {
                    a += +(layers[layer].tabFormat[i].buttonStyle['height'].replace('px', ''))
                }
                else a += 27
            }
            a += +button.replace('px', '')
            a = a + 'px'
            let height = { 'maxHeight': a }
            return height
        }
    }
    else {
        let button = layers[layer].nodeStyle && layers[layer].nodeStyle['height'] ? layers[layer].nodeStyle['height'] : '33px'
        let maxHeight = { 'maxHeight': button }
        return maxHeight
    }
}
/**
 * 
 * @param {节点名字} layer
 * @returns {字符串} 返回当前节点→理应的度数 
 */
function rotate(layer, f) {
    let a = { '--deg': '90deg' }
    if (player.suptabs[layer] == 1) {
        return a
    }
    else {
        f === '左' ? a["--deg"] = '180deg' : a["--deg"] = '0deg'
        return a
    }
}
var a=0
a+=1