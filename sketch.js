let stage = 0;
let patternNumber = -1;
let wrapNumber = -1;
let groundNumber = -1;

//bgm+home+capture버튼
let bgm;
let bgmButton;
let bgmButtonOff;
let bgmOn = false;
let home;
let myCanvas;
let saveImgFront;
let saveImgBack;
let x;
let left = 0;

//step2
let colorPicker;
var fillColor = "white";
var colorPalette = [
  "red",
  "orange",
  "yellow",
  "lime",
  "blue",
  "purple",
  "pink",
  "cyan",
  "maroon",
  "green",
  "black",
  "white",
];
var palettes = [];
var k = 60; //팔레트 원 지름
var pHeight;

//step3;
let rocks;
let drawRockBezierFunctions;
let drawPatternFunctionMatrix;

//step4 : 메시지 작성
let messageBox;
let fromBox;
let toBox;
let message;
let from;
let to;

//step5 : 저장하기
let emailBox;
let button;
let prevDefinetf;

//step7 : 컨페티
let confettiColor = []
let confetti = [];

function preload() {
  fontRegular = loadFont("assets/MaruBuri-Regular.ttf");
  fontBold = loadFont("assets/MaruBuri-Bold.ttf");
  fontAvenir = loadFont("assets/Avenir Black.ttf");
  opening0 = loadImage("assets/opening0.png");
  opening1 = loadImage("assets/opening1.png");
  opening2 = loadImage("assets/opening2.png");
  step1 = loadImage("assets/step1.png");
  step2 = loadImage("assets/step2.png");
  step3 = loadImage("assets/step3.png");
  step4 = loadImage("assets/step4.png");
  step5 = loadImage("assets/step5.png");
  step6 = loadImage("assets/step6.png");
  step7 = loadImage("assets/step7.png");
  step8 = loadImage("assets/step8.png");
  rock1 = loadImage("assets/rock1.png");
  rock2 = loadImage("assets/rock2.png");
  rock3 = loadImage("assets/rock3.png");
  rock4 = loadImage("assets/rock4.png");
  rock5 = loadImage("assets/rock5.png");
  rock6 = loadImage("assets/rock6.png");

  //bgm+home+capture
  bgm = loadSound("assets/bgm.mp3");
  buttonBgmOn = loadImage("assets/bgmOn.png");
  buttonBgmOff = loadImage("assets/bgmOff.png");
  home = loadImage("assets/home.png");
  capture = loadImage("assets/capture.png");

  //step2
  //pattern_circle
  pC1 = loadImage("assets/pCircle1.png");
  pC2 = loadImage("assets/pCircle2.png");
  pC3 = loadImage("assets/pCircle3.png");
  pC4 = loadImage("assets/pCircle4.png");
  pC5 = loadImage("assets/pCircle5.png");
  pC6 = loadImage("assets/pCircle6.png");
  pC7 = loadImage("assets/pCircle7.png");
  pC8 = loadImage("assets/pCircle8.png");
  pC9 = loadImage("assets/pCircle9.png");
  pC10 = loadImage("assets/pCircle10.png");
  pC11 = loadImage("assets/pCircle11.png");
  pC12 = loadImage("assets/pCircle12.png");
  pC13 = loadImage("assets/pCircle13.png");
  pC14 = loadImage("assets/pCircle14.png");
  pC15 = loadImage("assets/pCircle15.png");

  //rock1_pattern
  r1P1 = loadImage("assets/r1Pattern1.png");
  r1P2 = loadImage("assets/r1Pattern2.png");
  r1P3 = loadImage("assets/r1Pattern3.png");
  r1P4 = loadImage("assets/r1Pattern4.png");
  r1P5 = loadImage("assets/r1Pattern5.png");
  r1P6 = loadImage("assets/r1Pattern6.png");
  r1P7 = loadImage("assets/r1Pattern7.png");
  r1P8 = loadImage("assets/r1Pattern8.png");
  r1P9 = loadImage("assets/r1Pattern9.png");
  r1P10 = loadImage("assets/r1Pattern10.png");
  r1P11 = loadImage("assets/r1Pattern11.png");
  r1P12 = loadImage("assets/r1Pattern12.png");
  r1P13 = loadImage("assets/r1Pattern13.png");
  r1P14 = loadImage("assets/r1Pattern14.png");
  r1P15 = loadImage("assets/r1Pattern15.png");

  //rock2_pattern
  r2P1 = loadImage("assets/r2Pattern1.png");
  r2P2 = loadImage("assets/r2Pattern2.png");
  r2P3 = loadImage("assets/r2Pattern3.png");
  r2P4 = loadImage("assets/r2Pattern4.png");
  r2P5 = loadImage("assets/r2Pattern5.png");
  r2P6 = loadImage("assets/r2Pattern6.png");
  r2P7 = loadImage("assets/r2Pattern7.png");
  r2P8 = loadImage("assets/r2Pattern8.png");
  r2P9 = loadImage("assets/r2Pattern9.png");
  r2P10 = loadImage("assets/r2Pattern10.png");
  r2P11 = loadImage("assets/r2Pattern11.png");
  r2P12 = loadImage("assets/r2Pattern12.png");
  r2P13 = loadImage("assets/r2Pattern13.png");
  r2P14 = loadImage("assets/r2Pattern14.png");
  r2P15 = loadImage("assets/r2Pattern15.png");

  //rock3_pattern
  r3P1 = loadImage("assets/r3Pattern1.png");
  r3P2 = loadImage("assets/r3Pattern2.png");
  r3P3 = loadImage("assets/r3Pattern3.png");
  r3P4 = loadImage("assets/r3Pattern4.png");
  r3P5 = loadImage("assets/r3Pattern5.png");
  r3P6 = loadImage("assets/r3Pattern6.png");
  r3P7 = loadImage("assets/r3Pattern7.png");
  r3P8 = loadImage("assets/r3Pattern8.png");
  r3P9 = loadImage("assets/r3Pattern9.png");
  r3P10 = loadImage("assets/r3Pattern10.png");
  r3P11 = loadImage("assets/r3Pattern11.png");
  r3P12 = loadImage("assets/r3Pattern12.png");
  r3P13 = loadImage("assets/r3Pattern13.png");
  r3P14 = loadImage("assets/r3Pattern14.png");
  r3P15 = loadImage("assets/r3Pattern15.png");

  //rock4_pattern
  r4P1 = loadImage("assets/r4Pattern1.png");
  r4P2 = loadImage("assets/r4Pattern2.png");
  r4P3 = loadImage("assets/r4Pattern3.png");
  r4P4 = loadImage("assets/r4Pattern4.png");
  r4P5 = loadImage("assets/r4Pattern5.png");
  r4P6 = loadImage("assets/r4Pattern6.png");
  r4P7 = loadImage("assets/r4Pattern7.png");
  r4P8 = loadImage("assets/r4Pattern8.png");
  r4P9 = loadImage("assets/r4Pattern9.png");
  r4P10 = loadImage("assets/r4Pattern10.png");
  r4P11 = loadImage("assets/r4Pattern11.png");
  r4P12 = loadImage("assets/r4Pattern12.png");
  r4P13 = loadImage("assets/r4Pattern13.png");
  r4P14 = loadImage("assets/r4Pattern14.png");
  r4P15 = loadImage("assets/r4Pattern15.png");

  //rock5_pattern //기존의 6번째 돌멩이가 5번째가 되었습니다
  r5P1 = loadImage("assets/r6Pattern1.png");
  r5P2 = loadImage("assets/r6Pattern2.png");
  r5P3 = loadImage("assets/r6Pattern3.png");
  r5P4 = loadImage("assets/r6Pattern4.png");
  r5P5 = loadImage("assets/r6Pattern5.png");
  r5P6 = loadImage("assets/r6Pattern6.png");
  r5P7 = loadImage("assets/r6Pattern7.png");
  r5P8 = loadImage("assets/r6Pattern8.png");
  r5P9 = loadImage("assets/r6Pattern9.png");
  r5P10 = loadImage("assets/r6Pattern10.png");
  r5P11 = loadImage("assets/r6Pattern11.png");
  r5P12 = loadImage("assets/r6Pattern12.png");
  r5P13 = loadImage("assets/r6Pattern13.png");
  r5P14 = loadImage("assets/r6Pattern14.png");
  r5P15 = loadImage("assets/r6Pattern15.png");

  //포장지
  wrap1 = loadImage("assets/wrap1.png");
  wrap1A = loadImage("assets/wrap1A.png");
  wrap1B = loadImage("assets/wrap1B.png");
  wrap2 = loadImage("assets/wrap2.png");
  wrap2A = loadImage("assets/wrap2A.png");
  wrap2B = loadImage("assets/wrap2B.png");
  wrap3 = loadImage("assets/wrap3.png");
  wrap3A = loadImage("assets/wrap3A.png");
  wrap3B = loadImage("assets/wrap3B.png");
  wrap4 = loadImage("assets/wrap4.png");
  wrap4A = loadImage("assets/wrap4A.png");
  wrap4B = loadImage("assets/wrap4B.png");

  //배경색 원
  bC1 = loadImage("assets/backCircle1.png");
  bC2 = loadImage("assets/backCircle2.png");
  bC3 = loadImage("assets/backCircle3.png");
  bC4 = loadImage("assets/backCircle4.png");
  bC5 = loadImage("assets/backCircle5.png");
  bC6 = loadImage("assets/backCircle6.png");
  bC7 = loadImage("assets/backCircle7.png");
  bC8 = loadImage("assets/backCircle8.png");

  //배경색
  back1 = loadImage("assets/backColor1.png");
  back2 = loadImage("assets/backColor2.png");
  back3 = loadImage("assets/backColor3.png");
  back4 = loadImage("assets/backColor4.png");
  back5 = loadImage("assets/backColor5.png");
  back6 = loadImage("assets/backColor6.png");
  back7 = loadImage("assets/backColor7.png");
  back8 = loadImage("assets/backColor8.png");

  //엽서 꾸미기
  stamp = loadImage("assets/stamp.png");
  
  //아웃트로
  credit1 = loadImage("assets/credit1.png");
  credit2 = loadImage("assets/credit2.png");
  credit3 = loadImage("assets/credit3.png");
  credit4 = loadImage("assets/credit4.png");
  credit5 = loadImage("assets/credit5.png");
  name1 = loadImage("assets/name1.png");
  name2 = loadImage("assets/name2.png");
  name3 = loadImage("assets/name3.png");
  name4 = loadImage("assets/name4.png");
  name5 = loadImage("assets/name5.png");
}

