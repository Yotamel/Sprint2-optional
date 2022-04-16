'use strict'
const GALLERY_KEY = 'galleryDB'
var gGallery = []



function saveMeme() {
    const meme = getMeme()
    gGallery.push({id:'m' + makeId(), meme, selected: false})
    saveToStorage(GALLERY_KEY, gGallery);
}


function createGallery() {
    var gallery = loadFromStorage(GALLERY_KEY)
    if (!gallery || !gallery.length) {
        gallery = []
    }
    gGallery = gallery;
    saveToStorage(GALLERY_KEY, gallery);
}

function getGallery(){
    return gGallery
}