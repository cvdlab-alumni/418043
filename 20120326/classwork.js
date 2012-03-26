var monodom = DOMAIN([[3,5]])([3])
DRAW(monodom);

var bidom = DOMAIN([[3,5],[4,5]])([3,3])
DRAW(bidom);

var tridom = DOMAIN([[3,5],[4,5],[0,1]])([3,3,2])
DRAW(tridom);

var domain = DOMAIN([[0,10]])([10]);

var mapping = function(array){
var u = array[0];

return [u,1];
};

var mapped = MAP(mapping)(domain);


var domBise = DOMAIN([[0,10]])([10]);

var mappingBis = function(array){
	var u = array[0];

	return [u,u];
};

var mappedBis = MAP(mappingBis)(domBise)