//VARs & Functions Gallery Mobile

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
        const value = galleryIndex == 0 ? 0 : galleryIndex == 1 ? -100 : -200
        galleryImgGroup.style.transform = (`translateX(${value + 100}%)`)
    }

    galleryIndex = galleryIndex == 0 ? 2 : galleryIndex - 1
    blurNotSelectedImages(galleryIndex)

})
nextBtn.addEventListener('click', () => {
    if (galleryIndex === 2) {
        galleryImgGroup.style.transform = 'translateX(0%)'
    } else {
        const value = galleryIndex == 0 ? 0 : galleryIndex == 1 ? -100 : -200
        galleryImgGroup.style.transform = (`translateX(${value - 100}%)`)
    }


    galleryIndex = galleryIndex == 2 ? 0 : galleryIndex + 1
    blurNotSelectedImages(galleryIndex)
})


//VARs & Functions Gallery Desktop

const galleryImages = document.querySelectorAll('.gallery-image')

for (let image of galleryImages) {
    image.addEventListener('mouseover', (event) => {
        for (let image of galleryImages) {
            if (event.target.className === image.className) {
                document.querySelector(`.gt${image.className.slice(-1)}`).style.opacity = '1'
                document.querySelector(`.dg${image.className.slice(-1)}`).style.zIndex = 5
                document.querySelector(`.dg${image.className.slice(-1)}`).style.filter = 'blur(0)'
                document.querySelector(`.dg${image.className.slice(-1)}`).style.transform = 'scale(1.3)'

            } else {
                document.querySelector(`.gt${image.className.slice(-1)}`).style.opacity = '0'
                document.querySelector(`.dg${image.className.slice(-1)}`).style.zIndex = 0
                document.querySelector(`.dg${image.className.slice(-1)}`).style.filter = 'blur(0.1rem)'
                document.querySelector(`.dg${image.className.slice(-1)}`).style.transform = 'scale(1)'
            }
        }


    })

    image.addEventListener('click', (event) => {
        for (let image of galleryImages) {
            if (event.target.className === image.className) {
                document.querySelector(`.gt${image.className.slice(-1)}`).style.opacity = '1'
                document.querySelector(`.dg${image.className.slice(-1)}`).style.zIndex = 5
                document.querySelector(`.dg${image.className.slice(-1)}`).style.filter = 'blur(0)'
                document.querySelector(`.dg${image.className.slice(-1)}`).style.transform = 'scale(1.3)'

            } else {
                document.querySelector(`.gt${image.className.slice(-1)}`).style.opacity = '0'
                document.querySelector(`.dg${image.className.slice(-1)}`).style.zIndex = 0
                document.querySelector(`.dg${image.className.slice(-1)}`).style.filter = 'blur(0.1rem)'
                document.querySelector(`.dg${image.className.slice(-1)}`).style.transform = 'scale(1)'
            }
        }
    })
}


//VARS & Functions for SideBar

const hamIcon = document.querySelector('.ham-menu')
const closeIcon = document.querySelector('.close-icon')
const sidebar = document.getElementById('sidebar')
const sidebarAnchors = document.querySelectorAll('.sidebar-a')

hamIcon.addEventListener('click', () => {
    sidebar.style.display = 'flex'
    document.querySelector('html').style.overflowY = 'hidden'
})

closeIcon.addEventListener('click', () => {
    sidebar.style.display = 'none'
    document.querySelector('html').style.overflowY = 'scroll'
})


for (let anchor of sidebarAnchors) {
    anchor.addEventListener('click', () => {
        sidebar.style.display = 'none'
        document.querySelector('body').style.overflow = 'scroll'
    })
}