function setup() {
  myCanvas = createCanvas(1800, 1200);
  background(0);
  noStroke();
  d = 170;
  //컬러 피커 위치
  colorPicker = createColorPicker(color(53,176,255));
  colorPicker.position(-100, 800);
  colorPicker.size(60,60);
  p = color(colorPicker.color());
  //메시지 박스
  messageBox = createInput();
  messageBox.position(-1000, height / 2 - 40);
  messageBox.input(typing);
  stuff = "";

  //bgm+home+capture버튼
  bgmButton = new move(
    buttonBgmOn,
    width * 0.94,
    width * 0.025,
    width * 0.03,
    width * 0.03
  );
  bgmButtonOff = new move(
    buttonBgmOff,
    width * 0.94,
    width * 0.025,
    width * 0.03,
    width * 0.03
  );
  homeButton = new move(
    home,
    width * 0.9,
    width * 0.025,
    width * 0.03,
    width * 0.03
  );
  captureButton = new move(
    capture,
    width * 0.86,
    width * 0.025,
    width * 0.03,
    width * 0.03
  );

  rocks = [];
  rocks.push(new Rock(rock1, 200, 450, 240, 331));
  rocks.push(new Rock(rock2, 500, 450, 240, 358));
  rocks.push(new Rock(rock3, 800, 450, 240, 292));
  rocks.push(new Rock(rock4, 1100, 450, 240, 308));
  rocks.push(new Rock(rock6, 1400, 450, 240, 415));

  drawRockBezierFunctions = [];
  drawRockBezierFunctions.push(drawRockBezier1);
  drawRockBezierFunctions.push(drawRockBezier2);
  drawRockBezierFunctions.push(drawRockBezier3);
  drawRockBezierFunctions.push(drawRockBezier4);
  drawRockBezierFunctions.push(drawRockBezier5);

  patternNumber = -1;

  setupDrawPatternFunctions();
  
  confettiColor = [color(255), color('#ec008c'), color(242,255,159)];
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
  }
}

