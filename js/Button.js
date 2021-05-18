class Button{

	constructor(x, y, f){
		this.x = x;
		this.y = y;
		this.f = f;
		this.w = 100;
		this.h = 40;
	}

	display(){
		push();
		rectMode(CENTER);
		rect(this.x, this.y, this.w, this.h);
		textAlign(CENTER, CENTER);
		text(this.f ,this.x, this.y);
		pop();
		
	}

	click(){
		if(mouseX >= this.x-this.w/2 && mouseX <= this.x+this.w/2 && mouseY >= this.y-this.h/2 && mouseY <= this.y+this.h/2)
			filtro = (filtro == this.f ? "" : this.f);
	}
}