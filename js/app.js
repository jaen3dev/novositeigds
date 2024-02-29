const prevBtn = document.querySelector('.prev-arrow')
const nextBtn = document.querySelector('.next-arrow')
const galleryImgGroup = document.querySelector('.gallery')
const galleryCard = document.querySelectorAll('.gallery-card')

let galleryIndex = 0

const blurNotSelectedImages = (index) => {
    for (let image of galleryCard) {
        if (image !== galleryCard[index]) {
            image.style.filter = 'blur(.1rem)'
        } else {
            image.style.filter = 'blur(0)'
        }
    }
}

prevBtn.addEventListener('click', () => {
    if (galleryIndex === 0) {
        galleryImgGroup.style.transform = 'translateX(-200%)'
    } else {
        const value = galleryIndex == 0? 0 : galleryIndex == 1? -100 : -200 
        galleryImgGroup.style.transform = (`translateX(${value + 100}%)`)
    }

    galleryIndex = galleryIndex == 0 ? 2 : galleryIndex - 1
    blurNotSelectedImages(galleryIndex)

})

nextBtn.addEventListener('click', () => {
    if (galleryIndex === 2) {
        galleryImgGroup.style.transform = 'translateX(0%)'
    } else {
        const value = galleryIndex == 0? 0 : galleryIndex == 1? -100 : -200 
        galleryImgGroup.style.transform = (`translateX(${value - 100}%)`)
    }


    galleryIndex = galleryIndex == 2 ? 0 : galleryIndex + 1
    blurNotSelectedImages(galleryIndex)
})