function draw() {
  switch (stage) {
    case 0:
      image(opening0, 0, 0, 1800, 1200);
      break;
    case 1:
      image(opening1, 0, 0, 1800, 1200);
      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();
      break;
    case 2:
      image(opening2, 0, 0, 1800, 1200);
      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();
      break;
    case 3:
      //step1 돌 모양
      image(step1, 0, 0);
      for (let rock of rocks) {
        rock.draw();
      }

      //bgm
      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();
      break;
    case 4:
      //step2 돌 색깔
      image(step2, 0, 0);
      rockDrawSetup();
      step2rock1();

      //bgm
      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();
      break;
    case 5:
      //step3 포장지+배경색
      image(step3, 0, 0);
      step3Setup();
      drawGround(groundNumber);
      drawWrapB();
      rockDraw();
      for (let i = 0; i < 5; i++) {
        if (rocks[i].selected) {
          drawPattern(i, 0);
        }
      }
      WrappingClickedA();

      //bgm
      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();
      break;
    case 6:
      //step4 메시지 작성
      image(step4, 0, 0);
      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();

      step4background();
      step4WrappingClickedB();
      step4rockDraw();
      rX = -460;

      for (let i = 0; i < 5; i++) {
        if (rocks[i].selected) {
          drawPattern(i, rX);
        }
      }

      step4WrappingClickedA();

      //엽서 그리기
      rectMode(CENTER);
      fill(255);
      rect(1230, height / 2, 900, 600);
      fill(0);
      textWrap(CHAR);

      //엽서 제목
      fill(0);
      textSize(30);
      textFont(fontBold);
      text("돌멩이가 돌멩이에게", 805, 360);

      //중간선
      stroke(190);
      line(1235, height / 2 - 250, 1235, height / 2 + 250);
      
      image(stamp, 1540, 320, 120, 150);
      
      //꾸밈
      stroke(190);
      noFill();
      ellipse(1470, 480, 85, 85);
      ellipse(1470, 480, 62, 62);
      bezier(1480, 480, 1520, 440, 1560, 520, 1600, 470);
      bezier(1480, 488, 1520, 448, 1560, 528, 1600, 478);
      bezier(1480, 496, 1520, 456, 1560, 536, 1600, 486);

      noFill();
      stroke(190);
      strokeWeight(1);
      rect(1392, height / 2 + 200, 42, 60);
      rect(1445, height / 2 + 200, 42, 60);
      rect(1498, height / 2 + 200, 42, 60);
      rect(1551, height / 2 + 200, 42, 60);
      rect(1604, height / 2 + 200, 42, 60);

      
      fill(0);
      textFont(fontBold);
      textSize(17);
      text("To. 엽서를 만든 다른 돌멩이", 1370, height / 2 + 150);

      //메시지 입력
      messageBox.position(820, height / 2 - 80);
      messageBox.style('font-size', '17px');
      messageBox.size(350,28);

      textSize(22);
      text("Your Message", 820, height / 2 - 100);

      fill(255);
      noStroke();
      rect(1010, 750, 440, 280);

      //메시지 입력 확인
      fill(0);
      textFont(fontRegular);
      textSize(18);
      textLeading(33);
      text(stuff, 1005, height / 2 - 10, 370);
      break;
    case 7:
      //step5 저장하기
      if (prevDefinetf == captureButton.definetf()) {
        removeElements();
        image(step5, 0, 0, 1800, 1200);

        step4background();
        step4WrappingClickedB();
        step4rockDraw();
        rX = -460;

        for (let i = 0; i < 5; i++) {
          if (rocks[i].selected) {
            drawPattern(i, rX);
          }
        }
        step4WrappingClickedA();

        //엽서 그리기
        rectMode(CENTER);
        fill(255);
        rect(1230, height / 2, 900, 600);
        fill(0);
        textWrap(CHAR);
        //엽서 제목
        fill(0);
        textSize(30);
        textFont(fontBold);
        text("돌멩이가 돌멩이에게", 805, 360);

        //중간선
        stroke(190);
        line(1235, height / 2 - 250, 1235, height / 2 + 250);

        image(stamp, 1540, 320, 120, 150);

        //꾸밈
        stroke(190);
        noFill();
        ellipse(1470, 480, 85, 85);
        ellipse(1470, 480, 62, 62);
        bezier(1480, 480, 1520, 440, 1560, 520, 1600, 470);
        bezier(1480, 488, 1520, 448, 1560, 528, 1600, 478);
        bezier(1480, 496, 1520, 456, 1560, 536, 1600, 486);

        noFill();
        stroke(190);
        strokeWeight(1);
        rect(1392, height / 2 + 200, 42, 60);
        rect(1445, height / 2 + 200, 42, 60);
        rect(1498, height / 2 + 200, 42, 60);
        rect(1551, height / 2 + 200, 42, 60);
        rect(1604, height / 2 + 200, 42, 60);


        //수신자 입력
        fill(0);
        textFont(fontBold);
        textSize(17);
        text("To. 엽서를 만든 다른 돌멩이", 1370, height / 2 + 150);

        //메시지
        textSize(22);
        textFont(fontBold);
        text("Your Message", 820, height / 2 - 50);
        
        //메시지 표현
        let messageInp = messageBox.value();
        fill(0);
        textAlign(LEFT);
        textSize(18);
        textFont(fontRegular);
        textLeading(33);
        text(messageInp, 1005, height / 2 - 10, 370);


      }
      prevDefinetf = captureButton.definetf();

      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();
      captureButton.popup();

      break;
    case 8: //step6 이메일 주소 입력
        image(step6, 0, 0, 1800, 1200);

      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();

      // sendEmail();
      break;
    case 9: //컨페티
      background(53,176,255);
      image(step7, 0, 0);
      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();
      drawGround(groundNumber);
      drawWrapB();

      rockDraw();
      for (let i = 0; i < 5; i++) {
        if (rocks[i].selected) {
          // console.log("draw rock.");
          drawPattern(i, 0);
        }
      }
      WrappingClickedA();
      
      //confetti
      for (let i = 0; i < confetti.length / 2; i++) {
        confetti[i].confettiDisplay();

        if (confetti[i].y > height) {
          confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
        }
      }
      for (let i = int(confetti.length / 2); i < confetti.length; i++) {
        confetti[i].confettiDisplay();

        if (confetti[i].y > height) {
          confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
        }
      }
      break;
      case 10://아웃트로
      background(0);
      image(step8,0,0);
      if (bgmOn == true) bgmButton.popup();
      else bgmButtonOff.popup();
      homeButton.popup();
        
      for (let x = 0; x < 30; x = x + 15) {
        left -= 1;
        fill(255);
        textSize(20);
        // 스크린에 글자를 그립니다
        image(name1, 1780 + left, height / 2 - 210, 60, 60);
        image(name2, 2080 + left, height / 2 - 210, 60, 60);
        image(name3, 2380 + left, height / 2 - 210, 60, 60);
        image(name4, 2680 + left, height / 2 - 210, 60, 60);
        image(name5, 2980 + left, height / 2 - 210, 60, 60);
        image(credit1, 1700 + left, height / 2 - 150, 180, 270);
        image(credit2, 2000 + left, height / 2 - 150, 180, 270);
        image(credit3, 2300 + left, height / 2 - 150, 180, 270);
        image(credit4, 2600 + left, height / 2 - 150, 180, 270);
        image(credit5, 2900 + left, height / 2 - 150, 180, 270);
        textSize(30);
        text("Thank You for Playing :)", 3200 + left, height / 2);
      }
  }
}

