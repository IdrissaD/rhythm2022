
let numb = document.getElementById("slogans").childElementCount;

var tracks = [
    'music/close_your_eyes.mp3',
    'music/jive_at_five.mp3',
    'music/i_got_rhythm.mp3',
    'music/sweet_georgia_brown.mp3'
];

window.onload = function() {

    var track = tracks[Math.floor(Math.random() * tracks.length)];
    console.log(track)

    player = document.getElementById("player")
    player.src = track;
    player.play();

    for (let i = 0; i < numb-1; i++) {
        console.log(i)
        setTimeout(() => {
            const disappear = document.getElementById('slogans').children[i];
            // removes element from DOM
            disappear.style.display = 'none';
            
            const appear = document.getElementById('slogans').children[i+1]
            // adds element to DOM
            appear.style.display = 'block'
          }, 2000*(i+1)); //  time in milliseconds
    }

    for (let i = 0; i<100; i++) {
        setTimeout(() => {
            player.volume = (100-i)/100
        }, 13000+(i*30));
    }
}
