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
    text("Life Cycle Theory\n\nLife cycle and continuum are concepts relevant to the platform since the life cycle of digital image is increasingly short, if we define the life cycle as the period time that it is active, as opposed to dormant. After the active period of a digital image, it becomes dormant and no longer accessed, which is when it fades into oblivion. This platform would acquire the dormant or morbid digital artifacts and freeze them in time. Conventional theory suggests that records will have a retention period, which is a date for its destruction, attached to every record. This temporal aspect, however, does not apply to my scenario since the projects archived in this platform are stored as binary digits, which will be expounded later. \n\nContinuum Model\n\nTheoretically, archival scientists think that the continuum model represents record keeping activity as an ongoing movement in and through four dimensions and four axes: accountability, transactionality, evidentiality and record keeping containers. Continuum model is conceived as a multi-dimensional framework that the records are moved on or across these dimensions. This echoes with the alternative reality created in the digital realm, where digital images are not destroyed but transferred across systems. The idea of fidelity is also unnecessary in the virtual realm, since digital copy is limitness, which means the transition from record to archive is seamless and simultaneous.", 450, 110, boxWidth, boxHeight);
    image(img, 650, 400);
    img.resize(600,300);
}