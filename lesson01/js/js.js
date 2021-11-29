const t1 = (10 * 13) / 2;
const t2 = (16.5 * 20.3) / 2;
const t3 = (16.5 * 20.3) / 2;
const t4 = (20.3 * 16.5) / 2;
const t5 = (7.8 * 5.6) / 2;
const t6 = (9.3 * 12.4) / 2;

console.log(t1, t2, t3, t4, t5, t6);

const resultFirstTriangle = Math.max(t1,t2);
console.log(resultFirstTriangle);

const resultSecondTriangle = Math.max(t3,t4);
console.log(resultSecondTriangle);

const resultThirdTriangle = Math.max(t5,t6);
console.log(resultThirdTriangle);

const firstAnswer = `Triangle one has an area of ${t1} and Triangle two has an area of ${t2} Triangle 2 is the biggest with an area of ${resultFirstTriangle}, we can see this by using the function math.max()`;
const secondAnswer = `Triangle three has an area of ${t3} and triangle four has an area of ${t4}. Both triangles are the same with an area of ${resultSecondTriangle}`;
const thirdAnswer = `Triangle five has an area of ${t5} and triangle six has an area of ${t6}. Triangle six is the biggest with an area of ${resultThirdTriangle}, we can see this by using the function math.max()`;

console.log(firstAnswer);
console.log(secondAnswer);
console.log(thirdAnswer);


// I would have said it was operator procedance but since the procesance goes from left to right *, /, % multiply is first anyway. 
// Either way you can divde the height by 2 and then times the base and get the same number (10 * 13) / 2 = 65 but (13 / 2) * 10 = 65.
// I dont think the brackets are needed but maybe I am doing something wrong. They would be needed if we divided first.

const t7 = 10 * (13 / 2);
console.log(t7);

// for a more clear example. Is this a trick question? am i being dumb :)?.

//First attempt at user input, very simple and not reusable but works.

// let TriangleBase = window.prompt("Enter a base for a triangle: ");
// let TriangleHeight = window.prompt("Enter a height for a triangle: ");
// let areaOfTriangle = (TriangleBase * TriangleHeight) / 2;
// alert("The area of a triangle is " + areaOfTriangle);

// Better :)
let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    let base = document.getElementById("baseinput").value;
    let height = document.getElementById("heightinput").value;
    let area = (base * height) / 2;
    document.getElementById("areaOutput").value = area ;
})