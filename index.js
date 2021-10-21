//Zoom/Pan Component
//by Rick Companje, Nov 1, 2018.
//Enjoy!

var w, h, tow, toh; // image
var x, y, tox, toy; // position
var width, height, towidth, toheight; // canvas
var textsize, toTextsize, spacing, toSpacing; // text
var zoom = .002; //zoom step per mouse tick
var loadingStr = "Loading";
var categories = ["Iconic", "Interactive", "Scaled", "Technological"];
var currentCategories = [];
var currentProject;
var lines_limit, to_lines_limit, lines_seperation, to_lines_seperation;
var modal_is_opened = false;

/** MATTER.JS */
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;
var engine, world;
var box1, box2;

/** FIREBASE */
var firebaseConfig = {
    apiKey: "AIzaSyBUTe4Was0u6jItvYyCB2inMCJiY2XVtdo",
    authDomain: "archimap-ebe18.firebaseapp.com",
    projectId: "archimap-ebe18",
};
var app, db;
var projects = []; // array to store projects
var loaded = false;
var boxesSet = false;
var projects_years = [];



/** Firebase preload */
async function loadfb() {
    app = firebase.initializeApp(firebaseConfig);
    db = app.firestore();
    var snapshot = await db.collection("project__").get();
    snapshot.forEach(doc => {
        var data = doc.data();
        // data.Image = loadImage(data.Image);
        data.Image = loadImage(`./resources/crop/trimmed_${doc.id}.png`);
        data.Random_x = Math.random(); // random number generator for x
        data.Random_y = map(Math.random(), 0, 1, -1, 10); // random number generator for y
        projects.push({...data, id: doc.id});
    });
    // YEARS adjustment on y axis
    projects_years = projects.map(project => project.Year).filter((year, i) => year !== '0');
    projects.forEach(project => {
        project.Random_y = map(project.Year, Math.min(...projects_years), Math.max(...projects_years), 10, -1);
    });
    loaded = true;
}



function preload() {
    loadfb();
}

function setup() {
    /** Text setup */
    textAlign(CENTER);
    fill(255);
    textsize = toTextsize = 10;
    spacing = toSpacing = 10;

    width = towidth = windowWidth;
    height = toheight = windowHeight;
    createCanvas(width, height);
    w = tow = 200 /2; // set img width
    h = toh = 200 /2;
    x = tox = w / 2;
    y = toy = h / 2;
    lines_seperation = to_lines_seperation = 200;
    lines_limit = to_lines_limit = 6000;

    /** Engine setup */
    engine = Engine.create();
    engine.world.gravity.y = 0;
    world = engine.world;
    Engine.run(engine);

    /** Modal Click Btn */
    $('#modal-more-btn').click(e => {
        var search = $(e.target).data('search');
        var url = `https://www.google.com/search?q=${search}`;
        console.log(url);
        window.open(url, '_blank').focus();
    });
}