function mouseClicked() {
  if (bgmButton.definetf() == 1) {
    if (bgmOn == false) {
      bgm.loop();
      bgmOn = true;
    } else {
      bgm.pause();
      bgmOn = false;
    }
  }

  if (homeButton.definetf() == 1) {
    removeElements();
    stage = 0;
    patternNumber = -1;
    wrapNumber = -1;
    groundNumber = -1;
    bgm.stop();
    for (let rock of rocks) {
      rock.checkClicked();
    }
    
    confetti.splice(0);
    for (let i = 0; i < 100; i++) {
      confetti[i] = new Confetti(random(0, width), random(-height, 0), random(-1, 1));
    }
    
    //컬러 피커 위치
    colorPicker = createColorPicker(color(53,176,255));
    colorPicker.position(-100, 800);
    //메시지 박스
    messageBox = createInput();
    messageBox.position(-1000, height / 2 - 40);
    messageBox.input(typing);
    stuff = "";
  }

  if (captureButton.definetf() == 1) {
    saveImgFront = myCanvas.get(120,180,600,900);
    saveImgFront.save('My Postcard', 'png');
    saveImgBack = myCanvas.get(780,300,900,600);
    saveImgBack.save('My Message', 'png');
  }
  // console.log(stage);
  switch (stage) {
    case 0:
      //opening0
      if (mouseX > 1483 && mouseX < 1723 && mouseY > 921 && mouseY < 1118) {
        stage = 1;
        bgm.playMode("restart");
        bgm.play();
        bgmOn = true;
      }
      break;
    case 1:
      //opening1
      if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114) {
        stage = 2;
      }
      break;
    case 2:
      if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114) {
        stage = 3;
        // image(step1, 0, 0);
        rectMode(CORNER);
      }
      break;
    case 3:
      for (let rock of rocks) {
        if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114) {
          stage = 4;
        } else {
          rock.checkClicked();
        }
      }

      break;
    case 4:
      if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114) {
        stage = 5;
        colorPicker.position(-100, 800);
      } else {
        patternClicked(300, 380, 270, 350, 0);
        patternClicked(300, 380, 370, 450, 1);
        patternClicked(300, 380, 470, 550, 2);
        patternClicked(300, 380, 570, 650, 3);
        patternClicked(300, 380, 670, 750, 4);
        patternClicked(300, 380, 770, 850, 5);
        patternClicked(300, 380, 870, 950, 6);
        patternClicked(400, 480, 270, 350, 7);
        patternClicked(400, 480, 370, 450, 8);
        patternClicked(400, 480, 470, 550, 9);
        patternClicked(400, 480, 570, 650, 10);
        patternClicked(400, 480, 670, 750, 11);
        patternClicked(400, 480, 770, 850, 12);
        patternClicked(400, 480, 870, 950, 13);
        patternClicked(400, 480, 970, 1050, 14);
      }
      break;
    case 5:
      if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114) {
        stage = 6;
      } else {
        wrapClicked(100, 100 + 80, 260 + 150, 260 + 150 + 80, 0);
        wrapClicked(200, 200 + 80, 260 + 150, 260 + 150 + 80, 1);
        wrapClicked(300, 300 + 80, 260 + 150, 260 + 150 + 80, 2);
        wrapClicked(400, 400 + 80, 260 + 150, 260 + 150 + 80, 3);
        groundClicked(100, 100 + 80, 430 + 150, 430 + 150 + 80, 0);
        groundClicked(200, 200 + 80, 430 + 150, 430 + 150 + 80, 1);
        groundClicked(300, 300 + 80, 430 + 150, 430 + 150 + 80, 2);
        groundClicked(400, 400 + 80, 430 + 150, 430 + 150 + 80, 3);
        groundClicked(100, 100 + 80, 530 + 150, 530 + 150 + 80, 4);
        groundClicked(200, 200 + 80, 530 + 150, 530 + 150 + 80, 5);
        groundClicked(300, 300 + 80, 530 + 150, 530 + 150 + 80, 6);
        groundClicked(400, 400 + 80, 530 + 150, 530 + 150 + 80, 7);
      }
      break;
    case 6:
      if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114) {
        stage = 7;
      }
      break;
    case 7:
      //step5 저장하기
      if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114) {
        removeElements();
        stage = 8; //이메일 주소 입력

        emailBox = createInput();
        emailBox.position(400, height / 2 - 70);
        emailBox.style('font-size', '35px');
        emailBox.size(1000, 80);
        emailBox.input(typing);
        stuff = "";

        //이메일주소 확인
        button = createButton("확인");
        button.size(100, 85);
        button.position(1420, height / 2 - 70);
        button.style('font-size', '25px');
        button.mousePressed(sendEmail);
      }
      break;
    case 8:
      //step6 이메일 주소 입력하기
      if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114) {
        removeElements();
        stage = 9;
      }
      break;
    case 9:
      //step7 축하
     if (mouseX > 1603 && mouseX < 1739 && mouseY > 1007 && mouseY < 1114)  {
        stage = 10;
      }
    case 10: 
      //크레딧
      break;
    default:
  }
}



