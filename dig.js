var width, height;
var sidebarOffset, rightOffset, boxWidth, boxHeight;
var img;

function preload() {
    img = loadImage("./dia/diagram-03.jpg");
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
    text("From a theoretical perspective, archival provenance relates to links of a record to purpose, function and activity. Provenance forms a collection of archives itself, of who created and maintained it, important to an understanding of its context, the interrelationship of the record in it. Archival scientists have valued provenance as a collective significance since an item would lost its meaning if it was treated as single item. Therefore, a unique arrangement will need to be developed.\n\nWhat this means for my digital platform is that digital provenance has a value greater than the item itself, since there is hardly any uniqueness of the item. Because every item such as image and digital model is replicable, metadata plays an important role in maintaining the relationship between the artifact and the context. Metadata consists of the date the file is created, the author created it and the location of where it is stored. By having a digital provenance that traces the lineage of an item by using metadata, we would be able to establish a network of collection that structures the interrelationship of the digital archive. ", 450, 110, boxWidth, boxHeight);
    image(img, 600, 300);
    img.resize(700,350);
}