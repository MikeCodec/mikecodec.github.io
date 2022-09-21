const player = document.getElementById('player')
player.play()
const play = document.getElementById('play')
player.play()
const pause = document.getElementById('pause')
player.play()
const load = document.getElementById('loading')
player.play()

play.style.display = "block";
pause.style.display = "none";
load.style.display = "none";

player.addEventListener('playing', () => {
    play.style.display = "none";
    pause.style.display = "block";
    load.style.display = "none";
})

player.addEventListener('waiting', () => {
    play.style.display = "none";
    pause.style.display = "none";
    load.style.display = "block";
})

play.addEventListener('click', e => {
    e.preventDefault()
    player.play()

    play.style.display = "none";
    pause.style.display = "block";
    load.style.display = "none";
})

pause.addEventListener('click', e => {
    e.preventDefault()
    player.pause()

    play.style.display = "block";
    pause.style.display = "none";
    load.style.display = "none";
})