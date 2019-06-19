/*
* hex 2 rgb
*/

function hex2rgb(hex){
    var reg = /^#[a-fA-F0-9]{3,6}$/
    if(!hex) return
    if(!reg.test(hex)){
        console.warn('this is not a hex string')
        return 
    }
    var colorStr = hex.slice(1)
    var fColorStr = colorStr
    if(colorStr.length === 3){
        fColorStr = colorStr.replace(/([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,'$1$1$2$2$3$3')
    }
    var r,g,b
    r = parseInt(fColorStr.slice(0,2),16)
    g = parseInt(fColorStr.slice(2,4),16)
    b = parseInt(fColorStr.slice(4,6),16)
    return `rgb(${r},${g},${b})`
}
console.log(hex2rgb('#ffffff'))
console.log(hex2rgb('#cccccc'))
console.log(hex2rgb('#ccc'))
console.log(hex2rgb('#123'))
console.log(hex2rgb('#123445'))
console.log(hex2rgb('#1234454'))