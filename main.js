song1 = 0;
song2 = 0;
function preload() {
    song1 = loadSound("red.mp3");
    song2 = loadSound("left.mp3") 
}

function setup() {
    canvas = createCanvas(590, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 40, 560, 420);
}