var width, height;
var sidebarOffset, rightOffset, boxWidth, boxHeight;
var img;

function preload() {
    img = loadImage("./dia/diagram-05.jpg");
}

function setup() {
    fill(255);
    textsize = 15;
    spacing = 10;

    width = windowWidth;
    height = windowHeight;
    createCanvas(width, height);
    textSize(textsize);
}

function draw() {
    background(0,0,0);
    sidebarOffset = 400;
    rightOffset = 150;
    boxWidth = width - sidebarOffset - rightOffset;
    boxHeight = height;
    image(img, 550, 300);
    img.resize(800,400);
    text("Algorithmic Appraisal\n\nIn conventional sense, a consistent appraisal standard often relies on rational human decision to safeguard and assure the archive aligns with its intention. But using algorithm, we can automate the process with algorithmic conditions to screen and select the material that is needed in the archive. However, this does not mean that the selection algorithm is autonomous, because it is still designed and operated by human inputs that control the parameters-driven process. \n\nAn out-of-date system developed in 1990s by the Minnesota Historical Society aimed to prioritize a body of material that will provide the most use for the widest variety of users through preservation of the smallest quantity of records possible. (Greene, 1998) However, with an abundance of computing power, appraising in a bottom-up way is easily dealt with by computer using algorithm such as neutral network and machine learning training sets to differentiate useful data by observing emergent pattern of the data. For example, we could feed the algorithm 1000 pictures of pixelated artwork, and then given a sufficient amount of iteration, it would be able to determine, through probability, whether the next image imported was an artwork or an irrelevant image such as an image of a cat. (Bishop, 2006)", 450, 110, boxWidth, boxHeight);
   
}