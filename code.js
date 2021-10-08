var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c2a919aa-71eb-4db4-9424-da962afe5937","34e6eae9-a3b1-45da-bd10-fa947a48038b","6b92d611-b1fe-4e4e-83d0-0c583a69373e","d9eeaa88-9706-41bd-b5a1-01d357ff8175","8d5b6444-18b2-4070-84a1-1b29e42a7f12","478285c7-7d3b-4755-b7c5-67d4bac46055","e98828eb-a7a3-483c-b1a6-31d49b44004c","f8e4253d-e59b-4b6a-bb18-f13cf66ceefe","75bee70a-9e83-4a87-9319-8493ecb4d686","acb68e31-d248-4b42-80e0-31878d19bc98","a2f2afd3-0502-43b5-a8bd-6f4190f1699d","2ecd2da1-5904-440a-9884-cbd7ee6578ab","1d8028fc-3e84-489c-a8a8-404bcea8d83f","79f50bc4-1382-430e-bd72-251b0ac66000","cf20a5ef-47cd-4ca6-874f-deb43145fd2c","a95ad009-1609-4627-ae56-2e18fad52696"],"propsByKey":{"c2a919aa-71eb-4db4-9424-da962afe5937":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"qrtvOP5ES.RL32D3LYLHKCysNMRBDezy","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/c2a919aa-71eb-4db4-9424-da962afe5937.png"},"34e6eae9-a3b1-45da-bd10-fa947a48038b":{"name":"comeu1","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"A9Ro3.ulbVZB87D7_04nFI4Da2Wz5lUu","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/34e6eae9-a3b1-45da-bd10-fa947a48038b.png"},"6b92d611-b1fe-4e4e-83d0-0c583a69373e":{"name":"comeu2","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"eCQFYqnrUGf7dBv.lqNa_GQu9fZF_For","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/6b92d611-b1fe-4e4e-83d0-0c583a69373e.png"},"d9eeaa88-9706-41bd-b5a1-01d357ff8175":{"name":"comeu3","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"pvW8h3tKc1ZlswJydJSlTdy6zqTn7xbe","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/d9eeaa88-9706-41bd-b5a1-01d357ff8175.png"},"8d5b6444-18b2-4070-84a1-1b29e42a7f12":{"name":"comeu4","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"UY1BgrToz8S0GH7raUsZtL_blb6ITF3v","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/8d5b6444-18b2-4070-84a1-1b29e42a7f12.png"},"478285c7-7d3b-4755-b7c5-67d4bac46055":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"hTQB6SnZmh8COQ183i_HET4r6GOAXCyr","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/478285c7-7d3b-4755-b7c5-67d4bac46055.png"},"e98828eb-a7a3-483c-b1a6-31d49b44004c":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"CICldiTawTDIhoc0a.7Ks8vlAPUzOd3Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/e98828eb-a7a3-483c-b1a6-31d49b44004c.png"},"f8e4253d-e59b-4b6a-bb18-f13cf66ceefe":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"baaQz2L3Lef43PrCHjeZ6yUOGYmAQCFO","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/f8e4253d-e59b-4b6a-bb18-f13cf66ceefe.png"},"75bee70a-9e83-4a87-9319-8493ecb4d686":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":36,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"mdE.SbL312.oNp_4H_L9JN1XjRR9Bj2e","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":35},"rootRelativePath":"assets/75bee70a-9e83-4a87-9319-8493ecb4d686.png"},"acb68e31-d248-4b42-80e0-31878d19bc98":{"name":"monstro1","sourceUrl":null,"frameSize":{"x":21,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"pePrp0laqTugWlWLa8Pcd_RBhUgcLPUF","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":25},"rootRelativePath":"assets/acb68e31-d248-4b42-80e0-31878d19bc98.png"},"a2f2afd3-0502-43b5-a8bd-6f4190f1699d":{"name":"monstro2","sourceUrl":null,"frameSize":{"x":21,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"m0cc6InHmv3FKMJTt.8Ocxj.Hf_LY2yl","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":25},"rootRelativePath":"assets/a2f2afd3-0502-43b5-a8bd-6f4190f1699d.png"},"2ecd2da1-5904-440a-9884-cbd7ee6578ab":{"name":"monstro3","sourceUrl":null,"frameSize":{"x":21,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"jAZ.ccom9DD4ExjWAssZOIMGvJhlRTVb","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":25},"rootRelativePath":"assets/2ecd2da1-5904-440a-9884-cbd7ee6578ab.png"},"1d8028fc-3e84-489c-a8a8-404bcea8d83f":{"name":"monstro4","sourceUrl":null,"frameSize":{"x":21,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"2YHFDCUO6KZ5pejUKR0ErCC_8DfxEwdD","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":25},"rootRelativePath":"assets/1d8028fc-3e84-489c-a8a8-404bcea8d83f.png"},"79f50bc4-1382-430e-bd72-251b0ac66000":{"name":"monstro5","sourceUrl":null,"frameSize":{"x":21,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"B7MbzXRSG5TEFeeQOwteFpyRqppAieua","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":25},"rootRelativePath":"assets/79f50bc4-1382-430e-bd72-251b0ac66000.png"},"cf20a5ef-47cd-4ca6-874f-deb43145fd2c":{"name":"monstro6","sourceUrl":null,"frameSize":{"x":21,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"MMhC40xRLBVM.sUdba7Kcqa651yq3UjC","loadedFromSource":true,"saved":true,"sourceSize":{"x":21,"y":25},"rootRelativePath":"assets/cf20a5ef-47cd-4ca6-874f-deb43145fd2c.png"},"a95ad009-1609-4627-ae56-2e18fad52696":{"name":"ponto","sourceUrl":null,"frameSize":{"x":20,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"L2uZYK3PyXwLSeoEk.wvTq.86IuFk1di","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":19},"rootRelativePath":"assets/a95ad009-1609-4627-ae56-2e18fad52696.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var parede1 = createSprite(50, 20,5,70);
parede1.shapeColor = "white";
var parede2 = createSprite(20, 100,70,5);
parede2.shapeColor = "white";
var parede3 = createSprite(100, 70,5,70);
parede3.shapeColor = "white";
var parede4 = createSprite(130, 150,70,5);
parede4.shapeColor = "white";
var parede5 = createSprite(50, 190,5,70);
parede5.shapeColor = "white";
var parede6 = createSprite(100, 20,5,70);
parede6.shapeColor = "white";
var parede7 = createSprite(300, 100,70,5);
parede7.shapeColor = "white";
var parede8 = createSprite(200, 70,5,70);
parede8.shapeColor = "white";
var parede9 = createSprite(360, 150,70,5);
parede9.shapeColor = "white";
var parede10 = createSprite(250, 190,5,70);
parede10.shapeColor = "white";
var parede11 = createSprite(360, 20,5,70);
parede11.shapeColor = "white";
var parede12 = createSprite(300, 395,70,5);
parede12.shapeColor = "white";
var parede13 = createSprite(300, 310,5,70);
parede13.shapeColor = "white";
var parede14 = createSprite(200, 280,70,5);
parede14.shapeColor = "white";
var parede15 = createSprite(5, 280,70,5);
parede15.shapeColor = "white";
var parede16 = createSprite(100, 280,5,70);
parede16.shapeColor = "white";
var parede17 = createSprite(165, 200,70,5);
parede17.shapeColor = "white";
var parede18 = createSprite(360, 200,70,5);
parede18.shapeColor = "white";
var parede19 = createSprite(5, 335,70,5);
parede19.shapeColor = "white";
var parede20 = createSprite(150, 370,5,70);
parede20.shapeColor = "white";
var parede21 = createSprite(70, 410,5,70);
parede21.shapeColor = "white";

var ponto1 = createSprite(360, 320,10,10);
ponto1.setAnimation("ponto");
ponto1.scale = 0.4;

var estadoJogo = "iniciar";

var score = 0;

playSound("assets/category_nature/forest_woodland_ambience.mp3", false);


var pac = createSprite(360, 360,5,5);
pac.setAnimation("animation_1");
pac.scale = 0.6;
pac.setCollider("circle",10,10,10);
   

var monstro1 = createSprite(20, 20,5,5);
monstro1.setAnimation("monstro1");


var monstro2 = createSprite(380, 20,5,5);
monstro2.setAnimation("monstro2");

var monstro3 = createSprite(200, 20,5,5);
monstro3.setAnimation("monstro3");

var monstro4 = createSprite(200, 200,5,5);
monstro4.setAnimation("monstro4");





function draw() {
  background("black");

  createEdgeSprites();

  if(estadoJogo==="iniciar"){
    fill("red");
    textSize(30);
    textFont("Arial Black");
    text("Press Space", 100, 250);
    monstro1.velocityX = 0;
    monstro1.velocityY = 0;

    monstro2.velocityX = 0;
    monstro2.velocityY = 0;
  
    monstro3.velocityX = 0;
    monstro3.velocityY = 0;
  
    monstro4.velocityX = 0;
    monstro4.velocityY = 0;
    
    
  }
  if (keyDown("space")) {
    estadoJogo = "jogar";
    
    pac.x = 360;
    pac.y = 360;
    
    monstro1.velocityX = 2;
    monstro1.velocityY = 2;

    monstro2.velocityX = -3;
    monstro2.velocityY = 2;

    monstro3.velocityX = -3;
    monstro3.velocityY = -3;

    monstro4.velocityX = 2;
    monstro4.velocityY = -2;
  }
  if(estadoJogo === "jogar" ) {


    pac.bounce(parede1);
    pac.bounce(parede2);
    pac.bounce(parede3);
    pac.bounce(parede4);
    pac.bounce(parede5);
    pac.bounce(parede6);
    pac.bounce(parede7);
    pac.bounce(parede8);
    pac.bounce(parede9);
    pac.bounce(parede10);
    pac.bounce(parede11);
    pac.bounce(parede12);
    pac.bounce(parede13);
    pac.bounce(parede14);
    pac.bounce(parede15);
    pac.bounce(parede16);
    pac.bounce(parede17);
    pac.bounce(parede18);
    pac.bounce(parede19);
    pac.bounce(parede20);
    pac.bounce(parede21);
    pac.bounce(edges);
    monstro1.bounceOff(parede1);
    monstro1.bounceOff(parede2);
    monstro1.bounceOff(parede3);
    monstro1.bounceOff(parede4);
    monstro1.bounceOff(parede5);
    monstro1.bounceOff(parede6);
    monstro1.bounceOff(parede7);
    monstro1.bounceOff(parede8);
    monstro1.bounceOff(parede9);
    monstro1.bounceOff(parede10);
    monstro1.bounceOff(parede11);
    monstro1.bounceOff(parede12);
    monstro1.bounceOff(parede13);
    monstro1.bounceOff(parede14);
    monstro1.bounceOff(parede15);
    monstro1.bounceOff(parede16);
    monstro1.bounceOff(parede17);
    monstro1.bounceOff(parede18);
    monstro1.bounceOff(parede19);
    monstro1.bounceOff(parede20);
    monstro1.bounceOff(parede21);
    monstro1.bounceOff(edges);
    
    monstro2.bounceOff(parede1);
    monstro2.bounceOff(parede2);
    monstro2.bounceOff(parede3);
    monstro2.bounceOff(parede4);
    monstro2.bounceOff(parede5);
    monstro2.bounceOff(parede6);
    monstro2.bounceOff(parede7);
    monstro2.bounceOff(parede8);
    monstro2.bounceOff(parede9);
    monstro2.bounceOff(parede10);
    monstro2.bounceOff(parede11);
    monstro2.bounceOff(parede12);
    monstro2.bounceOff(parede13);
    monstro2.bounceOff(parede14);
    monstro2.bounceOff(parede15);
    monstro2.bounceOff(parede16);
    monstro2.bounceOff(parede17);
    monstro2.bounceOff(parede18);
    monstro2.bounceOff(parede19);
    monstro2.bounceOff(parede20);
    monstro2.bounceOff(parede21);
    monstro2.bounceOff(edges);
    
    monstro3.bounceOff(parede1);
    monstro3.bounceOff(parede2);
    monstro3.bounceOff(parede3);
    monstro3.bounceOff(parede4);
    monstro3.bounceOff(parede5);
    monstro3.bounceOff(parede6);
    monstro3.bounceOff(parede7);
    monstro3.bounceOff(parede8);
    monstro3.bounceOff(parede9);
    monstro3.bounceOff(parede10);
    monstro3.bounceOff(parede11);
    monstro3.bounceOff(parede12);
    monstro3.bounceOff(parede13);
    monstro3.bounceOff(parede14);
    monstro3.bounceOff(parede15);
    monstro3.bounceOff(parede16);
    monstro3.bounceOff(parede17);
    monstro3.bounceOff(parede18);
    monstro3.bounceOff(parede19);
    monstro3.bounceOff(parede20);
    monstro3.bounceOff(parede21);
    monstro3.bounceOff(edges);
    
    monstro4.bounceOff(parede1);
    monstro4.bounceOff(parede2);
    monstro4.bounceOff(parede3);
    monstro4.bounceOff(parede4);
    monstro4.bounceOff(parede5);
    monstro4.bounceOff(parede6);
    monstro4.bounceOff(parede7);
    monstro4.bounceOff(parede8);
    monstro4.bounceOff(parede9);
    monstro4.bounceOff(parede10);
    monstro4.bounceOff(parede11);
    monstro4.bounceOff(parede12);
    monstro4.bounceOff(parede13);
    monstro4.bounceOff(parede14);
    monstro4.bounceOff(parede15);
    monstro4.bounceOff(parede16);
    monstro4.bounceOff(parede17);
    monstro4.bounceOff(parede18);
    monstro4.bounceOff(parede19);
    monstro4.bounceOff(parede20);
    monstro4.bounceOff(parede21);
    monstro4.bounceOff(edges);
  
    if (keyDown("UP_ARROW")) {
      pac.y = pac.y - 2;
      pac.setAnimation("animation_4");
    
    }
    if (keyDown("DOWN_ARROW")) {
      pac.y = pac.y + 2;
      pac.setAnimation("animation_3");
    
    }
     if (keyDown("LEFT_ARROW")) {
      pac.x = pac.x - 2;
      pac.setAnimation("animation_2");
    
    }
     if (keyDown("RIGHT_ARROW")) {
         pac.x = pac.x + 2;
         pac.setAnimation("animation_1");
    
    }

  
     if (monstro1.bounceOff(pac)|| monstro2.bounceOff(pac)||monstro3.bounceOff(pac)||monstro4.bounceOff(pac)) {
      playSound("assets/category_instrumental/digital_drum_downscale_1.mp3");
      pac.setAnimation("animation_5");
      estadoJogo = "iniciar";


    }
  
      if (monstro1.collide(monstro2)||monstro2.collide(monstro3)
      || monstro1.collide(monstro3)|| monstro1.collide(monstro4)
      || monstro2.collide(monstro4)|| monstro3.collide(monstro4)
      || monstro1.collide(pac)|| monstro2.collide(pac)
      || monstro3.collide(pac)|| monstro4.collide(pac)) {
 
        playSound("assets/category_hits/puzzle_game_button_02.mp3");
 
        monstro1.velocityX = -  monstro1.velocityX;
        monstro1.velocityY = - monstro1.velocityY;
    
        monstro2.velocityX = -  monstro2.velocityX;
        monstro2.velocityY = - monstro2.velocityY;
      
        monstro3.velocityX = -  monstro3.velocityX;
        monstro3.velocityY = - monstro3.velocityY;
      
        monstro4.velocityX = -  monstro4.velocityX;
        monstro4.velocityY = - monstro4.velocityY;
    
    }
  
    if (pac.isTouching(ponto1)) {
     playSound("assets/category_transition/ball_throw_bowl_18.mp3");
     ponto1.destroy();
     score++;
    
    if (keyDown("UP_ARROW")) {
      pac.setAnimation("comeu1");
      
    }
     
     if (keyDown("DOWN_ARROW")) {
      pac.setAnimation("comeu3");
      
    }
     
     if (keyDown("LEFT_ARROW")) {
      pac.setAnimation("comeu4");
      
    }
     
     if (keyDown("RIGHT_ARROW")) {
      pac.setAnimation("comeu2");
      
    }
  }
  
} 
  fill("red");
  textSize(14);
  textFont("Arial Black"); 
  
  text("Score: ", 240, 20);
  text(score, 300, 20);
     
  drawSprites();
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
