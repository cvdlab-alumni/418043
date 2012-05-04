var wing2dDomain = INTERVALS(1)(30);
//topWing
var wingP1 = [[4.5, 0, 0], [4.5, 0.5, 0],[4, 0.7, 0],[2, 1.2, 0], [-1,0,0],[4.5, 0,0]];

var wingP2 = wingP1.map(function(p){ return [p[0], p[1], p[2] + 1.5];});
var wingP3 = wingP1.map(function(p){ return [p[0], p[1], p[2] + 3];});
var wingP4 = wingP1.map(function(p){ return [p[0], p[1], p[2] + 7];});
var wingP5 = wingP1.map(function(p){ return [p[0], p[1], p[2] + 10];});

var cpt0 = BEZIER(S0)(wingP1);
var cpt1 = BEZIER(S0)(wingP2);
var cpt2 = BEZIER(S0)(wingP3);
var cpt3 = BEZIER(S0)(wingP4);
var cpt4 = BEZIER(S0)(wingP5);

var wing3dDomain = DOMAIN([[0,1],[0,1]])([30,30]);

var wingTop = BEZIER(S1)([cpt0,cpt1,cpt2,cpt3,cpt4]);
var wingTopImage = MAP(wingTop)(wing3dDomain);

//middleWing
var wingMiddleImage = T([0,1])([1,-3])(wingTopImage);

//bottomWing

var wingBottom = BEZIER(S1)([cpt1,cpt2,cpt3,cpt4]);
var wingBottomImage = T([0,1])([2,-6])(MAP(wingBottom)(wing3dDomain));
//DRAW(wingBottomImage);

var wings = COLOR([90/255, 78/255, 67/255])(STRUCT([wingTopImage, wingMiddleImage, wingBottomImage]));

//bars

var barPoints = [[0.5,0,0],[1,0,0],[0.5,2.4,0],[0,2.4,0]];
var bar = SIMPLICIAL_COMPLEX(barPoints)([[0,1,2,3]]);

var pol = POLYLINE([[0.5,0],[1,0],[0.5,2.4],[0,2.4],[0.5, 0]]);
var barLateral = EXTRUDE([0.1])(pol);

var bar2 = T([2])([0.1])(bar);

var completeBar = STRUCT([bar, bar2, barLateral]);
//DRAW(completeBar);

//bars

var firstBar = T([0,1,2])([3.2,-2.35,8])(completeBar);
var secondBar = T([0,1])([0.8, -3])(firstBar);

var completeBars = COLOR([67/255, 39/255, 15/255])(STRUCT([firstBar, secondBar]));

//extreme wing

var t1 = [[4.5, 0, 0], [4.5, 0.5, 0],[4, 0.7, 0],[2, 1.2, 0], [-1,0,0],[4.4,0,0]];
var t2 = [[4.4,0,0],[4.5,0,0]];
var bez1 = BEZIER(S0)(t1);
var bez2 = BEZIER(S0)(t2);



var exWing = BEZIER(S1)([bez1,bez2]);
var dom = DOMAIN([[0,1],[0,1]])([30,30]);
var exWingImage = T([2])([10])(MAP(exWing)(dom));

var exWingImage2 = T([0,1,2])([1,-3,0])(exWingImage);
var exWingImage3 = T([0,1,2])([2,-6,0])(exWingImage);

var exWingComplete = COLOR([90/255, 78/255, 67/255])(STRUCT([exWingImage, exWingImage2, exWingImage3]));

//wing2
var exWingComplete2 = T([2])([-20])(exWingComplete);
var completeBars2 = T([2])([-16])(completeBars);
var wTop2 = T([2])([-10])(wingTopImage);
var wMiddle2 = T([2])([-10])(wingMiddleImage);
var wingBottom2 = T([2])([-11.5])(wingBottomImage);
var wings2 = COLOR([90/255, 78/255, 67/255])(STRUCT([wingBottom2, wTop2, wMiddle2]));
//

var completeWing = STRUCT([wings, completeBars, exWingComplete, exWingComplete2, completeBars2, wings2]);

DRAW(completeWing);



/////////fusoliera
//parte cdentrale

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


var fusUpP1 = [[0,3,0],[1, 3.3,0],[3,3,0]];

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
var s = 0.4;

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
var frontFus2 = scaleLeft(frontFus1,lFront/2);
var frontFus3 = scaleLeft(frontFus2,lFront/2);;

var frontFusSur0 = BEZIER(S0)(frontFus1);
var frontFusSur1 = BEZIER(S0)(frontFus2);
var frontFusSur2 = BEZIER(S0)(frontFus3);

var frontFusLines1 = BEZIER(S1)([frontFusSur0, frontFusSur1, frontFusSur2]);
var frontFusImage1 = MAP(frontFusLines1)(domain);

//TWO
var lFront = 1.5;
var frontFus11 = [[3,0,0],[3.7, 1.5, 0],[3,3,0]];
var frontFus12 = scaleRight(frontFus11, lFront/2);
var frontFus13 = scaleRight(frontFus12, lFront/2);
console.log(frontFus12);
var frontFusSur11 = BEZIER(S0)(frontFus11);
var frontFusSur12 = BEZIER(S0)(frontFus12);
var frontFusSur13 = BEZIER(S0)(frontFus13);
var frontFusLines11 = BEZIER(S1)([frontFusSur11, frontFusSur12, frontFusSur13]);
var frontFusImage11 = MAP(frontFusLines11)(domain);

//THREE
var frontFus21 = [[0,3,0],[1.5, 3.35, 0],[3,3,0]];
var frontFus22 = scaleTop(frontFus21,lFront/2);
var frontFus23 = scaleTop(frontFus22,lFront/2);
var frontFusSur21 = BEZIER(S0)(frontFus21);
var frontFusSur22 = BEZIER(S0)(frontFus22);
var frontFusSur23 = BEZIER(S0)(frontFus23);
var frontFusLines21 = BEZIER(S1)([frontFusSur21, frontFusSur22, frontFusSur23]);
var frontFusImage21 = MAP(frontFusLines21)(domain);

//FOUR
//THREE
var frontFus31 = [[0,0,0],[1.5, -0.35, 0],[3,0,0]];
var frontFus32 = scaleBottom(frontFus31,lFront/2);
var frontFus33 = scaleBottom(frontFus32,lFront/2);

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
