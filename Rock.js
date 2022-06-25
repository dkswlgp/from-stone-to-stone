class Rock{
  constructor(img, x, y, w, h){
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.selected = false; //please
  }
  
  draw(){
    if(this.selected){
      tint(128);
      image(this.img, this.x, this.y, this.w, this.h);
      noTint();
    }else{
      noTint();
      image(this.img, this.x, this.y, this.w, this.h);
    }
  }
  
  checkClicked(){
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h){
      this.selected = true
    }else{
      this.selected = false
    }
  }
  


}