// 팔레트 색깔 저장
function Palette(x, y, c) {
  this.x = x;
  this.y = y;
  this.pColor = c;
}

function rockDraw() {
  //!!!계령수정(12:30)
  drawRockBezier(170, 400, true);
}

function step4rockDraw() {
  drawRockBezier(170, -60, true);
}

function rockDrawSetup() {
  drawRockBezier(170, 400, false);
}

function drawRockBezier(d, rX, pltte) {
  noStroke();
  if (pltte) {
    fill(p);
  }

  for (let i in rocks) {
    let rock = rocks[i];
    // console.log(rock)
    if (rock.selected) {
      drawRockBezierFunctions[i](d, rX);
      // console.log(i)
    }
  }
}

function drawRockBezier1(d, rX) {
  beginShape();
  vertex(300 + d + rX, 225 + d);
  bezierVertex(
    300 + d + rX,
    225 + d,
    151 + d + rX,
    207 + d,
    148 + d + rX,
    605 + d
  );
  bezierVertex(
    100 + d + rX,
    803 + d,
    474 + d + rX,
    657 + d,
    490 + d + rX,
    555 + d
  );
  bezierVertex(
    506 + d + rX,
    453 + d,
    495 + d + rX,
    233 + d,
    300 + d + rX,
    225 + d
  );
  endShape();
}
function drawRockBezier2(d, rX) {
  beginShape();
  vertex(342 + d + rX, 189 + d);
  bezierVertex(
    342 + d + rX,
    189 + d,
    261 + d + rX,
    158 + d,
    177 + d + rX,
    278 + d
  );
  bezierVertex(
    93 + d + rX,
    399 + d,
    90 + d + rX,
    422 + d,
    151 + d + rX,
    540 + d
  );
  bezierVertex(
    212 + d + rX,
    659 + d,
    220 + d + rX,
    589 + d,
    259 + d + rX,
    697 + d
  );
  bezierVertex(
    298 + d + rX,
    805 + d,
    466 + d + rX,
    678 + d,
    476 + d + rX,
    539 + d
  );
  bezierVertex(
    486 + d + rX,
    400 + d,
    479 + d + rX,
    227 + d,
    342 + d + rX,
    189 + d
  );
  endShape();
}
function drawRockBezier3(d, rX) {
  beginShape();
  vertex(300 + d + rX, 246 + d);
  bezierVertex(
    300 + d + rX,
    246 + d,
    125 + d + rX,
    204 + d,
    123 + d + rX,
    485 + d
  );
  bezierVertex(
    115 + d + rX,
    564 + d,
    208 + d + rX,
    699 + d,
    259 + d + rX,
    714 + d
  );
  bezierVertex(
    310 + d + rX,
    729 + d,
    489 + d + rX,
    619 + d,
    510 + d + rX,
    521 + d
  );
  bezierVertex(
    530 + d + rX,
    423 + d,
    481 + d + rX,
    339 + d,
    408 + d + rX,
    270 + d
  );
  bezierVertex(
    336 + d + rX,
    224 + d,
    350 + d + rX,
    246 + d,
    300 + d + rX,
    246 + d
  );
  endShape();
}
function drawRockBezier4(d, rX) {
  beginShape();
  vertex(318 + d + rX, 235 + d);
  bezierVertex(
    318 + d + rX,
    235 + d,
    230 + d + rX,
    214 + d,
    155 + d + rX,
    414 + d
  );
  bezierVertex(
    95 + d + rX,
    569 + d,
    136 + d + rX,
    567 + d,
    150 + d + rX,
    609 + d
  );
  bezierVertex(
    168 + d + rX,
    643 + d,
    212 + d + rX,
    666 + d,
    220 + d + rX,
    688 + d
  );
  bezierVertex(
    229 + d + rX,
    709 + d,
    262 + d + rX,
    720 + d,
    300 + d + rX,
    716 + d
  );
  bezierVertex(
    337 + d + rX,
    713 + d,
    323 + d + rX,
    724 + d,
    354 + d + rX,
    731 + d
  );
  bezierVertex(
    385 + d + rX,
    738 + d,
    503 + d + rX,
    673 + d,
    508 + d + rX,
    614 + d
  );
  bezierVertex(
    514 + d + rX,
    555 + d,
    504 + d + rX,
    546 + d,
    450 + d + rX,
    474 + d
  );
  bezierVertex(
    427 + d + rX,
    405 + d,
    463 + d + rX,
    427 + d,
    428 + d + rX,
    340 + d
  );
  bezierVertex(
    394 + d + rX,
    254 + d,
    352 + d + rX,
    229 + d,
    318 + d + rX,
    235 + d
  );
  endShape();
}
function drawRockBezier5(d, rX) {
  beginShape();
  vertex(226 + d + rX, 227 + d);
  bezierVertex(
    226 + d + rX,
    227 + d,
    134 + d + rX,
    249 + d,
    151 + d + rX,
    361 + d
  );
  bezierVertex(
    168 + d + rX,
    474 + d,
    199 + d + rX,
    609 + d,
    217 + d + rX,
    654 + d
  );
  bezierVertex(
    234 + d + rX,
    699 + d,
    263 + d + rX,
    736 + d,
    300 + d + rX,
    733 + d
  );
  bezierVertex(
    336 + d + rX,
    731 + d,
    439 + d + rX,
    544 + d,
    443 + d + rX,
    432 + d
  );
  bezierVertex(
    446 + d + rX,
    321 + d,
    441 + d + rX,
    329 + d,
    390 + d + rX,
    308 + d
  );
  bezierVertex(
    339 + d + rX,
    288 + d,
    268 + d + rX,
    216 + d,
    226 + d + rX,
    227 + d
  );
  endShape();
}

