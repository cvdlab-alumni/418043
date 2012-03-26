var monodom = DOMAIN([[3,5]])([3])
DRAW(monodom);

var bidom = DOMAIN([[3,5],[4,5]])([3,3])
DRAW(bidom);

var tridom = DOMAIN([[3,5],[4,5],[0,1]])([3,3,2])
DRAW(tridom);

//retta traslata di 1

var domain = DOMAIN([[0,10]])([10]);

var mapping = function(array){
var u = array[0];

return [u,1];
};

var mapped = MAP(mapping)(domain);

//bisettrice

var domBise = DOMAIN([[0,10]])([10]);

var mappingBis = function(array){
	var u = array[0];

	return [u,u];
};

var mappedBis = MAP(mappingBis)(domBise);

DRAW(mappedBis);

//sinusoide

var domSinus = DOMAIN([[0,2*Math.PI]])([10]);

var mappingSin = function(array){
var u = array[0];

return [u, SIN(u)];
}
var mappedSin = MAP(mappingSin)(domSinus);

DRAW(mappedSin);

//circonferenza


var drawCircle = function(r, n){
var domCircle = DOMAIN([[0,2*Math.PI]])([n]);
var mappingCircle = function(array){
	var u = array[0];
	var x = Math.cos(u);
	var y = Math.sin(u);

	return [r*x, r*y];
}

var mappedCir = MAP(mappingCircle)(domCircle);

DRAW(mappedCir);
}


