//pseudo-randomized congruency lists below

var inkIds = [[[3, 1, 3, 2, 4, 2, 4, 2, 3, 2, 3, 1, 3, 2, 3, 1, 3, 2, 4, 2, 4, 1, 3, 2, 3, 1, 4, 2, 4, 1, 3, 1, 4, 2, 4, 1, 4, 1, 3, 2, 4, 2, 3, 1, 4, 1, 3, 1, 4, 1, 4, 1, 3, 2, 3, 2, 3, 2, 4, 2, 4, 1, 3, 2, 3, 1, 4, 1, 4, 2, 4, 2, 4, 2, 3, 1, 3, 1, 4, 1],
[2, 4, 2, 3, 2, 3, 2, 3, 1, 4, 1, 3, 1, 3, 1, 4, 1, 3, 2, 3, 2, 4, 2, 4, 2, 4, 1, 4, 1, 4, 2, 4, 1, 3, 1, 4, 1, 3, 1, 3, 1, 3, 2, 3, 2, 4, 2, 4, 1, 4, 1, 3, 1, 3, 2, 4, 2, 3, 2, 3, 2, 4, 1, 4, 1, 4, 2, 3, 1, 3, 2, 4, 1, 4, 1, 3, 2, 4, 2, 3],
[4, 1, 3, 2, 3, 1, 3, 1, 3, 2, 4, 1, 3, 2, 4, 2, 3, 2, 3, 1, 4, 1, 3, 2, 3, 1, 3, 1, 3, 2, 4, 1, 4, 2, 4, 2, 3, 1, 4, 1, 4, 1, 4, 2, 3, 2, 3, 1, 4, 2, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 1, 4, 2, 3, 1, 4, 1, 4, 2],
[2, 4, 2, 3, 1, 4, 2, 4, 1, 4, 2, 4, 1, 3, 1, 3, 2, 4, 2, 3, 1, 3, 2, 3, 1, 4, 2, 3, 1, 3, 2, 3, 2, 4, 2, 3, 1, 4, 2, 3, 1, 3, 2, 4, 1, 4, 1, 3, 2, 4, 2, 3, 2, 4, 2, 4, 2, 4, 1, 4, 1, 3, 1, 3, 2, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 3, 2, 3, 1, 4]],
[[4, 1, 4, 1, 4, 1, 4, 1, 3, 1, 3, 1, 4, 1, 3, 2, 3, 2, 3, 2, 3, 1, 3, 2, 3, 2, 3, 2, 3, 2, 4, 1, 4, 2, 4, 2, 3, 1, 4, 1, 4, 2, 3, 1, 4, 2, 4, 1, 4, 1, 3, 2, 4, 2, 3, 1, 3, 1, 4, 1, 4, 1, 3, 2, 4, 2, 4, 2, 3, 2, 3, 2, 4, 1, 4, 2, 3, 2, 3, 1],
[1, 3, 2, 3, 1, 4, 1, 4, 1, 4, 2, 4, 2, 3, 2, 3, 2, 3, 2, 3, 1, 3, 2, 4, 1, 3, 1, 3, 1, 4, 2, 4, 1, 3, 1, 3, 2, 3, 2, 4, 2, 3, 2, 4, 2, 4, 1, 3, 2, 3, 1, 4, 1, 4, 1, 4, 1, 4, 2, 3, 2, 3, 1, 4, 1, 4, 2, 3, 1, 4, 2, 3, 2, 4, 1, 4, 2, 3, 1, 4],
[3, 1, 3, 2, 3, 1, 4, 2, 4, 1, 4, 2, 3, 2, 4, 2, 3, 2, 4, 2, 3, 1, 4, 1, 3, 2, 4, 1, 4, 1, 3, 2, 3, 1, 3, 2, 4, 1, 3, 2, 4, 2, 4, 1, 3, 1, 4, 1, 3, 2, 4, 2, 4, 1, 3, 1, 3, 2, 4, 2, 4, 1, 3, 2, 3, 1, 3, 1, 4, 1, 3, 1, 4, 2, 4, 2, 4, 1, 3, 2],
[1, 3, 1, 4, 2, 3, 2, 4, 1, 3, 2, 4, 2, 3, 2, 4, 1, 3, 1, 4, 2, 3, 2, 3, 2, 4, 1, 4, 2, 3, 2, 4, 1, 3, 1, 3, 2, 3, 1, 4, 2, 3, 2, 3, 1, 4, 2, 3, 1, 4, 1, 4, 1, 3, 2, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 3, 1, 4, 2, 4, 2, 3, 1, 3, 2, 4, 2, 3, 2, 4]],
[[4, 1, 4, 2, 4, 1, 4, 1, 3, 1, 4, 1, 3, 2, 4, 1, 4, 1, 3, 2, 4, 2, 4, 1, 4, 1, 4, 2, 4, 1, 4, 2, 3, 1, 3, 1, 3, 2, 3, 2, 4, 2, 3, 2, 4, 2, 3, 1, 3, 1, 3, 2, 3, 2, 3, 2, 3, 1, 4, 1, 3, 2, 3, 2, 4, 1, 4, 1, 3, 2, 3, 2, 4, 2, 3, 2, 4, 1, 3, 1],
[1, 3, 2, 3, 1, 3, 1, 3, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 2, 3, 2, 4, 2, 3, 1, 3, 2, 4, 2, 3, 2, 3, 2, 4, 1, 4, 2, 3, 2, 4, 2, 4, 2, 4, 1, 4, 1, 4, 1, 3, 2, 4, 1, 3, 1, 4, 2, 4, 1, 4, 2, 3, 1, 3, 1, 4, 1, 3, 2, 4, 2, 3, 1, 4, 1, 3, 1, 4],
[4, 2, 4, 1, 3, 2, 4, 1, 4, 2, 3, 1, 4, 1, 4, 2, 3, 1, 4, 1, 4, 1, 3, 1, 4, 1, 3, 1, 3, 2, 3, 2, 3, 2, 3, 2, 4, 2, 4, 1, 4, 1, 3, 2, 3, 2, 3, 1, 4, 2, 4, 1, 3, 1, 4, 2, 4, 2, 3, 2, 3, 1, 4, 2, 3, 2, 3, 1, 4, 1, 3, 1, 4, 2, 4, 2, 3, 2, 3, 1],
[2, 3, 1, 4, 1, 4, 2, 4, 1, 3, 1, 4, 2, 3, 2, 3, 1, 3, 2, 4, 1, 4, 1, 3, 1, 4, 1, 4, 1, 4, 1, 3, 2, 4, 1, 4, 2, 4, 2, 3, 1, 3, 1, 4, 2, 4, 2, 3, 1, 3, 2, 4, 2, 3, 1, 4, 2, 4, 2, 3, 1, 3, 1, 3, 1, 3, 2, 3, 2, 3, 2, 4, 2, 3, 2, 4, 2, 3, 1, 4]],
[[3, 1, 4, 1, 4, 2, 4, 1, 3, 2, 4, 1, 4, 1, 4, 2, 3, 1, 4, 2, 4, 1, 3, 1, 3, 1, 4, 1, 3, 2, 4, 2, 4, 1, 3, 2, 3, 2, 4, 1, 3, 2, 3, 2, 4, 2, 3, 1, 3, 1, 3, 1, 4, 2, 3, 1, 3, 2, 3, 2, 3, 2, 4, 2, 3, 1, 3, 2, 4, 2, 3, 1, 4, 2, 4, 1, 4, 2, 4, 1],
[1, 4, 2, 3, 1, 3, 1, 4, 1, 3, 1, 3, 2, 4, 2, 3, 1, 4, 2, 3, 2, 4, 1, 4, 2, 3, 2, 3, 2, 3, 1, 4, 1, 3, 2, 3, 2, 3, 1, 4, 1, 4, 2, 3, 1, 4, 1, 3, 2, 4, 2, 4, 1, 3, 1, 4, 2, 4, 2, 4, 2, 4, 2, 3, 1, 3, 1, 4, 2, 4, 2, 3, 1, 4, 1, 4, 2, 3, 1, 3],
[4, 1, 3, 1, 3, 1, 3, 1, 3, 2, 3, 1, 3, 2, 4, 2, 3, 2, 3, 1, 3, 2, 3, 2, 4, 1, 4, 2, 4, 2, 3, 2, 4, 1, 4, 1, 4, 2, 4, 2, 4, 2, 4, 1, 4, 2, 4, 1, 4, 1, 3, 2, 4, 1, 4, 2, 3, 2, 3, 2, 3, 1, 3, 1, 3, 2, 3, 1, 4, 1, 4, 2, 4, 1, 3, 2, 3, 1, 4, 1],
[2, 3, 2, 4, 1, 4, 1, 3, 1, 4, 2, 3, 1, 3, 1, 3, 2, 4, 2, 3, 2, 3, 2, 3, 1, 4, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 2, 3, 2, 4, 2, 3, 2, 4, 1, 4, 2, 3, 2, 4, 2, 4, 1, 4, 1, 3, 1, 4, 1, 3, 2, 4, 1, 3, 1, 3, 2, 4, 2, 4, 2, 3, 2, 3, 2, 3, 1, 4]]];