function patternClicked(xStart, xEnd, yStart, yEnd, patternNum) {
  if (mouseX > xStart && mouseX < xEnd && mouseY > yStart && mouseY < yEnd) {
    // console.log(patternNum);
    patternNumber = patternNum;
  }
}

function drawPattern(rockNum, rX) {
  if (patternNumber >= 0) {
    // console.log(rockNum, patternNumber);
    // console.log(drawPatternFunctionMatrix[rockNum][patternNumber]);
    drawPatternFunctionMatrix[rockNum][patternNumber](rX);
  }
}


function step2rock1() {
  colorPicker.position(117, 275);
  colorPicker.size(60,60);
  //기능 안내
  fill(255);
  textSize(27);
  // textFont(fontRegular);
  textFont(fontAvenir);
  text("Color", 110, 240);
  text("Texture", 340, 240);

  //팔레트 그리기
  stroke(255);
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 6; j++) {
      var c = i + j * 2;
      var x = 100 + i * 80;
      var y = 300 + j * 80;
      palettes.push(new Palette(x, y, c));
      pHeight = y + k;
    }
  }

  //패턴 선택지
  image(pC1, 300, 270, 80, 80);
  image(pC2, 300, 370, 80, 80);
  image(pC3, 300, 470, 80, 80);
  image(pC4, 300, 570, 80, 80);
  image(pC5, 300, 670, 80, 80);
  image(pC6, 300, 770, 80, 80);
  image(pC7, 300, 870, 80, 80);
  image(pC8, 400, 270, 80, 80);
  image(pC9, 400, 370, 80, 80);
  image(pC10, 400, 470, 80, 80);
  image(pC11, 400, 570, 80, 80);
  image(pC12, 400, 670, 80, 80);
  image(pC13, 400, 770, 80, 80);
  image(pC14, 400, 870, 80, 80);
  image(pC15, 400, 970, 80, 80);

  //팔레트 선택 행위 확인 동작
  if (mouseIsPressed && mouseX < 200) {
    var a;
    for (var i = 0; i < 12; i++) {
      a = dist(palettes[i].x, palettes[i].y, mouseX, mouseY);
      if (a < k) {
        fillColor = colorPalette[palettes[i].pColor];
      }
    }
  }
  // 현재 색깔 확인

  p = color(colorPicker.color());
  fill(colorPicker.color());
  rect(120, 355, 55, 55);

  for (let i = 0; i < 5; i++) {
    if (rocks[i].selected) {
      // console.log("draw rock.");
      drawPattern(i, 0);
    }
  }


}



