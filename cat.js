var width, height;
var sidebarOffset, rightOffset, boxWidth, boxHeight;
var img;

function preload() {
    img = loadImage("./dia/diagram-04.jpg");
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
    text("Cataloging and Managing\n\nConventionally, different standards provide guidance to archivists for a reference point. “General International Standard Archival Description”, also known as ISAD(G), was one of the commonly used standards, first published by the ICA in 1994. (International Council on Archives, 2000) This standard suggests elements of description, which include a vast array of archival description for cataloguing, such as reference code, title, level of description, name of creator and medium of the unit of description. This helps to create aids for finding for staff to locate contents physically. Each collection will have been allocated a unique accession number, a location and brief details of its provenance, content, covering dates and extent. (Williams, 2006, p.71)\n\nHowever, the source of information is imported from the web through tools like web scraper. The process refers to an automated process implemented using a bot or web crawler. It is a form of copying in which specific data is gathered and copied from the web, typically into a central local database or spreadsheet, for later retrieval or analysis. (Song, 2007) This website, subsequently, uses the imported data to create the metadata of the archive. The data of description and catalogue consist of the following fields: project name, project location, project date, project architect, origin of architect, and education of background of architect. These fundamental fields of information align with the original intent of the archive, which is to establish an archival network of projects by emerging architects.", 450, 110, boxWidth, boxHeight);
 
}