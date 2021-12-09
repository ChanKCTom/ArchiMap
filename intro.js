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
    text("How long would it take for a person to look at all the images uploaded online in a single day? It would take 50.7 years for an average person to browse through all images online shared daily! (The Conversation, 2020) It is virtually impossible to extract any meaningful material manually, given this sheer amount of data. The situation for architects and architecture students are worse since we mainly work with visual contents, such as photos, renderings and diagrams. This is where my archival project started, not as a perfect technical solution to solve this problem of information explosion, but as a prologue of how archival theory could help us organize and catalogue meaning substance in this digital abyss. \n\n\Archival science for the last half a century has developed theoretical and conceptual models to provide an infrastructural framework for managing and arranging records. (Williams, 2006, p.24) These conceptual ideas relating to appraisal and arrangement of records are geared towards institutional archives such as business and government archives, which are beneficial to the cultural and information sector. (Williams, 2006, p.1)\n\n\However, a new type of research archive emerged when I started organizing my research in the early stage of this unit work. It is an online ever-expanding archive hosted on a website platform. It started as a necessary organizational tool of architectural precedents for this own expedience. However, it gravitated towards a long-term project which by itself has an additional value, by augmenting it into an affinitive network of projects by emerging architects. As I searched for books about archival science for the last 20 years, I discovered that they provide a rigid approach to managing an archive, which to a certain extent is applicable to this platform. Yet, some of the theoretical and conceptual ideas collide or even contradict to many of the assumptions that I made when I was making the website. \n\n\This begs the question: Should the definition of archive be changed, loosen, or even broadened? Or is this platform not an archive after all? In the following part, I will try to explain what these theories and concepts are, and which of those work or not work for this platform, and perhaps the most important one, how we can reconcile the middle ground between the conventional institutional framework and the new emerging type of archive.", 450, 110, boxWidth, boxHeight);
    // image(img, 780, 450);
    // img.resize(300,250);
}