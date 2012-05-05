var domain=DOMAIN([[0,1],[0,1]])([30,30]);
var fusP1 = [[0,0,0],[-0.7, 1.5,0],[0,3,0]];

var l = 6;

var fusP2 = [[0,0,0],[-0.6, 1.5,0],[0,3,0]].map(function(p){return [p[0], p[1], p[2]+l/6]});
var fusP3 = [[0,0,0],[-0.4, 1.5,0],[0,3,0]].map(function(p){return [p[0], p[1], p[2]+ 2 * l/6]})
var fusP4 = [[0,0,0],[-0.2, 1.5,0],[0,3,0]].map(function(p){return [p[0], p[1], p[2]+ 3 * l/6]})
var fusP5 = [[0,0,0],[-0.1, 1.5,0],[0,3,0]].map(function(p){return [p[0], p[1], p[2]+ 4 * l/6]})
var fusP5 = [[0,0,0],[0, 1.5,0],[0,3,0]].map(function(p){return [p[0], p[1], p[2]+ 6 * l/6]})



var fusSur0 = BEZIER(S0)(fusP1);
var fusSur1 = BEZIER(S0)(fusP2);
var fusSur2 = BEZIER(S0)(fusP3);
var fusSur3 = BEZIER(S0)(fusP4);
var fusSur4 = BEZIER(S0)(fusP5);
var fusSur5 = BEZIER(S0)(fusP5);

//DISEGNARE BORDI
//var curva = STRUCT(CONS(AA(MAP)([fusSur0, fusSur1, fusSur2, fusSur3, fusSur4]))(INTERVALS(1)(30)));
//DRAW(curva);

var leftSurFus = BEZIER(S1)([fusSur0, fusSur1, fusSur2, fusSur3, fusSur4]);
var leftSurFusImage = MAP(leftSurFus)(domain);

var l2 = T([0,1])([-3,-3])(leftSurFusImage);
var rightSurFusImage = R([0,1])([PI])(l2);


var fusUpP1 = [[0,3,0],[1.5, 3.3,0],[3,3,0]];

var fusUpP2 = fusUpP1.map(function(p){ return [p[0], p[1], p[2] + l/5];});
var fusUpP3 = fusUpP1.map(function(p){ return [p[0], p[1], p[2] + 2 * l/5];});
var fusUpP4 = fusUpP1.map(function(p){ return [p[0], p[1], p[2] + 3 * l/5];});
var fusUpP5 = fusUpP1.map(function(p){ return [p[0], p[1], p[2] + 5 * l/5];});

var fusUpSur0 = BEZIER(S0)(fusUpP1);
var fusUpSur1 = BEZIER(S0)(fusUpP2);
var fusUpSur2 = BEZIER(S0)(fusUpP3);
var fusUpSur3 = BEZIER(S0)(fusUpP4);
var fusUpSur4 = BEZIER(S0)(fusUpP5);

//DISEGNARE BORDI
//var curva = STRUCT(CONS(AA(MAP)([fusSur0, fusSur1, fusSur2, fusSur3, fusSur4]))(INTERVALS(1)(30)));
//DRAW(curva);

var upSurFus = BEZIER(S1)([fusUpSur0, fusUpSur1, fusUpSur2, fusUpSur3, fusUpSur4]);
var upSurFusImage = MAP(upSurFus)(domain);

var ds1 = T([0,1])([-3,-3])(upSurFusImage);
var downSurFusImage = R([0,1])([PI])(ds1);
var centralFus = STRUCT([downSurFusImage, upSurFusImage, leftSurFusImage, rightSurFusImage]);
var centralFusT = T([0,1,2])([-1.5,-6.3,1])(centralFus);
var centralFusR = R([0,2])([PI/2])(centralFusT);

DRAW(centralFusR);

//front
//ONE

var s = 0.5;

var scaleBottom = function(p,n){
var t1 = [p[0][0] + s, p[0][1] + s, p[0][2]];
var t2 = [p[1][0], p[1][1] + s, p[1][2]];
var t3 = [p[2][0] - s, p[2][1] + s, p[2][2]];
return [t1, t2, t3].map(function(p){ return [p[0], p[1], p[2] - n];});

}

