var width, height;
var sidebarOffset, rightOffset, boxWidth, boxHeight;
var img;

function preload() {
    img = loadImage("./dia/diagram-02.jpg");
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
    image(img, 650, 400);
    img.resize(600,300);
    text("Life Cycle Theory\n\nThe life cycle of digital image is increasingly short, if we define the life cycle as maturity, a less active life in old age, and in the end is discarded. (Williams, 2006, p.11) After the active period of a digital image, it becomes dormant and no longer accessed, which is when it fades into oblivion. The popularity or frequency of the item being access by the public on the world wide web determines its activeness. This platform would acquire the dormant or morbid digital artifacts and freeze them in time. Conventional theory suggests that records will have a retention period, which is a date for its destruction, attached to every record. (Williams, 2006, p.9) This temporal aspect, however, does not apply to this scenario since the projects archived in this platform are stored as binary digits, which will be expounded later.\n\nContinuum Model\n\nTheoretically, archival scientists think that the continuum model represents record keeping activity as an ongoing movement in and through four dimensions and four axes: accountability, transactionality, evidentiality and record keeping containers. (Williams, 2006, p.13) Continuum model is conceived as a multi-dimensional framework that the records are moved on or across these dimensions. This echoes with the alternative reality created in the digital realm, where digital images are not destroyed but transferred across systems. The idea of fidelity is also unnecessary in the virtual realm, since digital copy is limitless, which means the transition from record to archive is seamless and simultaneous.", 450, 110, boxWidth, boxHeight);
  
}