var posIds = [[[4, 1, 3, 1, 3, 2, 3, 2, 4, 2, 4, 2, 4, 1, 4, 2, 3, 2, 3, 2, 3, 2, 4, 2, 4, 1, 3, 1, 4, 2, 3, 2, 4, 1, 4, 2, 4, 1, 4, 1, 4, 2, 3, 2, 4, 1, 4, 1, 4, 2, 3, 2, 4, 1, 4, 2, 3, 1, 4, 2, 3, 2, 3, 1, 3, 1, 4, 2, 4, 1, 3, 1, 4, 2, 3, 1, 3, 1, 4, 1],
[2, 4, 1, 4, 2, 4, 2, 4, 1, 4, 2, 4, 2, 4, 2, 3, 1, 4, 2, 3, 2, 4, 2, 4, 1, 4, 2, 4, 1, 4, 1, 4, 1, 3, 1, 4, 2, 4, 1, 4, 2, 4, 1, 3, 2, 4, 1, 4, 2, 4, 2, 3, 1, 4, 1, 3, 1, 4, 1, 4, 2, 4, 2, 4, 2, 3, 2, 3, 2, 4, 2, 3, 2, 3, 2, 3, 2, 4, 2, 4],
[4, 2, 4, 1, 4, 1, 4, 2, 3, 1, 4, 1, 3, 1, 4, 1, 3, 1, 3, 2, 3, 2, 3, 1, 3, 2, 3, 1, 3, 1, 4, 1, 3, 1, 4, 1, 4, 2, 4, 2, 4, 2, 3, 2, 3, 2, 3, 1, 4, 2, 4, 2, 3, 1, 4, 2, 3, 2, 3, 2, 3, 2, 4, 2, 3, 1, 4, 2, 4, 1, 4, 1, 4, 1, 4, 1, 3, 2, 4, 1],
[2, 4, 2, 4, 1, 3, 2, 3, 2, 3, 2, 4, 2, 4, 2, 3, 1, 4, 1, 4, 2, 4, 1, 3, 2, 4, 2, 4, 2, 3, 2, 4, 2, 4, 2, 4, 1, 4, 2, 4, 2, 4, 1, 4, 1, 3, 2, 4, 1, 4, 2, 4, 1, 3, 2, 4, 2, 4, 2, 4, 1, 3, 2, 3, 2, 4, 2, 3, 2, 4, 2, 3, 1, 4, 2, 3, 1, 3, 1, 3]],
[[3, 1, 4, 2, 3, 2, 3, 1, 3, 2, 4, 2, 4, 1, 3, 2, 3, 1, 4, 1, 3, 2, 4, 1, 3, 1, 3, 2, 4, 1, 3, 2, 4, 2, 3, 1, 3, 1, 3, 2, 4, 2, 4, 1, 4, 2, 4, 2, 4, 1, 4, 2, 4, 2, 4, 1, 4, 1, 4, 2, 3, 2, 3, 1, 4, 1, 4, 1, 3, 2, 4, 2, 3, 2, 4, 1, 4, 2, 3, 2],
[1, 3, 2, 3, 1, 4, 2, 3, 1, 3, 1, 4, 2, 3, 1, 4, 2, 3, 2, 4, 2, 4, 1, 4, 1, 3, 2, 4, 2, 3, 1, 4, 2, 3, 2, 3, 2, 3, 1, 4, 1, 4, 1, 3, 2, 3, 1, 4, 2, 4, 2, 4, 2, 3, 2, 4, 2, 4, 1, 3, 2, 3, 1, 3, 2, 3, 1, 3, 2, 4, 1, 4, 2, 4, 1, 4, 2, 4, 2, 4],
[4, 2, 3, 1, 4, 2, 4, 1, 3, 1, 4, 2, 4, 1, 3, 2, 3, 1, 3, 2, 4, 1, 3, 2, 3, 1, 4, 1, 3, 1, 4, 2, 4, 2, 4, 2, 4, 1, 3, 1, 3, 2, 3, 2, 4, 2, 4, 2, 3, 1, 3, 2, 4, 1, 3, 1, 4, 2, 4, 1, 3, 1, 4, 1, 3, 1, 3, 2, 4, 1, 3, 1, 4, 1, 3, 2, 3, 1, 3, 1],
[2, 4, 2, 3, 2, 4, 1, 4, 2, 4, 2, 3, 2, 3, 2, 3, 1, 4, 1, 4, 1, 3, 2, 3, 1, 4, 1, 4, 1, 3, 2, 3, 2, 4, 1, 3, 2, 3, 2, 4, 2, 4, 2, 4, 2, 4, 1, 4, 2, 3, 1, 3, 2, 3, 2, 4, 2, 3, 1, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 3, 2, 4, 2, 4]],
[[4, 1, 3, 1, 4, 1, 4, 2, 3, 1, 4, 2, 4, 1, 4, 1, 4, 1, 3, 1, 4, 2, 3, 1, 3, 2, 3, 1, 3, 2, 3, 2, 4, 1, 4, 2, 4, 1, 4, 2, 4, 1, 3, 2, 4, 2, 4, 1, 4, 2, 3, 2, 3, 2, 4, 2, 4, 2, 3, 2, 4, 1, 4, 2, 4, 2, 4, 1, 3, 2, 4, 1, 3, 2, 4, 2, 3, 1, 3, 2],
[1, 4, 2, 4, 2, 4, 2, 3, 2, 4, 2, 3, 1, 3, 2, 3, 2, 4, 2, 3, 1, 4, 2, 3, 1, 3, 2, 3, 2, 3, 1, 4, 1, 4, 2, 3, 1, 3, 2, 3, 1, 4, 1, 3, 2, 4, 1, 4, 2, 3, 2, 3, 1, 4, 1, 3, 1, 3, 2, 4, 1, 3, 1, 4, 1, 3, 1, 4, 2, 3, 1, 3, 2, 3, 1, 4, 1, 4, 1, 3],
[3, 2, 4, 2, 4, 1, 3, 1, 3, 1, 3, 2, 3, 2, 3, 2, 3, 2, 4, 1, 3, 1, 4, 2, 3, 1, 3, 1, 4, 1, 4, 1, 4, 2, 3, 2, 4, 2, 3, 1, 4, 2, 3, 1, 3, 1, 3, 1, 3, 2, 3, 2, 4, 1, 4, 2, 4, 1, 3, 2, 3, 1, 4, 1, 3, 1, 3, 2, 3, 1, 4, 1, 3, 2, 3, 2, 4, 1, 4, 1],
[2, 3, 1, 3, 2, 4, 1, 3, 1, 3, 1, 4, 2, 4, 2, 3, 2, 3, 1, 3, 2, 3, 2, 4, 1, 4, 2, 3, 1, 3, 2, 4, 2, 4, 1, 3, 2, 3, 1, 3, 2, 4, 2, 4, 2, 3, 1, 3, 2, 3, 2, 3, 1, 3, 1, 3, 2, 4, 1, 3, 1, 4, 1, 4, 1, 3, 1, 4, 2, 3, 2, 3, 1, 3, 1, 3, 2, 4, 2, 4]],
[[4, 2, 3, 2, 3, 1, 3, 1, 4, 2, 4, 2, 4, 2, 4, 2, 3, 1, 4, 1, 3, 2, 3, 1, 3, 1, 4, 1, 3, 1, 3, 1, 4, 1, 3, 1, 3, 1, 4, 2, 3, 1, 3, 2, 4, 2, 3, 2, 4, 2, 4, 1, 3, 1, 4, 1, 4, 2, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 2, 3, 1, 4, 2, 3, 2, 4, 1],
[1, 3, 2, 3, 1, 4, 1, 3, 2, 4, 2, 3, 1, 3, 2, 4, 1, 3, 2, 4, 1, 3, 1, 3, 1, 4, 2, 3, 2, 4, 1, 4, 1, 3, 2, 4, 2, 4, 2, 4, 1, 4, 1, 3, 1, 3, 2, 4, 1, 3, 2, 3, 1, 3, 2, 4, 2, 3, 1, 4, 2, 3, 1, 4, 2, 3, 2, 4, 2, 3, 2, 3, 1, 4, 1, 3, 1, 4, 1, 4],
[3, 2, 3, 1, 4, 1, 3, 1, 3, 1, 3, 2, 4, 1, 4, 1, 3, 2, 3, 2, 3, 1, 3, 2, 4, 1, 3, 2, 4, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 1, 3, 1, 3, 2, 3, 2, 3, 1, 4, 1, 3, 1, 3, 1, 4, 2, 4, 2, 4, 2, 3, 1, 3, 1, 4, 2, 4, 1, 4, 2, 3, 1, 3, 1, 4, 1, 4, 2, 3, 2],
[1, 4, 2, 3, 2, 3, 1, 3, 2, 4, 1, 3, 2, 3, 2, 4, 2, 3, 2, 3, 1, 4, 2, 3, 2, 4, 2, 3, 1, 3, 2, 4, 2, 4, 2, 3, 1, 3, 2, 3, 2, 4, 1, 4, 1, 4, 2, 4, 2, 4, 2, 4, 2, 3, 1, 4, 2, 3, 2, 4, 1, 4, 1, 3, 2, 4, 1, 3, 2, 3, 2, 3, 1, 3, 1, 3, 2, 4, 2, 3]]];

var words = ['Fel', 'Le', 'Bal', 'Jobb'];
var keyNames = ['j', 'n', 'f', 'g'];
var mapping = [[1, 2, 3, 4], [1, 2, 4, 3], [1, 3, 2, 4], [1, 3, 4, 2], [1, 4, 2, 3], [1, 4, 3, 2], [2, 1, 3, 4], [2, 1, 4, 3], [2, 3, 1, 4], [2, 3, 4, 1], [2, 4, 1, 3], [2, 4, 3, 1], [3, 1, 2, 4], [3, 1, 4, 2], [3, 2, 1, 4], [3, 2, 4, 1], [3, 4, 1, 2], [3, 4, 2, 1], [4, 1, 2, 3], [4, 1, 3, 2], [4, 2, 1, 3], [4, 2, 3, 1], [4, 3, 1, 2], [4, 3, 2, 1]];