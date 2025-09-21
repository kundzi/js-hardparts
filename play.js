console.log('Hello, world!');
const num = 3;
function multiplyByTwo(x) {
  return x * 2;
}
console.log(multiplyByTwo(num));

const n = null;
const undef = undefined;

const val = multiplyByTwo(5);
console.log(val);   

function copyArrayAndMultiplyByTwo(arr) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(arr[i] * 2);
    }
    return output;
}

const result = copyArrayAndMultiplyByTwo([1, 2, 3]);
console.log(result);

function mapArray(arr, fn) {
    const output = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        output[(fn(arr[i]))] ;
    }
    return output;
}

const result2 = mapArray([1, 2, 3], (item => item / 4));
console.log(result2);


