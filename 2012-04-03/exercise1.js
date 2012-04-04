var drawPlant = function(){
var firstGrid = [];
for (var i = 1; i < 22; i++) {
var point1 = [i, 0];
var point2 = [i, 1];
firstGrid.push(POLYLINE([point1, point2]));
var pointUp1 = [i, 10];
var pointUp2 = [i, 17];
firstGrid.push(POLYLINE([pointUp1, pointUp2]));
};

firstGrid.push(POLYLINE([[0,0], [0,2]]));
var pool1Border = POLYLINE([[1,1],[1, 10]]);
firstGrid.push(pool1Border);
var vertFirstGrid = STRUCT(firstGrid);
DRAW(vertFirstGrid);

var horizFirstGrid = [];
for (var i = 10; i < 18; i++) {
var point1 = [1, i];
var point2 = [21, i];
horizFirstGrid.push(POLYLINE([point1, point2]));
};
horizFirstGrid.push(POLYLINE([[0,0],[21,0]]));
horizFirstGrid.push(POLYLINE([[0,1],[21,1]]));
horizFirstGrid.push(POLYLINE([[0,2],[1,2]]));
var horizFirstGridStruct = STRUCT(horizFirstGrid)



DRAW(horizFirstGridStruct);
DRAW(vertFirstGrid);


//second grid
var secondGridVert = [];
for (var i = 21; i < 37; i++) {
var point1 = [i, 0];
var point2 = [i, 17];
secondGridVert.push(POLYLINE([point1, point2]));
};
var secondGridVertStruct = STRUCT(secondGridVert);
DRAW(secondGridVertStruct);

var secondGridHoriz = [];
for (var i = 0; i < 18; i++) {
var point1 = [21, i];
var point2 = [36, i];
secondGridHoriz.push(POLYLINE([point1, point2]));
};
var secondGridHorizStruct = STRUCT(secondGridHoriz);
DRAW(secondGridHorizStruct);

//scale
var scale = [];
for (var i = 36.3; i < 39; i+=0.3) {
var point1 = [i, 1];
var point2 = [i, 4];
scale.push(POLYLINE([point1, point2]));
};

for (var i = 37; i < 40; i++) {
var point1 = [i, 4];
var point2 = [i, 17];
scale.push(POLYLINE([point1, point2]));
};
for (var i = 4; i < 18; i++) {
var point1 = [36, i];
var point2 = [39, i];
scale.push(POLYLINE([point1, point2]));
};
scale.push(POLYLINE([[36, 0], [39, 0], [39,1]]));
scale.push(POLYLINE([[37, 0], [37, 1]]));
scale.push(POLYLINE([[38, 0], [38 ,1]]));
scale.push(POLYLINE([[36, 1], [39 ,1]]));
DRAW(STRUCT(scale));


//third grid

var thirdGridVert = [];
for (var i = 39; i < 48; i++) {
var point1 = [i, 4];
var point2 = [i, 16];
thirdGridVert.push(POLYLINE([point1, point2]));
};
var thirdGridVertStruct = STRUCT(thirdGridVert);
DRAW(thirdGridVertStruct);

var thirdGridHoriz = [];
for (var i = 4; i < 17; i++) {
var point1 = [39, i];
var point2 = [47, i];
thirdGridHoriz.push(POLYLINE([point1, point2]));
};
var thirdGridHorizStruct = STRUCT(thirdGridHoriz);
DRAW(thirdGridHorizStruct);

//fourth
var lastGrid = [];
lastGrid.push(POLYLINE([[47, 4],[52, 4]]));
lastGrid.push(POLYLINE([[47,5],[52, 5]]));
lastGrid.push(POLYLINE([[52, 4],[52, 6]]));
lastGrid.push(POLYLINE([[51, 4],[51, 6]]));
lastGrid.push(POLYLINE([[51, 6],[52,6]]));
for (var i = 47; i < 52; i++) {
var point1 = [i, 4];
var point2 = [i, 5];
lastGrid.push(POLYLINE([point1, point2]));
};
var lastGridStruct = STRUCT(lastGrid);
DRAW(lastGridStruct);

var pool2Border = POLYLINE([[51, 6],[51, 16]]);
var pool2Border2 = POLYLINE([[47, 16],[51, 16]]);
var poolStruct = STRUCT([pool2Border, pool2Border2]);
DRAW(poolStruct)

//Up Grid
var upGridVert = [];
for (var i = 1; i < 10; i++) {
var point1 = [i, 17];
var point2 = [i, 22];
upGridVert.push(POLYLINE([point1, point2]));
};
var upGridVertStruct = STRUCT(upGridVert);
DRAW(upGridVertStruct);

var upGridHoriz = [];
for (var i = 17; i < 23; i++) {
var point1 = [1, i];
var point2 = [9, i];
upGridHoriz.push(POLYLINE([point1, point2]));
};
var upGridHorizStruct = STRUCT(upGridHoriz);
DRAW(upGridHorizStruct);



//walls
//wall1
var wall = [];
wall.push(POLYLINE([[8, 0.8],[0.8, 0.8], [0.8, 22.2]]));
wall.push(POLYLINE([[8, 0.8],[8,1]]));
wall.push(POLYLINE([[0.8 , 22.2],[9.2, 22.2],[9.2, 16.8]]));
wall.push(POLYLINE([[9, 16.8],[9.2, 16.8]]))
DRAW(STRUCT(wall));

//internal wall 1
wall = [];
wall.push(POLYLINE([[1,16.95], [7, 16.95], [7, 17.05], [1, 17.05]]));
wall.push(POLYLINE([[7, 16.95], [7, 17.05]]));
wall.push(POLYLINE([[7, 17.05], [5.05, 17.05]]));
wall.push(POLYLINE([[5.05, 19], [5.05, 17.05]]));
wall.push(POLYLINE([[5.05, 19], [4.95, 19]]));
wall.push(POLYLINE([[4.95, 19], [4.95, 17.05]]));
wall.push(POLYLINE([[1, 17.05], [4.95, 17.05]]));
DRAW(STRUCT(wall));

//internal wall 2
wall = [];
wall.push(POLYLINE([[4.95, 20],[4.95, 22]]));
wall.push(POLYLINE([[4.95, 20],[5.05, 20]]));
wall.push(POLYLINE([[5.05, 20],[5.05, 20.7]]));
wall.push(POLYLINE([[5.95, 20.7],[5.05, 20.7]]));
wall.push(POLYLINE([[5.95, 20.7],[5.95, 20.8]]));
wall.push(POLYLINE([[5.05, 20.8],[5.95, 20.8]]));
wall.push(POLYLINE([[5.05, 20.8],[5.05, 22]]));

DRAW(STRUCT(wall));

//internal wall 3
wall = [];
wall.push(POLYLINE([[6.95, 22],[6.95, 20.8],[6.6,20.8]]));
wall.push(POLYLINE([[6.6,20.8], [6.6, 20.7], [9, 20.7]]));
DRAW(STRUCT(wall));

//internal wall 4
wall = [];
wall.push(POLYLINE([[7.05, 22],[7.05,20.8],[9,20.8]]));
wall.push(POLYLINE([[6.6,20.8], [6.6, 20.7], [9, 20.7]]));
DRAW(STRUCT(wall));

//internal wall 5
wall = [];
wall.push(POLYLINE([[9, 17.05],[8, 17.05],[8, 16.95]]));
wall.push(POLYLINE([[9, 16.95],[8, 16.95]]));

DRAW(STRUCT(wall));

//internal wall 6
wall = [];
wall.push(POLYLINE([[7.6, 15],[7.6, 15.2], [26.6,15.2]]));
wall.push(POLYLINE([[7.6, 15],[26.6,15], [26.6,15.2]]));

DRAW(STRUCT(wall));


//internal wall 7
wall = [];
wall.push(POLYLINE([[37.7, 16.2],[51.2, 16.2],[51.2, 4.8]]));
wall.push(POLYLINE([[51.2, 4.8],[41.3, 4.8],[41.3, 5]]));
wall.push(POLYLINE([[37.7, 16.2],[37.7, 16]]));
DRAW(STRUCT(wall));

//internal wall 8
wall = [];
wall.push(POLYLINE([[37.4, 11.5],[42.5, 11.5],[42.5, 11.3]]));
wall.push(POLYLINE([[37.4, 11.5],[37.4, 11.3],[42.5, 11.3]]));

DRAW(STRUCT(wall));

//internal wall 9
wall = [];
wall.push(POLYLINE([[25.3, 7.3],[33.8, 7.3],[33.8, 7.5]]));
wall.push(POLYLINE([[25.3, 7.3],[25.3, 7.5],[33.8, 7.5]]));

DRAW(STRUCT(wall));

//glass 3
wall = [];
wall.push(POLYLINE([[30, 13.7],[40, 13.7], [40, 13.75]]));
wall.push(POLYLINE([[30, 13.7],[30, 13.75], [40, 13.75]]));
DRAW(STRUCT(wall));


//glass 1
wall = [];
wall.push(POLYLINE([[30, 13.7],[40, 13.7], [40, 13.75]]));
wall.push(POLYLINE([[30, 13.7],[30, 13.75], [40, 13.75]]));
DRAW(STRUCT(wall));


//glass 1
wall.push(POLYLINE([[38.8, 5],[38.8, 11.3],[38.85,11.3]]));
wall.push(POLYLINE([[38.85,11.3],[38.85, 5],[38.85,11.3]]));



//glass 1
wall.push(POLYLINE([[42.5, 5],[42.5, 11.3], [42.45,11.3]]));
wall.push(POLYLINE([[42.45, 5], [42.45,11.3]]));


DRAW(STRUCT(wall));

//glass 1
wall = [];
wall.push(POLYLINE([[44.8, 6.8],[44.8, 14.1], [44.85, 14.1]]));
wall.push(POLYLINE([[44.85, 14.1],[44.85, 6.8], [44.8, 6.8]]));

DRAW(STRUCT(wall));

//glass 2
wall = [];
wall.push(POLYLINE([[30, 4.95],[30, 5], [42.3, 5]]));
wall.push(POLYLINE([[30, 4.95],[41.3, 4.95]]));
DRAW(STRUCT(wall));

//glass 2
wall = [];
wall.push(POLYLINE([[30.95, 7.5],[30.95, 13.7]]));
wall.push(POLYLINE([[31, 7.5],[31, 13.7]]));
DRAW(STRUCT(wall));
 //glass
wall = [];
wall.push(POLYLINE([[31.95, 7.5],[31.95, 13.7]]));
wall.push(POLYLINE([[32, 7.5],[32, 13.7]]));
DRAW(STRUCT(wall));

//bench
wall = [];
wall.push(POLYLINE([[7.8, 14.1],[7.8, 14.6], [23.2, 14.6]]));
wall.push(POLYLINE([[7.8, 14.1],[23.2, 14.1], [23.2, 14.6]]));
DRAW(STRUCT(wall));


}



