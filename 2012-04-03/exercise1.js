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
	for (var i = 21; i < 40; i++) {
		var point1 = [i, 0];
		var point2 = [i, 17];
		secondGridVert.push(POLYLINE([point1, point2]));
	};
	var secondGridVertStruct = STRUCT(secondGridVert);
	DRAW(secondGridVertStruct);

	var secondGridHoriz = [];
	for (var i = 0; i < 18; i++) {
		var point1 = [21, i];
		var point2 = [39, i];
		secondGridHoriz.push(POLYLINE([point1, point2]));
	};
	var secondGridHorizStruct = STRUCT(secondGridHoriz);
	DRAW(secondGridHorizStruct);

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

//internal wall 10
	wall = [];
	wall.push(POLYLINE([[30, 13.7],[40, 13.7]]));
	wall.push(POLYLINE([[38.8, 5],[38.8, 11.3]]));
	wall.push(POLYLINE([[42.5, 5],[42.5, 11.3]]));


	DRAW(STRUCT(wall));

	//internal wall 11
	wall = [];
	wall.push(POLYLINE([[44.8, 6.8],[44.8, 14.1]]));
	DRAW(STRUCT(wall));


}

