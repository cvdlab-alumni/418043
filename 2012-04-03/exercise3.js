
var floors = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;
var floor = [];
floor.push(SIMPLEX_GRID([[39], [1], [hBase]]));
floor.push(SIMPLEX_GRID([[-21, 15], [-1, 16], [hBase]]))
floor.push(SIMPLEX_GRID([[-0.8, 8.4],[-17,5.2],[hBase]]));
floor.push(SIMPLEX_GRID([[-0.8,20.2],[-10, 7],[hBase]]));
floor.push(SIMPLEX_GRID([[-36,11],[-4, 12.2],[hBase]]));
floor.push(SIMPLEX_GRID([[-47,4],[-4, 1],[hBase]]));
floor.push(SIMPLEX_GRID([[-51, 1],[-4, 2],[hBase]]));
floor.push(SIMPLEX_GRID([[-0.8, 20.2],[-1, 9],[hBase - 0.2]]));
floor.push(SIMPLEX_GRID([[-47, 4.2],[-5, 11.2],[hBase - 0.2]]));
floor.push(SIMPLEX_GRID([[-0.8, 0.2],[-2, 8],[hBase]]));
floor.push(SIMPLEX_GRID([[1],[-1, 1],[hBase]]));
floor.push(SIMPLEX_GRID([[-47, 4.2],[-16, 0.2],[hBase]]));
floor.push(SIMPLEX_GRID([[-51, 0.2],[-6, 10],[hBase]]));
floor.push(SIMPLEX_GRID([[-36, 3],[-16, 1],[hBase]]));
var floorStruct = STRUCT(floor);
COLOR([215/255,201/255,177/250])(floorStruct);
return floorStruct;
}

var glasses = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;
	var glasses = [];
glasses.push(SIMPLEX_GRID([[-30,11.4],[-4.95, 0.05],[-hBase, hMinorWall]]));
glasses.push(SIMPLEX_GRID([[-42.15,0.05],[-5, 6.3],[-hBase, hMinorWall]]));
glasses.push(SIMPLEX_GRID([[-30,10],[-13.6, 0.05],[-hBase, hMinorWall]]));
glasses.push(SIMPLEX_GRID([[-30.95,0.05],[-7.5, 6.1],[-hBase, hMinorWall]]));
glasses.push(SIMPLEX_GRID([[-31.95,0.05],[-7.5, 6.1],[-hBase, hMinorWall]]));
glasses.push(SIMPLEX_GRID([[-44.7,0.05],[-6.9, 7.2],[-hBase, hMinorWall]]));

var glassesStruct = STRUCT(glasses);
COLOR([175/255, 239/255, 244/255])(glassesStruct);
return glassesStruct;
}

var steps = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;
	var steps = [];
var h = 2;
for (var i = 0; i < 3; i+=3/8) {
steps.push(SIMPLEX_GRID([[- (36 + i), 3/8],[-1, 3],[h]]));
h-=2/8
};

var stepsStruct = STRUCT(steps);
COLOR([215/255,201/255,177/250])(stepsStruct);
return stepsStruct;
}

var majorWalls = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;
var walls = [];
walls.push(SIMPLEX_GRID([[-7.6, 19],[-15, 0.2],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-25.2, 8],[-7.3, 0.2],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-37.2, 5],[-11.3, 0.2],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-0.8, 0.2],[-0.8, 21.4],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-0.8, 8.4],[-22, 0.2],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-9, 0.2],[-16.8, 5.4],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-37.8, 13.4],[-16, 0.2],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-9, 0.2],[-16.8, 5.4],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-51, 0.2],[-5, 11],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-41.4, 9.8],[-4.8, 0.2],[-hBase, hWall]]));
walls.push(SIMPLEX_GRID([[-1,7],[-0.8,0.2],[-hBase, hWall]]));

var wallStruct = STRUCT(walls);
COLOR([194/255,178/255,128/250])(wallStruct);
return wallStruct;
}

var minorWalls = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;

var minorWalls = [];
minorWalls.push(SIMPLEX_GRID([[-1, 6],[-16.95, 0.1],[-hBase, hMinorWall]]));
minorWalls.push(SIMPLEX_GRID([[-4.95, 0.1],[-17.05, 1.95],[-hBase, hMinorWall]]));
minorWalls.push(SIMPLEX_GRID([[-8, 1],[-16.95, 0.1],[-hBase, hMinorWall]]));
minorWalls.push(SIMPLEX_GRID([[-4.95, 0.1],[-20, 2],[-hBase, hMinorWall]]));
minorWalls.push(SIMPLEX_GRID([[-5.05, 0.95],[-20.8, 0.1],[-hBase, hMinorWall]]));
minorWalls.push(SIMPLEX_GRID([[-7, 2],[-20.8, 0.1],[-hBase, hMinorWall]]));
//minorWalls.push(SIMPLEX_GRID([[-6.95, 0.1],[-20.9, 1.1],[-hBase, hMinorWall]]));

var minorWallStruct = STRUCT(minorWalls);
COLOR([0,0,0])(minorWallStruct);	
return minorWallStruct;
}

var reefs = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;
	var reefs = [];
reefs.push(SIMPLEX_GRID([[-0.3, 8.8 + 0.7],[-13.2, 9.8],[-hBase - hWall, hReef]]));
reefs.push(SIMPLEX_GRID([[-24,23],[-4, 13],[-hBase - hWall, hReef]]));
var reefStruct = STRUCT(reefs);
COLOR([135/255, 47/255, 30/255])(reefStruct);
return reefStruct;
}

var pools = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;
	var pools = [];
pools.push(SIMPLEX_GRID([[-1, 20],[-1, 9],[-1.8, 0.2]]));
pools.push(SIMPLEX_GRID([[-47, 4],[-5, 11],[-1.8, 0.2]]));
var poolsStruct = STRUCT(pools);
COLOR([98/255,203/255,211/255])(poolsStruct);
return poolsStruct;
}

var bench = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;
	var sedile = SIMPLEX_GRID([[-7.8, 15.3],[-14.1, 0.6],[-hBase-0.4, 0.3]]);
var gamba = SIMPLEX_GRID([[0.3],[-14.1, 0.3],[-hBase, 0.4]]);
var gambe = [];
for (var i = 0; i < 8; i++) {
gambe.push(T([0])([7.9+i*2.1])(gamba));
}
var bench = STRUCT([STRUCT(gambe),sedile]);
return bench;
}

var columns = function(){
var hBase = 2;
var hWall = 6;
var hReef = 0.7;
var hMinorWall = hWall;
	var column = SIMPLEX_GRID([[0.15],[0.15],[-hBase, hWall]]);
var columns = [];
columns.push(T([0,1])([26, 14])(column));
columns.push(T([0,1])([26, 7])(column));
columns.push(T([0,1])([32.2, 14])(column));
columns.push(T([0,1])([32.2, 7])(column));
columns.push(T([0,1])([38.5, 14])(column));
columns.push(T([0,1])([38.5, 7])(column));
columns.push(T([0,1])([45, 14])(column));
columns.push(T([0,1])([45, 7])(column));
var columnsStruct = STRUCT(columns);
COLOR([0,0,0])(columnsStruct);
return columnsStruct;
}

!(function(exports){
	var pavillion = STRUCT([steps(),reefs(), columns(), floors(), minorWalls(), majorWalls(), glasses(), bench(), pools()]);
		exports.pavillion = pavillion;
}(this));

DRAW(pavillion);