const $ = document.querySelector.bind(document)
const video = $("video")
let playCounter = 0
let volumeCounter = 0
let range = $("input[type='range']")
range.value = 100
$(".box").addEventListener("mouseenter", function () {
    $(".controls-container").style.visibility = "visible"
    $(".controls-container").style.opacity = 1

})

$(".box").addEventListener("mouseleave", function () {
    $(".controls-container").style.visibility = "hidden"
    $(".controls-container").style.opacity = 0
})

$("#play").addEventListener("click", function () {
    if (playCounter % 2 === 0) {
        video.play()
        $(".fa-play-circle").classList.add("fa-pause-circle")
        $(".fa-play-circle").classList.remove("fa-play-circle")
    } else {
        video.pause()
        $(".fa-pause-circle").classList.add("fa-play-circle")
        $(".fa-pause-circle").classList.remove("fa-pause-circle")
    }
    playCounter++
})

video.addEventListener("click", function () {
    if (playCounter % 2 === 0) {
        video.play()
        $(".fa-play-circle").classList.add("fa-pause-circle")
        $(".fa-play-circle").classList.remove("fa-play-circle")
    } else {
        video.pause()
        $(".fa-pause-circle").classList.add("fa-play-circle")
        $(".fa-pause-circle").classList.remove("fa-pause-circle")
    }
    playCounter++
})

document.addEventListener("keydown", function (key) {
    if (key.key === " ") {
        if (playCounter % 2 === 0) {
            video.play()
            $(".play").classList.add("fa-pause-circle")
            $(".play").classList.remove("fa-play-circle")
        } else {
            video.pause()
            $(".play").classList.add("fa-play-circle")
            $(".play").classList.remove("fa-pause-circle")
        }
        playCounter++
    }
})

$("#stop").addEventListener("click", function () {
    video.currentTime = 0
    $(".play").classList.add("fa-pause-circle")
    $(".play").classList.remove("fa-play-circle")
    video.play()
})
$("#prev").addEventListener("click", function () {
    video.currentTime -= 10
})
document.addEventListener("keydown", function (key) {
    if (key.key === "ArrowLeft") {
        video.currentTime -= 10
    }if (key.key === "ArrowRight") {
        video.currentTime += 10
    }if (key.key === "ArrowUp") {
        range.value += 10
    }if (key.key === "ArrowDown") {
        range.value -= 10
    }
})

$("#next").addEventListener("click", function () {
    video.currentTime += 10
})
$("#expand").addEventListener("click", function () {
    video.requestFullscreen()
})

setInterval(() => {
    document.querySelector(".progress-bar").style.width = `${video.currentTime / 2.01804626}%`
    if (video.currentTime >= 201.804626) {
        $(".stop").classList.add("fa-repeat")
        $(".stop").classList.remove("fa-stop-circle")
    }
    if (video.currentTime <= 0.5) {
        $(".stop").classList.add("fa-stop-circle")
        $(".stop").classList.remove("fa-repeat")
    }
    video.volume = range.value / 100
    range.setAttribute("title",range.value/10)
}, 100);

$(".progress").addEventListener("click",function(event){
    let cursorPosition = (event.clientX - this.getBoundingClientRect().left) / 8
    video.currentTime = cursorPosition * 2.01804626 
})
$(".progress").addEventListener("mouseenter",function(event){
    this.setAttribute("title",(event.clientX - this.getBoundingClientRect().left) / 8)
})

$("#volume").addEventListener("click",function(){
    if (volumeCounter % 2 === 0) {
        video.volume = 0
        $(".volume").classList.add("fa-volume-off")
        $(".volume").classList.remove("fa-volume-up")
        range.value = 0
    }else{
        video.volume = 1
        $(".volume").classList.remove("fa-volume-off")
        $(".volume").classList.add("fa-volume-up")
        range.value = 100
    }
    volumeCounter++
})