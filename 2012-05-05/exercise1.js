!function(exports){var wing2dDomain = INTERVALS(1)(30);
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
var completeWing = STRUCT([wings, completeBars, exWingComplete]);

exports.completeWing = completeWing;}(this);

DRAW(completeWing)