var drawGrids = function(){
var grid;
var firstGrid = [];
for (var i = 1; i < 22; i++) {
var point1 = [i, 0];
var point2 = [i, 1];
firstGrid.push(POLYLINE([point1, point2]));
var pointUp1 = [i, 10];
var pointUp2 = [i, 17];
firstGrid.push(POLYLINE([pointUp1, pointUp2]));
};

firstGrid.push(POLYLINE([[0,0], [0,2]]));
var pool1Border = POLYLINE([[1,1],[1, 10]]);
firstGrid.push(pool1Border);
var vertFirstGrid = STRUCT(firstGrid);


var horizFirstGrid = [];
for (var i = 10; i < 18; i++) {
var point1 = [1, i];
var point2 = [21, i];
horizFirstGrid.push(POLYLINE([point1, point2]));
};
horizFirstGrid.push(POLYLINE([[0,0],[21,0]]));
horizFirstGrid.push(POLYLINE([[0,1],[21,1]]));
horizFirstGrid.push(POLYLINE([[0,2],[1,2]]));
var horizFirstGridStruct = STRUCT(horizFirstGrid)






//second grid
var secondGridVert = [];
for (var i = 21; i < 37; i++) {
var point1 = [i, 0];
var point2 = [i, 17];
secondGridVert.push(POLYLINE([point1, point2]));
};
var secondGridVertStruct = STRUCT(secondGridVert);
DRAW(secondGridVertStruct);

var secondGridHoriz = [];
for (var i = 0; i < 18; i++) {
var point1 = [21, i];
var point2 = [36, i];
secondGridHoriz.push(POLYLINE([point1, point2]));
};
var secondGridHorizStruct = STRUCT(secondGridHoriz);

//third grid

var thirdGridVert = [];
for (var i = 39; i < 48; i++) {
var point1 = [i, 4];
var point2 = [i, 16];
thirdGridVert.push(POLYLINE([point1, point2]));
};
var thirdGridVertStruct = STRUCT(thirdGridVert);
DRAW(thirdGridVertStruct);

var thirdGridHoriz = [];
for (var i = 4; i < 17; i++) {
var point1 = [39, i];
var point2 = [47, i];
thirdGridHoriz.push(POLYLINE([point1, point2]));
};
var thirdGridHorizStruct = STRUCT(thirdGridHoriz);

//fourth
var lastGrid = [];
lastGrid.push(POLYLINE([[47, 4],[52, 4]]));
lastGrid.push(POLYLINE([[47,5],[52, 5]]));
lastGrid.push(POLYLINE([[52, 4],[52, 6]]));
lastGrid.push(POLYLINE([[51, 4],[51, 6]]));
lastGrid.push(POLYLINE([[51, 6],[52,6]]));
for (var i = 47; i < 52; i++) {
var point1 = [i, 4];
var point2 = [i, 5];
lastGrid.push(POLYLINE([point1, point2]));
};
var lastGridStruct = STRUCT(lastGrid);

var pool2Border = POLYLINE([[51, 6],[51, 16]]);
var pool2Border2 = POLYLINE([[47, 16],[51, 16]]);
var poolStruct = STRUCT([pool2Border, pool2Border2]);

//Up Grid
var upGridVert = [];
for (var i = 1; i < 10; i++) {
var point1 = [i, 17];
var point2 = [i, 22];
upGridVert.push(POLYLINE([point1, point2]));
};
var upGridVertStruct = STRUCT(upGridVert);

var upGridHoriz = [];
for (var i = 17; i < 23; i++) {
var point1 = [1, i];
var point2 = [9, i];
upGridHoriz.push(POLYLINE([point1, point2]));
};
var upGridHorizStruct = STRUCT(upGridHoriz);

var grid = STRUCT([horizFirstGridStruct, vertFirstGrid, secondGridVertStruct, secondGridHorizStruct,
 thirdGridHorizStruct, thirdGridVertStruct, lastGridStruct, poolStruct, upGridHorizStruct, upGridVertStruct]);
 return grid;
}