var scaleTop = function(p,n){
var t1 = [p[0][0] + s, p[0][1] - s, p[0][2]];
var t2 = [p[1][0], p[1][1] - s, p[1][2]];
var t3 = [p[2][0] - s, p[2][1] - s, p[2][2]];
return [t1, t2, t3].map(function(p){ return [p[0], p[1], p[2] - n];});

}

var scaleLeft = function(p,n){
var t1 = [p[0][0] + s, p[0][1] + s, p[0][2]];
var t2 = [p[1][0] + s, p[1][1], p[1][2]];
var t3 = [p[2][0] + s, p[2][1] - s, p[2][2]];
return [t1, t2, t3].map(function(p){ return [p[0], p[1], p[2] - n];});

}

var scaleRight = function(p,n){
var t1 = [p[0][0] - s, p[0][1] + s, p[0][2]];
var t2 = [p[1][0] - s, p[1][1], p[1][2]];
var t3 = [p[2][0] - s, p[2][1] - s, p[2][2]];
return [t1, t2, t3].map(function(p){ return [p[0], p[1], p[2] - n];});

}

var lFront = 1.5;

var domain=DOMAIN([[0,1],[0,1]])([30,30]);

var frontFus1 = [[0,0,0],[-0.7, 1.5,0],[0,3,0]];
var frontFus2 = scaleLeft(frontFus1,3*lFront/4);
var frontFus3 = scaleLeft(frontFus2,1*lFront/4);;

var frontFusSur0 = BEZIER(S0)(frontFus1);
var frontFusSur1 = BEZIER(S0)(frontFus2);
var frontFusSur2 = BEZIER(S0)(frontFus3);

var frontFusLines1 = BEZIER(S1)([frontFusSur0, frontFusSur1, frontFusSur2]);
var frontFusImage1 = MAP(frontFusLines1)(domain);

//TWO

var frontFus11 = [[3,0,0],[3.7, 1.5, 0],[3,3,0]];
var frontFus12 = scaleRight(frontFus11, 3*lFront/4);
var frontFus13 = scaleRight(frontFus12, 1*lFront/4);

var frontFusSur11 = BEZIER(S0)(frontFus11);
var frontFusSur12 = BEZIER(S0)(frontFus12);
var frontFusSur13 = BEZIER(S0)(frontFus13);
var frontFusLines11 = BEZIER(S1)([frontFusSur11, frontFusSur12, frontFusSur13]);
var frontFusImage11 = MAP(frontFusLines11)(domain);

//THREE
var frontFus21 = [[0,3,0],[1.5, 3.35, 0],[3,3,0]];
var frontFus22 = scaleTop(frontFus21,3*lFront/4);
var frontFus23 = scaleTop(frontFus22,1*lFront/4);
var frontFusSur21 = BEZIER(S0)(frontFus21);
var frontFusSur22 = BEZIER(S0)(frontFus22);
var frontFusSur23 = BEZIER(S0)(frontFus23);
var frontFusLines21 = BEZIER(S1)([frontFusSur21, frontFusSur22, frontFusSur23]);
var frontFusImage21 = MAP(frontFusLines21)(domain);

//FOUR
var frontFus31 = [[0,0,0],[1.5, -0.35, 0],[3,0,0]];
var frontFus32 = scaleBottom(frontFus31,3*lFront/4);
var frontFus33 = scaleBottom(frontFus32,1*lFront/4);

var frontFusSur31 = BEZIER(S0)(frontFus31);
var frontFusSur32 = BEZIER(S0)(frontFus32);
var frontFusSur33 = BEZIER(S0)(frontFus33);
var frontFusLines31 = BEZIER(S1)([frontFusSur31, frontFusSur32, frontFusSur33]);
var frontFusImage31 = MAP(frontFusLines31)(domain);


var bottomFront = BEZIER(S1)([frontFusSur11, frontFusSur0]);
var b = BEZIER(S0)([[0,0,0],[3,0,0]]);
var bottomFront2 = BEZIER(S1)([b, frontFusSur31]);
var bottomFront2Image = MAP(bottomFront2)(domain);

var b1 = BEZIER(S0)([[3,0,0],[3,3,0]]);
var topFront2 = BEZIER(S1)([b1, frontFusSur21]);
var topFront2Image = MAP(topFront2)(domain);

var bottomFrontImage = MAP(bottomFront)(domain);

