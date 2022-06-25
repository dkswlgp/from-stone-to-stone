class move {
  constructor(img, x, y, w, h){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
  }
  
  display(){
    image(this.img, this.x, this.y, this.w, this.h);
  }
  
  popup(){
    if(this.x < mouseX && mouseX < this.x+this.w && this.y < mouseY && mouseY < this.y+this.h){
     image(this.img, this.x, this.y, this.w*1.2, this.h*1.2);
    } else image(this.img, this.x, this.y, this.w, this.h);
  }
  
  definetf(){ //mousePressed함수에 쓰기 위해, 마우스 올려져 있으면 1, 아니면 0 반환
    if(this.x < mouseX && mouseX < this.x+this.w && this.y < mouseY && mouseY < this.y+this.h){
    return 1;
  } else return 0;
  }

  
  getbigger(){ //커져라
    if(this.w < width*0.3){
      this.w += 0.25;
      this.h += 0.25;
    } else {
      this.w = width*0.3;
      this.h = width*0.3;
    }
    }
  boodle(){ //부들부들 떨게
    if(this.x-this.w/2 < mouseX && mouseX < this.x+this.w/2 && this.y-this.h/2 < mouseY && mouseY < this.y+this.h/2){
      push();
      translate(this.x, this.y);
      if(frameCount % 20 < 10){
        rotate(0.3);
        image(this.img, 0, 0, this.w, this.h);
      } else image(this.img, 0, 0, this.w, this.h);
      pop();
    } else image(this.img, this.x, this.y, this.w, this.h);
  }
    
  
}