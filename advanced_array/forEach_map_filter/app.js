const colors = ['red','yellow','blue']

const myForEach = (arr, callbackFunc) => {
	for(let i = 0; i<arr.length; i++) {
		callbackFunc(arr[i], i, arr)
	}
	return undefined
};

colors.forEach((color) => {console.log(color)})

myForEach(colors, (color, i, arr) => {console.log(color,i, arr)})