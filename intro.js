var width, height;
var sidebarOffset, rightOffset, boxWidth, boxHeight;
var img;

function preload() {
    img = loadImage("./dia/intro.PNG");
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
    text("Archival science for the last 20 years has developed theoretical and conceptual models to provide an infrastructural framework for managing and arranging records. These conceptual ideas relating to appraisal and arrangement of records are geared towards institutional archives such as business and government archives.\n\nA new type of research archive emerged when I started organizing my research in the early stage of my unit work. It is an online ever-expanding archive hosted on a website platform. It started as a necessary organizational tool of architectural precedents for my own expedience. However, it gravitated towards a long-term project which by itself has an additional value, by augmenting it into an archival network of projects by emerging architects. As I searched for books about archival science for the last 20 years, I discovered that they provide a rigid approach to managing an archive, which to a certain extent is applicable to my platform. Yet, some of the theoretical and conceptual ideas collide or even contradict to many of the assumptions that I made when I was making the website.\n\nThis begs the question: Should the definition of archive be changed, loosen, or even broadened? Or is my platform not an archive after all? In the following part, I will try to explain what these theories and concepts are, and which of those work or not work for my platform, and perhaps the most important one, how we can reconcile the middle ground between the conventional institutional framework and the new emerging type of archive.", 450, 110, boxWidth, boxHeight);
    image(img, 680, 400);
    img.resize(450,300);
}