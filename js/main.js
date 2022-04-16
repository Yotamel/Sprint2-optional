'use strict'



function mainInit() {
    createImages()
    setSelectedImage()
    renderImages()
}

function renderImages() {
    const images = getImages()
    const elImages = document.querySelector('.image-container')
    const innerHtml = images.map(image => `<div class="card"><a href="editor.html"><img onclick = "onSetSelectedImage(${image.id})"src="${image.url}"></div></a>`)
    elImages.innerHTML = innerHtml.join('')
}



function onSetSelectedImage(id) {
    setSelectedImage(id)
}

