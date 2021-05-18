var w = 400, h = 400;

var btn;
var btn2;
var btn3;
var btn4;
var filtro = "";

function preload() {
	img = loadImage("assets/image.png");
	btn = new Button(600,100,"THRESHOLD");
	btn2 = new Button(710,100,"GRAY");
	btn3 = new Button(820,100,"INVERT");
	btn4 = new Button(930,100,"ERODE");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	image(img, width/2-w/2, height/2-h/2, w, h);
	if(filtro != "")
		filter(filtro);

	btn.display();
	btn2.display();
	btn3.display();
	btn4.display();

}

function mouseClicked(){
	btn.click();
	btn2.click();
	btn3.click();
	btn4.click();
}