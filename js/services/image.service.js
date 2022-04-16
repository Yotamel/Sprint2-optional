'use strict'
const IMAGE_KEY = 'imgDB'
var gImgs


function getImages() {
    return gImgs
}

function setSelectedImage(id = 0) {
    var idx
    if (!id) {
        idx = gImgs.findIndex(image => image.selected === true)
        if(idx === -1) return
        gImgs[idx].selected = false
    } else {
        idx = gImgs.findIndex(image => image.id === id)
        gImgs[idx].selected = true
    }
    saveToStorage(IMAGE_KEY, gImgs);
}


function getSelectedImage() {
    const selectedImg = gImgs.find(image => image.selected === true)
    return selectedImg

}

function createImages() {
    var images = loadFromStorage(IMAGE_KEY)
    if (!images || !images.length) {
        images = [
            { id: 1, url: 'img/1.jpg', keywords: ['Funny', 'Smug'], selected: false },
            { id: 2, url: 'img/2.jpg', keywords: ['Animals', 'Cute'], selected: false },
            { id: 3, url: 'img/3.jpg', keywords: ['Animals', 'Cute', 'Babies'], selected: false },
            { id: 4, url: 'img/4.jpg', keywords: ['Animals', 'Cute'], selected: false },
            { id: 5, url: 'img/5.jpg', keywords: ['Baby', 'Cute', 'Funny'], selected: false },
            { id: 6, url: 'img/6.jpg', keywords: ['Funny'], selected: false },
            { id: 7, url: 'img/7.jpg', keywords: ['Baby', 'Cute', 'Funny', 'Wholesome'], selected: false },
            { id: 8, url: 'img/8.jpg', keywords: ['Funny', 'Smug'], selected: false },
            { id: 9, url: 'img/9.jpg', keywords: ['Baby', 'Cute', 'Funny', 'Smug'], selected: false },
            { id: 10, url: 'img/10.jpg', keywords: ['Laugh'], selected: false },
            { id: 11, url: 'img/11.jpg', keywords: ['Funny'], selected: false },
            { id: 12, url: 'img/12.jpg', keywords: ['Reaction', 'Funny'], selected: false },
            { id: 13, url: 'img/13.jpg', keywords: ['Smug', 'Reaction'], selected: false },
            { id: 14, url: 'img/14.jpg', keywords: ['Reaction', 'Confused'], selected: false },
            { id: 15, url: 'img/15.jpg', keywords: ['Funny'], selected: false },
            { id: 16, url: 'img/16.jpg', keywords: ['Reaction', 'Laugh'], selected: false },
            { id: 18, url: 'img/18.jpg', keywords: ['Funny'], selected: false }
        ];
    }
    gImgs = images;
    saveToStorage(IMAGE_KEY, images);
}