var frontFus = COLOR([1,0,0])(STRUCT([topFront2Image, bottomFront2Image,frontFusImage1, frontFusImage11, frontFusImage21, frontFusImage31, bottomFrontImage]));
var frontFusRotated = R([0,2])([PI/2])(frontFus);
var frontFusT = T([0,1,2])([1, -6.3, 1.5])(frontFusRotated);
DRAW(frontFusT);

//end part of fuselage
var domain=DOMAIN([[0,1],[0,1]])([30,30]);

var lLeft = 10;
//one
var fusLeftP1 = [[0,0,0],[0,3,0]];
var fusLeftP2 = [[1.4, 2,lLeft],[1.4,3,lLeft]];

var fusLeftSur0 = BEZIER(S0)(fusLeftP1);
var fusLeftSur1 = BEZIER(S0)(fusLeftP2);


var lLeftSurFus = BEZIER(S1)([fusLeftSur0, fusLeftSur1]);
var lLeftSurFusImage = MAP(lLeftSurFus)(domain);

//two
var fusRightP1 = [[3,0,0],[3,3,0]];
var fusRightP2 = [[1.6, 2,lLeft],[1.6,3,lLeft]];

var fusRightSur0 = BEZIER(S0)(fusRightP1);
var fusRightSur1 = BEZIER(S0)(fusRightP2);


var lRightSurFus = BEZIER(S1)([fusRightSur0, fusRightSur1]);
var lRightSurFusImage = MAP(lRightSurFus)(domain);


//three
var fusTopP1 = [[0,3,0],[1.5, 3.3,0],[3,3,0]];
var fusTopP2 = [[1.4,3,lLeft],[1.5, 3.3,lLeft],[1.6,3,lLeft]];

var fusTopSur0 = BEZIER(S0)(fusTopP1);
var fusTopSur1 = BEZIER(S0)(fusTopP2);


var lTopSurFus = BEZIER(S1)([fusTopSur0, fusTopSur1]);
var lTopSurFusImage = MAP(lTopSurFus)(domain);

//four
var fusBotP1 = [[0,0,0],[1.5, -0.3, 0],[3,0,0]];
var fusBotP2 = [[1.4,2,lLeft],[1.5, 1.7,lLeft],[1.6,2,lLeft]];

var fusBotSur0 = BEZIER(S0)(fusBotP1);
var fusBotSur1 = BEZIER(S0)(fusBotP2);


var lBotSurFus = BEZIER(S1)([fusBotSur0, fusBotSur1]);
var lBotSurFusImage = MAP(lBotSurFus)(domain);

var leftFus2 = STRUCT([lBotSurFusImage, lTopSurFusImage, lRightSurFusImage, lLeftSurFusImage]);
var leftFus2R = R([0,2])([PI/2])(leftFus2);
var leftFus2T = T([0,1,2])([7,-6.3,1.5])(leftFus2R);


DRAW(leftFus2T);

//HELIC
var domain = DOMAIN([[0,1],[0,1],[0,1]])([30, 1, 1]);

var h = 3;
var w = 2;
var j = 0.05;
var points = [[w/2, 0, 0],[0, h-1,0],[0.5, h, 0], [1.5, h, 0], [w, h-1,0], [w/2, 0, 0]];
var pointFake = [[w/2,0,0],[w/2,0,0]];
var elicSup = BEZIER(S0)(points);
var elicSup2 = BEZIER(S0)(pointFake);
var elicSurface = BEZIER(S1)([elicSup, elicSup2]);

var points2 = [[w/2, 0, j],[0, h-1,j],[0.5, h, j], [1.5, h, j], [w, h-1,j], [w/2, 0, j]];
var pointFake2 = [[w/2,0,j],[w/2,0,j]];
var elicSup2 = BEZIER(S0)(points2);
var elicSup21 = BEZIER(S0)(pointFake2);

var elicSurface2 = BEZIER(S1)([elicSup2, elicSup21]); 
var solidHelic = BEZIER(S2)([elicSurface, elicSurface2]);

var el = MAP(solidHelic)(domain);

var el2R = R([0,1])([PI])(el);
var el2 = T([0])([2])(el2R);

var completeHelic = STRUCT([el, el2]);

var completeHelicR = R([0,2])([PI/2])(completeHelic);
completeHelic = R([1,2])([PI/4])(completeHelicR);
var completeHelicT = T([0,1,2])([-0.55,-5.45,0.75])(completeHelic);

DRAW(completeHelicT);