var drawScale = function(){
	//scale
var scale = [];
for (var i = 36.3; i < 39; i+=0.3) {
var point1 = [i, 1];
var point2 = [i, 4];
scale.push(POLYLINE([point1, point2]));
};

for (var i = 37; i < 40; i++) {
var point1 = [i, 4];
var point2 = [i, 17];
scale.push(POLYLINE([point1, point2]));
};
for (var i = 4; i < 18; i++) {
var point1 = [36, i];
var point2 = [39, i];
scale.push(POLYLINE([point1, point2]));
};
scale.push(POLYLINE([[36, 0], [39, 0], [39,1]]));
scale.push(POLYLINE([[37, 0], [37, 1]]));
scale.push(POLYLINE([[38, 0], [38 ,1]]));
scale.push(POLYLINE([[36, 1], [39 ,1]]));

return STRUCT(scale);
}

var drawWalls = function(){
	//walls
//wall1
var wall = [];
wall.push(POLYLINE([[8, 0.8],[0.8, 0.8], [0.8, 22.2]]));
wall.push(POLYLINE([[8, 0.8],[8,1]]));
wall.push(POLYLINE([[0.8 , 22.2],[9.2, 22.2],[9.2, 16.8]]));
wall.push(POLYLINE([[9, 16.8],[9.2, 16.8]]))

//internal wall 1
wall.push(POLYLINE([[1,16.95], [7, 16.95], [7, 17.05], [1, 17.05]]));
wall.push(POLYLINE([[7, 16.95], [7, 17.05]]));
wall.push(POLYLINE([[7, 17.05], [5.05, 17.05]]));
wall.push(POLYLINE([[5.05, 19], [5.05, 17.05]]));
wall.push(POLYLINE([[5.05, 19], [4.95, 19]]));
wall.push(POLYLINE([[4.95, 19], [4.95, 17.05]]));
wall.push(POLYLINE([[1, 17.05], [4.95, 17.05]]));

//internal wall 2
wall.push(POLYLINE([[4.95, 20],[4.95, 22]]));
wall.push(POLYLINE([[4.95, 20],[5.05, 20]]));
wall.push(POLYLINE([[5.05, 20],[5.05, 20.7]]));
wall.push(POLYLINE([[5.95, 20.7],[5.05, 20.7]]));
wall.push(POLYLINE([[5.95, 20.7],[5.95, 20.8]]));
wall.push(POLYLINE([[5.05, 20.8],[5.95, 20.8]]));
wall.push(POLYLINE([[5.05, 20.8],[5.05, 22]]));


//internal wall 3
wall.push(POLYLINE([[6.95, 22],[6.95, 20.8],[6.6,20.8]]));
wall.push(POLYLINE([[6.6,20.8], [6.6, 20.7], [9, 20.7]]));

//internal wall 4
wall.push(POLYLINE([[7.05, 22],[7.05,20.8],[9,20.8]]));
wall.push(POLYLINE([[6.6,20.8], [6.6, 20.7], [9, 20.7]]));

//internal wall 5
wall.push(POLYLINE([[9, 17.05],[8, 17.05],[8, 16.95]]));
wall.push(POLYLINE([[9, 16.95],[8, 16.95]]));


//internal wall 6
wall.push(POLYLINE([[7.6, 15],[7.6, 15.2], [26.6,15.2]]));
wall.push(POLYLINE([[7.6, 15],[26.6,15], [26.6,15.2]]));



//internal wall 7
wall.push(POLYLINE([[37.7, 16.2],[51.2, 16.2],[51.2, 4.8]]));
wall.push(POLYLINE([[51.2, 4.8],[41.3, 4.8],[41.3, 5]]));
wall.push(POLYLINE([[37.7, 16.2],[37.7, 16]]));

//internal wall 8
wall.push(POLYLINE([[37.4, 11.5],[42.5, 11.5],[42.5, 11.3]]));
wall.push(POLYLINE([[37.4, 11.5],[37.4, 11.3],[42.5, 11.3]]));


//internal wall 9
wall.push(POLYLINE([[25.3, 7.3],[33.8, 7.3],[33.8, 7.5]]));
wall.push(POLYLINE([[25.3, 7.3],[25.3, 7.5],[33.8, 7.5]]));

return STRUCT(wall);
}

