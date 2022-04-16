'use strict'
var gMeme

function createMeme() {
    gMeme = { img: getSelectedImage(), lines: [{ txt: "Text Line", x: 263, y: 273.5, fontSize: 50, font: 'impact', selected: false }] }
}

function getMeme() {
    return gMeme
}

function getSelectedLine() {
    const selectedLine = gMeme.lines.find(line => line.selected === true)
    return selectedLine

}

function addLine() {
    gMeme.lines.push({ txt: "New Line", x: 263, y: 273.5, fontSize: 50, font: 'impact', selected: true })
    renderMeme()
}

function deleteLine(){
    const idx = gMeme.lines.findIndex(line => line.selected === true)
    gMeme.lines.splice(idx,1)
}

function unselectAll() {
    gMeme.lines.forEach(line => {
        line.selected = false
    });
}

function selectLine(x, y) {
    const idx = gMeme.lines.findIndex(line => x >= line.x - line.width / 2 && x <= line.x + line.width / 2 &&
        y >= line.y - line.fontSize / 2 && y <= line.y + line.fontSize / 2)
    if (idx === -1) return
    gMeme.lines[idx].selected = true
}

function updateLineText(text) {
    const idx = gMeme.lines.findIndex(line => line.selected === true)
    gMeme.lines[idx].txt = text
}

function setLineHeight(height) {
    const idx = gMeme.lines.findIndex(line => line.selected === true)
    if (idx === -1) return
    gMeme.lines[idx].y = height
}

function setLineWidth(width, idx) {
    gMeme.lines[idx].width = width
}

function changeFontSize(operator) {
    const idx = gMeme.lines.findIndex(line => line.selected === true)
    if (idx === -1) return
    operator === '+' ? gMeme.lines[idx].fontSize += 10 : gMeme.lines[idx].fontSize -= 10
}