function step4WrappingClickedB() {
  rX = -460;
  drawWrapB(-460);
}

function step4background() {
  rX = -460;
  drawGround(groundNumber, -460);
}

function step3Setup() {
  image(step3, 0, 0);
  //포장지 선택지
  textSize(27);
  fill(255);
  // textFont(fontRegular);
  textFont(fontAvenir);
  text("Wrapping paper", 100, 230 + 150);
  image(wrap1, 100, 260 + 150, 80, 80);
  image(wrap2, 200, 260 + 150, 80, 80);
  image(wrap3, 300, 260 + 150, 80, 80);
  image(wrap4, 400, 260 + 150, 80, 80);

  text("Background color", 100, 400 + 150);
  // 배경색 선택지
  image(bC1, 100, 430 + 150, 80, 80);
  image(bC2, 200, 430 + 150, 80, 80);
  image(bC3, 300, 430 + 150, 80, 80);
  image(bC4, 400, 430 + 150, 80, 80);
  image(bC5, 100, 530 + 150, 80, 80);
  image(bC6, 200, 530 + 150, 80, 80);
  image(bC7, 300, 530 + 150, 80, 80);
  image(bC8, 400, 530 + 150, 80, 80);
}

function wrapClicked(xStart, xEnd, yStart, yEnd, wn) {
  if (mouseX > xStart && mouseX < xEnd && mouseY > yStart && mouseY < yEnd) {
    wrapNumber = wn;
  }
}

