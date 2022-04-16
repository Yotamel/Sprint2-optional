'use strict'
var gElGalCanvas
var gGalCtx

function galleryInit() {
    createGallery()
    renderGallery()
}


function renderGallery() {

    const images = getGallery()
    const elImages = document.querySelector('.image-container')
    const innerHtml = images.map(image => `<div class="card"><a href="editor.html"><canvas id="${image.id}" width="131,5" height="136,75" onclick="onLoadMeme(${image.id})"></canvas></div></a>`)
    elImages.innerHTML = innerHtml.join('')
    images.forEach(image => {
        gElGalCanvas = document.querySelector(`#${image.id}`)
        gGalCtx = gElGalCanvas.getContext('2d')
        image.meme.lines.forEach(line => {
            line.x = line.x / 4
            line.y = line.y / 4
            line.fontSize = line.fontSize / 4
            line.width = line.width / 4
        })
        renderGalleryMeme(image.meme, gGalCtx)
    });
}

function renderGalleryMeme(meme, ctx) {
    var img = new Image();
    img.src = meme.img.url
    img.onload = () => {
        ctx.drawImage(img, 0, 0, gElGalCanvas.width, gElGalCanvas.height);
    }

}

function drawGalleryLines(meme) {
    meme.lines.forEach((line, idx) => {
        drawGalleryText(line.txt, line.x, line.y, line.fontSize)
    });
}

function drawGalleryText(txt, x, y, fontSize) {
    gGalCtx.textBaseline = 'middle';
    gGalCtx.textAlign = 'center';
    gGalCtx.lineWidth = 2;
    gGalCtx.fillStyle = 'white';
    gGalCtx.font = `${fontSize}px impact`;
    gGalCtx.fillText(txt, x, y, 486);
    gGalCtx.strokeStyle = 'black';
    gGalCtx.strokeText(txt, x, y, 486);
}



//<canvas id="image-canvas" width="526" height="547"></canvas>