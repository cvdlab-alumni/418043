!function(exports){
var points = [[10,0,0],[6,2,0],[4.2,5,0],[4,8,0],[5,11,0],[7,14,0],[9,16,0],[11,17,0],[12,18,0],[13,19,0],[12,20,0],[9,21,0],[6,23,0],[5,25,0],[5,28,0],[7,29,0],[9,29.5,0],[13,29.5,0],[17,29.5,0],[18,32,0],[21,30,0],[23,27,0],[23,22,0],[22,18,0],[20.5,12,0],[21,8,0],[22,4,0],[23,1,0],[21,0,0],[10,0,0]];
var knots = [0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,28,28];
var profileBody = NUBS(S0)(2)(knots)(points);
var dom = DOMAIN([[0,1],[0,1],[0,1]])([80,1,1]);
var fakeBody = BEZIER(S0)([[18,25,0]]);
var bodySurface = BEZIER(S1)([profileBody, fakeBody]);

var prof2Points = points.map(function(p){return [p[0], p[1], p[2] + 5.5]});
var fakeBody2 = BEZIER(S0)([[18,25,5.5]]);
var profileBody2 = NUBS(S0)(2)(knots)(prof2Points);
var bodySurface2 = BEZIER(S1)([profileBody2, fakeBody2]);
var horse = BEZIER(S2)([bodySurface, bodySurface2]);
var d = MAP(horse)(dom);

var x = 3.5
var crestaPoints = [[18,32,0],[21,30,0],[23,27,0],[23,22,0],[22,18,0],[20.5,12,0],[21,8,0],[22,4,0],[23,3,0],[21,2,0],[21+x,2,0],[23+x,3,0],[22+x,4,0],[21+x,8,0],[20.5+x,15,0],[22+x,18,0],[23+x,22,0],[23+x,27 + 1,0],[21+x,30 + x,0],[16,32 + 3/2*x,0],[18,32,0]]
var knots2 = [0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19,19];
var cres = NUBS(S0)(2)(knots2)(crestaPoints);
var fakeCRES = BEZIER(S0)([[23,27 + 1,0]]);
var cresta = BEZIER(S1)([cres,fakeCRES]);

var dom2d = DOMAIN([[0,1],[0,1]])([80,1]);
var fakeCRES2 = BEZIER(S0)([[23,27 + 1,3]]);
var crestaPoints2 = crestaPoints.map(function(n){return [n[0],n[1],n[2]+3]});
var cres2 = NUBS(S0)(2)(knots2)(crestaPoints2);
var cresta2 = BEZIER(S1)([cres2,fakeCRES2]);
var crestaSolid = BEZIER(S2)([cresta,cresta2]);

var dis = T([2])([1])(MAP(crestaSolid)(dom));
var finalHorseScaled = S([0,1,2])([0.5,0.5,0.5])(STRUCT([dis, d]));
var finalHorse = T([0,1,2])([-8,13.9,-1.5])(finalHorseScaled);
var basedom = DOMAIN([[0,1],[0,2*PI]])([40,30]);
var basePoints = [[1,0,0],[8,0,0],[7,-4,0],[4,-6,0],[3.5,-7.5,0],[7,-9,0],[3.5,-11,0],[5,-12,0],[4,-14,0],[-2,-14,0]];
var basePoints = basePoints.map(function(p){return [-p[0],p[2],p[1]]});
var knotsBase = [0,0,0,1,2,3,4,5,6,7,8,8,8];
var baseProfile = NUBS(S0)(2)(knotsBase)(basePoints);
var base = ROTATIONAL_SURFACE(baseProfile);
var baseDis = R([1,2])([PI/2])(MAP(base)(basedom));
var chessHorse = STRUCT([baseDis, finalHorse]);
var scmodel = T([0])([20])(COLOR([139/255,69/255,19/255,1])(chessHorse));

exports.scmodel = scmodel;}(this);