function drawWrapB(rX = 0) {
  if (wrapNumber == 0) {
    image(wrap1B, 595 + rX, 560, 565, 500);
  } else if (wrapNumber == 1) {
    image(wrap2B, 595 + rX, 560, 565, 500);
  } else if (wrapNumber == 2) {
    image(wrap3B, 595 + rX, 560, 565, 500);
  } else if (wrapNumber == 3) {
    image(wrap4B, 595 + rX, 560, 565, 500);
  }
}



function WrappingClickedA(rX = 0) {
  if (wrapNumber == 0) {
    image(wrap1A, 595 + rX, 560, 565, 500);
  } else if (wrapNumber == 1) {
    image(wrap2A, 595 + rX, 560, 565, 500);
  } else if (wrapNumber == 2) {
    image(wrap3A, 595 + rX, 560, 565, 500);
  } else if (wrapNumber == 3) {
    image(wrap4A, 595 + rX, 560, 565, 500);
  }
}

function step4WrappingClickedA() {
  rX = -460;
  WrappingClickedA(-460);
}



function drawGround(gn, rX = 0) {
  if (gn == 0) {
    image(back1, 580 + rX, 180, 600, 900);
  } else if (gn == 1) {
    image(back2, 580 + rX, 180, 600, 900);
  } else if (gn == 2) {
    image(back3, 580 + rX, 180, 600, 900);
  } else if (gn == 3) {
    image(back4, 580 + rX, 180, 600, 900);
  } else if (gn == 4) {
    image(back5, 580 + rX, 180, 600, 900);
  } else if (gn == 5) {
    image(back6, 580 + rX, 180, 600, 900);
  } else if (gn == 6) {
    image(back7, 580 + rX, 180, 600, 900);
  } else if (gn == 7) {
    image(back8, 580 + rX, 180, 600, 900);
  }
}
function groundClicked(xStart, xEnd, yStart, yEnd, gn) {
  if (mouseX > xStart && mouseX < xEnd && mouseY > yStart && mouseY < yEnd) {
    groundNumber = gn;
    // console.log(groundNumber);
  }
}


function typing() {
  stuff = this.value();
}

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "interactive.postcard.isc@gmail.com",
    Password: "62CA9175D6517A2EB54837248A14D9D838B3",
    To: "interactive.postcard.isc@gmail.com",
    From: "interactive.postcard.isc@gmail.com",
    Subject: "이메일이 도착했어요!",
    Body: emailBox.value(),
  }).then((message) => alert('귀하의 이메일 주소가 안전하게 저장되었습니다.'));
}

function setupDrawPatternFunctions() {
  let drawPatternFunctionList = [];
  drawPatternFunctionList.push((rX) => {
    image(r1P1, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P1, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P1, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P1, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P1, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P2, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P2, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P2, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P2, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P2, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P3, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P3, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P3, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P3, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P3, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P4, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P4, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P4, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P4, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P4, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P5, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P5, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P5, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P5, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P5, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P6, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P6, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P6, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P6, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P6, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P7, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P7, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P7, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P7, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P7, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P8, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P8, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P8, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P8, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P8, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P9, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P9, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P9, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P9, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P9, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P10, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P10, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P10, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P10, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P10, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P11, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P11, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P11, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P11, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P11, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P12, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P12, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P12, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P12, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P12, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P13, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P13, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P13, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P13, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P13, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P14, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P14, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P14, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P14, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P14, 718 + rX, 395, 295, 508);
  });
  drawPatternFunctionList.push((rX) => {
    image(r1P15, 315 + 400 + rX, 395, 349, 479);
  });
  drawPatternFunctionList.push((rX) => {
    image(r2P15, 678 + rX, 355, 371, 553);
  });
  drawPatternFunctionList.push((rX) => {
    image(r3P15, 693 + rX, 410, 391, 477);
  });
  drawPatternFunctionList.push((rX) => {
    image(r4P15, 693 + rX, 403, 386, 498);
  });
  drawPatternFunctionList.push((rX) => {
    image(r5P15, 718 + rX, 395, 295, 508);
  });

  drawPatternFunctionMatrix = [];
  for (let i = 0; i < 5; i++) {
    let pfList = [];
    for (let j = 0; j < 15; j++) {
      pfList.push(drawPatternFunctionList[5 * j + i]);
    }
    drawPatternFunctionMatrix.push(pfList);
  }
}
