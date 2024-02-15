var i = 0
var images = []
var time = 5000

images[0] = "photo6.png"
images[1] = "photo2.png"
images[2] = "photo3.png"
images[3] = "photo4.png"
images[4] = "photo5.png"
images[5] = "photo1.png"

function changeImg(){
    document.slide.src = images[i]

    if(i < images.length-1){
        i++
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time)
}

let playSound = () => {
    document.getElementById("muza2").pause()
    new Audio("muza.mp3").play()
}

function animation(){
    document.getElementById("body").classList = "remove"
    document.getElementById("newBody").classList = "newBody"
    changeImg()
    playSound()
}