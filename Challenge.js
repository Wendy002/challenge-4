// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first =  data.lists[0][1] ;
const second = data.lists[1][1] ;  // get arrays from the object
const third = data.lists[2][1] ;

const result = [];
console.log(first)
const extractBiggest = () => {
	if (first[first.le-1] > second[-1] && first[-1] > third[-1] ) { 
		//const lastItem1 = first.po
		return first[-1];
	}

	else if (second[-1] > first[-1] && second[-1] > third[-1]) {
		return second[-1];
	} else {
		return third[-1];
	}

}

	
	

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)