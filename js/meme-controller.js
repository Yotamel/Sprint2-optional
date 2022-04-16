'use strict'
var gElCanvas //canvas size: x526 y547 [50% 263, 273.5]
var gCtx
var gLineHeight

//add these, + line feature, click on line to select it, make the line display reflect the seleceted line text on click
//add drag and drop, delete
//add gallery , download
//improve css, mobile support


function editorInit() {
    gElCanvas = document.querySelector('#image-canvas')
    gCtx = gElCanvas.getContext('2d')
    gLineHeight = { top: (gElCanvas.height * 0.15), center: (gElCanvas.height * 0.50), bottom: (gElCanvas.height * 0.85) }
    const elLine = document.querySelector('.line-bar')
    elLine.addEventListener('input', onLineInput);
    elLine.addEventListener('propertychange', onLineInput);
    addMouseListeners()
    addTouchListeners()
    createImages()
    createGallery()
    createMeme()
    renderMeme()
}


function renderMeme() {
    const meme = getMeme()
    var img = new Image();
    img.src = meme.img.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawLines(meme)

    };
}


function drawImage() {
    const selectedImg = getSelectedImage()
    var img = new Image();
    img.src = selectedImg.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    };
}

function drawLines(meme) {
    meme.lines.forEach((line, idx) => {
        line.selected ? drawText(line.txt, line.x, line.y, line.fontSize, idx, true) : drawText(line.txt, line.x, line.y, line.fontSize, idx)
    });
}

function drawText(txt, x, y, fontSize, idx, border = false) {
    gCtx.textBaseline = 'middle';
    gCtx.textAlign = 'center';
    gCtx.lineWidth = 2;
    gCtx.fillStyle = 'white';
    gCtx.font = `${fontSize}px impact`;
    setLineWidth(gCtx.measureText(txt).width, idx)
    if (border) drawBorder(x, y, fontSize, gCtx.measureText(txt).width)
    gCtx.fillText(txt, x, y, 486);
    gCtx.strokeStyle = 'black';
    gCtx.strokeText(txt, x, y, 486);
}

function drawBorder(x, y, height, width) {
    gCtx.beginPath()
    height += 10
    width += 10
    gCtx.rect(x - width / 2, y - height / 2, width, height)
    gCtx.strokeStyle = 'blue'
    gCtx.stroke()
}

function onLineInput(ev) {
    updateLineText(ev.target.value)
    renderMeme()
}

function onChangeFontSize(operator) {
    changeFontSize(operator)
    renderMeme()
}

function onSetLineHeight(value) {
    setLineHeight(gLineHeight[value])
    renderMeme()
}

function onMove(ev) {
    return
}

function onDown(ev) {
    unselectAll()
    selectLine(ev.offsetX, ev.offsetY)
    setTextEdit()
    renderMeme()
}

function onUp() {
    return
}

function onAddLine() {
    unselectAll()
    addLine()
    setTextEdit()
}

function onDeleteLine() {
    deleteLine()
    setTextEdit()
    renderMeme()
}

function onSave(){
    saveMeme()
}

function setTextEdit() {
    const elLineBar = document.querySelector('.line-bar')
    const line = getSelectedLine()
    if (!line) {
        elLineBar.value = ''
        elLineBar.disabled = true
    }
    else {
        elLineBar.value = line.txt
        elLineBar.disabled = false
    }
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}