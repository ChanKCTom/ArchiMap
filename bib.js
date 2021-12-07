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
    text("Bibliography\n\nPearce-Moses, R. (2005) Glossary of Archival and Records Terminology. Society of American Archivists. Retrieved from https://dictionary.archivists.org/\n\nToole, James M. (2000). Schellenberg, Theodore Roosevelt (1903-1970), archivist. American National Biography. \n\nMcKemmish, S. (1993) Introducing archives and archival programs, In Keeping archives. Australian Society of Archivists.\n\nGreene, M. (1998) ‘“The surest proof”: a utilitarian approach to appraisal’, In American archival studies: readings in theory and practice. Society of American Archivists. \n\nCunningham, A. (2001) ‘Recent developments in standards for archival description and metadata’, presented at the International Seminar on Archival Descriptive Standards, University of Toronto. \n\nInternational Council on Archives (2000) General International Standard Archival Description, 2nd edn. (ISAD(G)). Ottawa: International Council on Archives. \n\nBishop, Christopher M. (2006). Pattern Recognition and Machine Learning. New York: Springer\n\nWikipedia. (2021). “Wikipedia:Copyrights”. Retrieved from https://en.wikipedia.org/wiki/Wikipedia:Copyrights\n\nSong, R. (2007). Joint Optimization of Wrapper Generation and Template Detection (PDF). The 13th International Conference on Knowledge Discovery and Data Mining: 894. Microsoft Research. \n\n", 450, 110, boxWidth, boxHeight);
 }