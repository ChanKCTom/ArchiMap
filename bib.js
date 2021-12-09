var width, height;
var sidebarOffset, rightOffset, boxWidth, boxHeight;
var img;

function preload() {
    img = loadImage("./dia/diagram-04.jpg");
}

function setup() {
    fill(255);
    textsize = 12;
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
    text("Ackwowledgement\n\nThis website is the final submission of the course : HTS Diploma Tracing the Archive, at the AA School of Architecture, 2021-2022.\n\nSpecial thanks to course tutor Edward Bottoms for his continuous advice, and Zach.Dev for technical support.\n\n\n\nChan Ka Chun Tom, December 2021\n\n\n\nBibliography\n\n\n\nBishop, Christopher M. (2006). Pattern Recognition and Machine Learning. New York: Springer\n\nCunningham, A. (2001) ‘Recent developments in standards for archival description and metadata’, presented at the International Seminar on Archival Descriptive Standards, University of Toronto.\n\nGreene, M. (1998) ‘“The surest proof”: a utilitarian approach to appraisal’, In American archival studies: readings in theory and practice. Society of American Archivists.\n\nInternational Council on Archives (2000) General International Standard Archival Description, 2nd edn. (ISAD(G)). Ottawa: International Council on Archives.\n\nWikipedia. (2021). “Wikipedia:Copyrights”. Retrieved from https://en.wikipedia.org/wiki/Wikipedia:Copyrights\n\nMcKemmish, S. (1993) Introducing archives and archival programs, In Keeping archives. Australian Society of Archivists.\n\nPearce-Moses, R. (2005) Glossary of Archival and Records Terminology. Society of American Archivists. Retrieved from https://dictionary.archivists.org/\n\nThe Conversation. (2020). ‘3.2 billion images and 720,000 hours of video are shared online daily. Can you sort real from fake?’. Retrieved from https://theconversation.com/3-2-billion-images-and-720-000-hours-of-video-are-shared-online-daily-can-you-sort-real-from-fake-148630\n\nToole, James M. (2000). Schellenberg, Theodore Roosevelt (1903-1970), archivist. American National Biography.\n\n", 450, 110, boxWidth, boxHeight);
 }