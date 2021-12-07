var width, height;
var sidebarOffset, rightOffset, boxWidth, boxHeight;
var img;

function preload() {
 
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
    text("Digital Uniqueness\n\nArchive is often conceived as a place of authenticity, so archivists have raised their concerns about technological obsolescence. (Williams, 2006, p.193) In a paper record, the message is inextricably attached to the medium, but electronic records are virtual – they only exist as binary digits randomly stored in a computer until you call them up. The medium is separate from the message. The limitation of technological record is that the obsolescence of medium since software updates and renewal are much faster than material innovation in the physical realm. This leads to constant migration between software and platform. Furthermore, electronic record brings the issue of tampering since each time the image was accessed, the metadata would be changed, which means the authenticity of the record could hardly be ascertained. \n\nFor archival scientist, the acquisition process is an assiduous process to receive new material into the archive. (Williams, 2006, p.63) Physical objects exist as different entities in the physical world and their existence would not overlap. Therefore, ownership of new items is transferred through donation or purchase. However, in the digital domain, the loose definition of a digital copy allows larger flexibility in terms of acquisition. If an image is on the public domain, virtually any person who gets access to the image owns the image, which nullifies any uniqueness of the item. This is an advantage but also a disadvantage if the image falls into malicious hands. \n\nIn the case of this platform, most of the images used are credited to the original architects or creators. However, the images have to be downloaded first and then be properly displayed on the platform, which means that there would be already a temporary transfer of ownership from the public domain to this private domain, and then to the curated public domain again, given that all of this happens in the background. For example, open-source website like Wikipedia also opens its portal to everyone online to edit most of the contents with caution. Even though the website is in public domain, the contents are still copyrighted under the Berne Convention, which means that open-source platforms are still regulated under certain legal framework. (Wikipedia, 2021) ", 450, 110, boxWidth, boxHeight);
   
}