var drawGlasses = function(){
//glass 1
var glass = [];
glass.push(POLYLINE([[30, 13.7],[40, 13.7], [40, 13.75]]));
glass.push(POLYLINE([[30, 13.7],[30, 13.75], [40, 13.75]]));


//glass 1
glass.push(POLYLINE([[30, 13.7],[40, 13.7], [40, 13.75]]));
glass.push(POLYLINE([[30, 13.7],[30, 13.75], [40, 13.75]]));


//glass 2
glass.push(POLYLINE([[38.8, 5],[38.8, 11.3],[38.85,11.3]]));
glass.push(POLYLINE([[38.85,11.3],[38.85, 5],[38.85,11.3]]));



//glass 3
glass.push(POLYLINE([[42.5, 5],[42.5, 11.3], [42.45,11.3]]));
glass.push(POLYLINE([[42.45, 5], [42.45,11.3]]));



//glass 4
glass.push(POLYLINE([[44.8, 6.8],[44.8, 14.1], [44.85, 14.1]]));
glass.push(POLYLINE([[44.85, 14.1],[44.85, 6.8], [44.8, 6.8]]));


//glass 5
glass.push(POLYLINE([[30, 4.95],[30, 5], [42.3, 5]]));
glass.push(POLYLINE([[30, 4.95],[41.3, 4.95]]));

//glass 6
glass.push(POLYLINE([[30.95, 7.5],[30.95, 13.7]]));
glass.push(POLYLINE([[31, 7.5],[31, 13.7]]));

//glass 7
glass.push(POLYLINE([[31.95, 7.5],[31.95, 13.7]]));
glass.push(POLYLINE([[32, 7.5],[32, 13.7]]));

return STRUCT(glass);
}

var drawBench = function(){
//bench
bench = [];
bench.push(POLYLINE([[7.8, 14.1],[7.8, 14.6], [23.2, 14.6]]));
bench.push(POLYLINE([[7.8, 14.1],[23.2, 14.1], [23.2, 14.6]]));
return STRUCT(bench);
}

!(function(exports){
	var plant = STRUCT([drawGlasses(), drawWalls(), drawScale(), drawGrids(), drawBench()]);
	exports.plant = plant;
	return plant;
}(this));

DRAW(plant);