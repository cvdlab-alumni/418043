
!function(exports){
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

var bar21 = T([2])([-7])(firstBar);
var bar22 = T([2])([-2])(bar21);
DRAW(bar21);
DRAW(bar22);
var secondBar = T([0,1])([0.8, -3])(firstBar);
var filo = POLYLINE([[4.3, 0, 3],[4.5, -5.5,7]]);
var filo2 = POLYLINE([[4.3, 0, 7],[4.5, -5.5,3]]);
DRAW(filo2);
DRAW(filo);
var completeBars = COLOR([67/255, 39/255, 15/255])(STRUCT([firstBar, secondBar]));
var filo3 = T([2])([-10])(filo);
var filo4 = T([2])([-10])(filo2);
DRAW(filo3);
DRAW(filo4);
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


//front
var w = 6.7;

var point = [[w/2,0,0],[w,0,0],[w,w/1.05,0],[0,w/1.05,0],[0,0,0],[w/2,0,0]];
var h = 0.5;
var y = -1;
var point2 = [[w/2,y,h],[w - y ,y,h],[w - y,w/1.05-y,h],[0+y,w/1.05-y,h],[y,y,h],[w/2,y,h]];
var h1 = 1;
var y2=1.5;
var point3 = [[w/2,y2,h1],[w - y2,y2,h1],[w-y2,w/1.05-y2,h1],[0+y2,w/1.05-y2,h1],[y2,y2,h1],[w/2,y2,h1]];

var bez1 = BEZIER(S0)(point);
var bezt1 = BEZIER(S0)([[w/2,0,0]]);
var bez2 = BEZIER(S0)(point2);
var bezt2 = BEZIER(S0)([[w/2,y,h]]);
var bez3 = BEZIER(S0)(point3);
var bezt3 = BEZIER(S0)([[w/2,y2,h1]]);


var front = BEZIER(S1)([bez1,bez2,bez3]);
var domain= DOMAIN([[0,1],[0,1]])([70,10]);
var front = COLOR([1,0,0])(MAP(front)(domain));

var riempi = BEZIER(S1)([bez1, bezt1]);
var r = COLOR([1,0,0])(MAP(riempi)(domain));
var riempi2 = BEZIER(S1)([bez3, bezt3]);
var r2 = COLOR([0,0,0])(MAP(riempi2)(domain));

var front =STRUCT([front, r, r2]);

//ONE




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
var completeHelicT = T([0,1,2])([-0.1,-4.8,0.75])(completeHelic);

var frontR= R([0,2])([-PI/2])(front);
var frontT = T([0,1,2])([1,-6.7,-3.35])(frontR);

//ruote
var routa = TORUS_SOLID([0.6, 0.9])([10,20,8]);
var ruotaC = COLOR([0,0,0])(routa);
var ruota2 = T([2])([10.5])(ruotaC);


var bar = CUBOID([0.3,0.3,10.5]);
var bar2 = T([2])([3.5])(CUBOID([0.3, 7,0.3]));
var bar3 = T([2])([3.5])(bar2);
var ruote = STRUCT([ruota2, ruotaC,bar,bar2, bar3]);
var sRuote = S([0,1,2])([0.3, 0.3, 0.3])(ruote);
var tRuote = T([0,1,2])([5, -8, -1.5])(sRuote);

var fuselage = STRUCT([completeHelicT, COLOR([70/255, 89/255, 69/255])(leftFus2T), frontT, COLOR([70/255, 89/255, 69/255])(centralFusR), tRuote]);

//stabil
var domain = DOMAIN([[0,1],[0,1],[0,1]])([30,1,1]);

var points = [[0,0,0],[0,4,0],[2.5,5,0],[3.5,5,0],[4, 0,0],[2,0,0],[0,0,0]];
var fakePoint = [[0,0,0]];
var b = BEZIER(S0)(points);
var b1 = BEZIER(S0)(fakePoint);
var s1 = BEZIER(S1)([b, b1]);

//s2
var w = 0.1;
var points2 = [[0,0,w],[0,4,w],[2.5,4,w],[3.5,4,w],[4, 0, w],[2,0,w],[0,0,w]];
var fakePoint2 = [[0,0,w]];
var b2 = BEZIER(S0)(points2);
var b3 = BEZIER(S0)(fakePoint2);
var s2 = BEZIER(S1)([b2, b3]);

var stabilizer = BEZIER(S2)([s1, s2]);
var m = MAP(stabilizer)(domain);

var domain = DOMAIN([[0,1],[0,1],[0,1]])([30,1,1]);
var w = 0.1;

//lateral stabilizers
var pointsL = [[0,0.3,0],[4.5, -0.3, 0], [0.5, 2,0],[3, 2.7, 0],[0, 2.5, 0]];
var fakeSeg = [[0,0.3,0],[0,2.5,0]];
var b1 = BEZIER(S0)(pointsL);
var b2 = BEZIER(S0)(fakeSeg);
var s1 = BEZIER(S1)([b1, b2]);

//two
var pointsL2 = [[0,0.3,w],[4.5, -0.3, w], [0.5, 2,w],[3, 2.7, w],[0, 2.5, w]];
var fakeSeg2 = [[0,0.3,w],[0,2.5,w]];
var b3 = BEZIER(S0)(pointsL2);
var b4 = BEZIER(S0)(fakeSeg2);
var s2 = BEZIER(S1)([b3, b4]);

var lateStab = BEZIER(S2)([s1, s2]);
var latStab1 = MAP(lateStab)(domain);

//lateral 2
var pointsL = [[0,0.3,0],[-4.5, -0.3, 0], [-0.5, 2,0],[-3, 2.7, 0],[0, 2.5, 0]];
var fakeSeg = [[0,0.3,0],[0,2.5,0]];
var b1 = BEZIER(S0)(pointsL);
var b2 = BEZIER(S0)(fakeSeg);
var s1 = BEZIER(S1)([b1, b2]);

//two
var pointsL2 = [[0,0.3,w],[-4.5, -0.3, w], [-0.5, 2,w],[-3, 2.7, w],[0, 2.5, w]];
var fakeSeg2 = [[0,0.3,w],[0,2.5,w]];
var b3 = BEZIER(S0)(pointsL2);
var b4 = BEZIER(S0)(fakeSeg2);
var s2 = BEZIER(S1)([b3, b4]);

var lateStab = BEZIER(S2)([s1, s2]);
var latStab2 = MAP(lateStab)(domain);

var lateral = STRUCT([latStab1, latStab2]);
var lateralR1 = R([1,2])([PI/2])(lateral);
var lateralR2 = R([0,2])([-PI/2])(lateralR1); 
var finalLaterals = T([0,1])([3,1.8])(lateralR2);

var stabilLaterals = COLOR([27/255,47/255,67/255])(STRUCT([finalLaterals, m]));
var stabilLateralsT = T([0,1,2])([15,-4.8,-0.03])(stabilLaterals);

var aeroplane = STRUCT([completeWing, stabilLateralsT, fuselage]);

exports.aeroplane = aeroplane;}(this);

DRAW(aeroplane);