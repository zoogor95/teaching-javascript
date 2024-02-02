// variables
// data type
    // boolean, string, number, object, array

let a = 2;
//array
let b = [1,'d',3,false,5,6];
b[2] = 'abc';

//object
let c = {
    0: 'a',
    emad: 'ammama'
};

// Operators == <= >= != > < ! 

let v = 1<=3

let d = '0'===0


// Loop and Conditions
// console.log(b.length)
let endpoint = 10
for (let i = 0; i < b.length; i++) {
    // console.log(b[i])
}

let gender = 'shemale'
if (gender == 'male') {
    // console.log('He is a boy')
}
if (gender == 'female') {
    // console.log('She is a girl')
}

if (gender == 'female') {
    // console.log('She is a girl')
} else if (gender == 'none of above') {
    // console.log('He is a unknown')
} else if (gender == 'male') {
    // console.log('He is a boy')
} else {
    // console.log('She is a shemale')
}

number = 5
if (number == 1) {
    // console.log('She is a girl')
} else if (number == 2) {
    // console.log('He is a unknown')
} else if (number == 3) {
    // console.log('He is a boy')
} else {
    // console.log('She is a shemale')
}


// Combining loop and conditions
// 0-100 even 
let p = [0,2,4,6,8,10]
// console.log(0)
// console.log(2)
// console.log(4)
// console.log(16%5)


for (let i = 0; i < 100; i++) {
    if(i%2 != 0) {
        // console.log(i)
    }
}


let stars = '';
stars = '';
stars = stars + '*'
// console.log(stars)

// for (let i = 0; i < 3; i++) {
//     console.log('1st loop', i)
//     for (let j = 0; j < 3; j++) {
//         console.log('2st loop', i, j)
//     }
// }

// for (let i = 0; i < 5; i++) {
//     stars = '';
//     for (let j = 0; j < i; j++) {
//         stars = stars + '*'
//     }
//     console.log(stars)
// }

// nested loop

// console.log('*****')
// console.log('****')
// console.log('***')
// console.log('**')
// console.log('*')

function addAndDisplay(num1, num2, num3) {
    console.log('Adding 3 numbers')
    console.log('----------------')
    console.log('The Answer is: ', num1+num2+num3)
}

function add(num1, num2, num3) {
    return num1 + num2 + num3
}

function printWelcomeMessage() {
    // console.log('Welcome!')
}

let a1 = 5 
let a2 = 10 
let a3 = 20 



// addAndDisplay(5,10,20)
// addAndDisplay(2,9,52)
// printWelcomeMessage()
let answer = add(a1, a2, a3)
// console.log(answer)

let array1 = [1,3,2,4,5]
let array2 = ['a','b','c','d']
let array3 = array1.concat(array2)
// console.log(array3)
// console.log(array1)
// console.log(array2)