function draw() {
    background(0,0,0);
    cursor(ARROW);
    modal_is_opened = $("#modal_main").data('bs.modal')?._isShown;

    if (frameCount % 60 <= 20) {
        loadingStr = "Loading.";
    } else if (frameCount % 60 <= 40) {
        loadingStr = "Loading..";
    } else if (frameCount % 60 <= 59) {
        loadingStr = "Loading...";
    }

    //tween/smooth motion
    width = lerp(width, towidth, 0.1);
    height = lerp(height, toheight, 0.1);
    x = lerp(x, tox, .1);
    y = lerp(y, toy, .1);
    w = lerp(w, tow, .1); 
    h = lerp(h, toh, .1);
    textsize = lerp(textsize, toTextsize, 0.1);
    spacing = lerp(spacing, toSpacing, 0.1);
    lines_seperation = lerp(lines_seperation, to_lines_seperation, 0.1);
    lines_limit = lerp(lines_limit, to_lines_limit, 0.1);
    textSize(textsize);
    // upper corner = (x-w/2, y-h/2)
    if (!loaded) {
        // still loading
        push();
        textSize(100);
        text(loadingStr, x-w/2+width/2, y-h/2+height/2,);
        fill(100,100,100,100);
        noStroke();
        rect(x-w/2, y-h/2, width, height); 
        pop();
        return;
    }
    
    // ensure all projects LOADED

    /** Lines */
    stroke(100);
    strokeWeight(1);
    //   point(x-w/2+width/2, y-h/2+height/2); //center point
    // line(-9999, y-h/2+height/2, +9999, y-h/2+height/2); //horizontal axis
    // line(x-w/2+width/2, -9999, x-w/2+width/2, +9999); //vertical axis
    for (var i = -lines_limit; i < lines_limit; i += lines_seperation) { // seperation = 100
        line(-9999, y-h/2+height/2 + i, +9999, y-h/2+height/2 + i); //horizontal lines 
    }


    /** Axis Ranges */
    var ranges = {
        x: {
            min: x-w/2,
            max: x-w/2+width-w,
        },
        y: {
            min: y-h/2,
            max: y-h/2+height-h-spacing*6-textsize/2,
        },
    };


    var rectangle = {
        w, 
        h: h + spacing*3,
    };

    // Setup Engine Boxes
    for (var i = 0; i < projects.length; ++i) {
        var imagePos = {
            x: projects[i].Random_x * (ranges.x.max - ranges.x.min) + ranges.x.min, 
            y: projects[i].Random_y * (ranges.y.max - ranges.y.min) + ranges.y.min
        };
        if (!boxesSet) {
            // CREATE
            projects[i].box = Bodies.rectangle(imagePos.x, imagePos.y, rectangle.w, rectangle.h);
            World.add(world, projects[i].box);
        }
        else if (x != tox) { // moving
            // UPDATE by killing and re-adding
            // Matter.Body.set(projects[i].box, "position", {x: imagePos.x, y: imagePos.y});
            // Matter.Body.scale(projects[i].box, towidth / rectangle.w , toheight / rectangle.h);
            World.remove(world, projects[i].box);
            projects[i].box = Bodies.rectangle(imagePos.x, imagePos.y, rectangle.w, rectangle.h);
            World.add(world, projects[i].box);
        }
        else { // set and static
            // update random x and y
            projects[i].Random_x = (projects[i].box.position.x - ranges.x.min) / (ranges.x.max - ranges.x.min);
            projects[i].Random_y = (projects[i].box.position.y - ranges.y.min) / (ranges.y.max - ranges.y.min);
        }
        
    }
    boxesSet = true;
    // boxes all set
    currentCategories = [];
    currentProject = "";
    // set HOVER status
    for (var i = 0; i < projects.length; ++i) {
        if (mouseX > projects[i].box.position.x && mouseX < projects[i].box.position.x + rectangle.w
            && mouseY > projects[i].box.position.y && mouseY < projects[i].box.position.y + rectangle.h) {
            // hover object effect
            currentProject = projects[i];
            // set category
            categories.forEach(category => {
                if(projects[i][category]) {
                    currentCategories.push(category);
                }
            });
            if (currentCategories.length == 0) {
                currentCategories.push(projects[i].Name);
            }
        }
    }
    for (var i = 0; i < projects.length; ++i) {
        image(projects[i].Image, projects[i].box.position.x, projects[i].box.position.y, w, h);
        push();
            fill(200, 200, 200);
            noStroke();
            textStyle(BOLD);
            text(`${projects[i].Name}`, projects[i].box.position.x + w/2, projects[i].box.position.y + h + spacing*1);
        pop();
        push();
            fill(180, 180, 180);
            noStroke();
            textSize(spacing * 0.7);
            text(`${projects[i].Year}`, projects[i].box.position.x + w/2, projects[i].box.position.y + h + spacing*2);
        pop();
        push();
            noFill();
            noStroke();
            if (!modal_is_opened) {
                currentCategories.forEach(category => {
                    if(!projects[i][category] && projects[i].Name != category) {
                        // other hover effects
                        fill(0,0,0,180);
                        push();
                            cursor(HAND);
                        pop();
                    }
                });
                if (currentProject) {
                    // hover show categories on top of the page
                    push();
                        rectMode(CENTER);
                        fill(0,0,0,10);
                        stroke(125,125,125);
                        rect(width/2, 40, 300, 60);
                        stroke(255);
                        fill(255);
                        textSize(20);
                        var txt = currentCategories.join(', ');
                        if (txt == currentProject.Name) {
                            txt = "No Categories";
                        }
                        text(`${txt}`, width/2, 45);
                    pop();
                }
            }
            rect(projects[i].box.position.x, projects[i].box.position.y, rectangle.w, rectangle.h); // draw box
        pop();
    }
    
}

function mouseDragged() {
    if (modal_is_opened) {
        return;
    }
    tox += mouseX-pmouseX;
    toy += mouseY-pmouseY;
}

function mouseWheel(event) {
    if (modal_is_opened) {
        return;
    }
    var e = -event.delta;

    if (e>0) { //zoom in
        for (var i=0; i<e; i++) {
            if (towidth>20*windowWidth) return; //max zoom
            towidth *= zoom+1;
            toheight *= zoom+1;
            tox -= zoom * (mouseX - tox);
            toy -= zoom * (mouseY - toy);
            tow *= zoom+1;
            toh *= zoom+1;
            toTextsize *= zoom+1;
            toSpacing *= zoom+1;
            to_lines_seperation *= zoom+1;
            to_lines_limit *= zoom+1;
        }
    }
    
    if (e<0) { //zoom out
        for (var i=0; i<-e; i++) {
            if (towidth<0.5*windowWidth) return; //min zoom
            towidth /= zoom+1;
            toheight /= zoom+1;
            tox += zoom/(zoom+1) * (mouseX - tox); 
            toy += zoom/(zoom+1) * (mouseY - toy);
            toh /= zoom+1;
            tow /= zoom+1;
            toTextsize /= zoom+1;
            toSpacing /= zoom+1;
            to_lines_seperation /= zoom+1;
            to_lines_limit /= zoom+1;
        }
    }
}

function mouseClicked() {
    if (currentProject && !modal_is_opened) {
        $('#modal-image').attr("src", `./resources/crop/trimmed_${currentProject.ID}.png`);
        $('#modal-name').text(currentProject.Name);
        $('#modal-year').text(currentProject.Year);
        $('#modal-location').text(currentProject.Location);
        $('#modal-architect').text(currentProject.Architect);
        $("#modal-country").text(currentProject.Country);
        $("#modal-school").text(currentProject.School);
        $('#modal-more-btn').data('search', `${currentProject.Name} by ${currentProject.Architect}`);
        $('#modal_main').modal('show');
    }
}