// 1. 
console.log(hello);
var hello = 'world';
// var hello;
// console.log -> undefined
// hello = "world"

// ------------------------------------------

// 2. 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// function test();
//     var needle;
// needle = "haystack";
// test();
//     needle = "magnet";
//     console.log -> "magnet"

// ------------------------------------------

// 3. 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// function print();
// brendan = "super cool"
// console.log -> "super cool"

// ------------------------------------------

// 4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// function eat();
//     var food;
// food = "chicken";
// console.log -> "chicken";
// eat();
//     food = "half-chicken";
//     console.log -> "half-chicken";
//     food = "gone";

// ------------------------------------------

// 5. 
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// var mean;
// mean();
// TypeError!

// ------------------------------------------

// 6. 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// var genre;
// function rewind();
//     var genre;
// console.log -> undefined
// genre = "disco"
// rewind();
//     genre = "rock";
//     console.log -> "rock";
//     genre = "r&b";
//     console.log -> "r&b";
// console.log -> "disco";

// ------------------------------------------

// 7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// var dojo;
// function learn();
//     var dojo;
// dojo = "san jose";
// console.log -> "san jose";
// learn();
//     dojo = "seattle";
//     console.log -> "seattle";
//     dojo = "burbank";
//     console.log -> "burbank";
// console.log -> "san jose"

// ------------------------------------------

// 8. BONUS
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// function makeDojo();
//     const dojo;
// makeDojo("Chicago", 65);
//     dojo = {};
//     dojo.name = "Chicago";
//     dojo.students = 65;
//     dojo.hiring = true;
// console.log -> { name: "Chicago", students: 65, hiring: true };
// TypeError ==> const value cannot be reassigned!
