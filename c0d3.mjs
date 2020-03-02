/*Write a function called solution that
Takes in 2 numbers and returns a function
The returned function returns the sum when it is called*/

///////////////////////////
//writing arrow functions.
const name1 = (myName) =>{
    return myName;
}
name1('cyberman');
/////////
//to write an arrow function and store it into a variable.
const variFunction = () =>{
    const aVariable = 25;
    return aVariable;
}
variFunction();

//////////write a function called solution that takes in a number.
const solution = () =>{
    return 5 + 5;
}

//write a function that takes in a string.
const solution1 = () =>{
    return 'cyber' + 'man';
}

//write a function that takes in a string.
const solution2 = () =>{
    return !false;
}

///write a function that returns a function.
const solution3 = () =>{
    return () =>{

    }
}

//"running" or "calling " a function
const solution4 = () =>{
    return 'cyberman';
}
const cyberManFun = solution4;//cyberManFun is now a function.

const aliasfun = solution4;//aliasFun is now a function.

const sayMyName = solution4();//sayMyName is now a function.











/////js0 problem 8.
const solutionX1 = (num1, num2) =>{
    return () =>{
        return num1 + num2;
    }
}
let addNums1 = solutionX1(1, 2);
addNums1();//customized function is called and will return a value;
//correct answer for js0 problem 8.

const solution = (num1, num2) =>{
    return () =>{
        return num1 + num2;
    }
}

/*Write a function that takes in 2 numbers, 
return a function that takes in a number 
that returns the sum of all 3 numbers when called.*/

const solution = (num1, num2) =>{
    return (num3) =>{
        return num1 + num2 + num3;
    }
}
const a = solution(1, 2); 
a(1);
a(2);
a(3);

let javaScript = 0;

const jabaScrip = () =>{
    javaScript = javaScript + 1;
    return javaScript;
}
jabaScrip();//1

let pancake = jabaScrip;//1
pancake /*1*/ = jabaScrip() /*1*/ + /*1*/ jabaScrip();//3 is result.

//storing a function inside of a vaiable to create a new function.
let codeLang = 'JavaScript';

const codeBestLang = () =>{
    let stack = ' Full Stack';
    return codeLang + stack;
}
codeBestLang();

const theBestEngnr = codeBestLang();
theBestEngnr; + ' engineering.';
//undefined is falsey...Functions should not return falsey...

const javaScriptEngineer = () =>{}//an undefined arrow function.
let someCodeBase = javaScriptEngineer();//someCodeBase will return undefined.
someCodeBase = !javaScriptEngineer();//opposite of falsey is truthy...
//The opposite of false is true.

//storing a function in a variable to create a new function.
const moreSal = () =>{
    const totaSal = 78000 + 30000;
}
const newSalary = moreSal();//returns undefined beacause nothing is returned.

//calling a function from inside other functions.
const miCodeLang = () =>{
    let myLang = 'JavaScript';
    return myLang;
}
const anotherFun = () =>{
    miCodeLang();
    miCodeLang(); 
    miCodeLang();
}
const finalFun = anotherFun();


//writting an arrow function that returns another arrow function.
const returnArrow = (num1, num2) =>{
    return (num3) =>{
        return num1 + num2 + num3;

    }
}
const brandNew = returnArrow(5, 6);
brandNew(1);



const aNewSkill01 = () =>{
    let myCodeLang01 = 'JavaScript';
    return () =>{
        return myCodeLang01 + ' Engineering';
    }
}
const theBestLang01 = aNewSkill01();//theBestLang01 is now a function.
let browsLang01 = theBestLang01();//browLang01 value is JavaScript Engineering.
browsLang01 = theBestLang01();

//write an arrow function that returns another arrow function.
let pointLang = '';
const dartFun = () =>{
    return () =>{
        pointLang = pointLang + ' JavaScript';
        return pointLang;
    }
}
const subFunc = dartFun();//subFunc is now a function.//' JavaScript'.
let subFunc1 = subFunc();//subFunc1 has a value of ' JavaScript'.
//subFunc1 = subFunc();//' subFunc1 = ' JavaScript' & subFunc() = ' JavaScript'.

/*
Problem 9...Write a function that takes in 2 numbers, 
return a function that takes in a number 
that returns the sum of all 3 numbers when called.
*/

const solution1 = (num1, num2) =>{
    return (num3) =>{//this function takes in a number.
        let twoNums = num1 + num2;
        return twoNums + num3;//function accesses and returns 
        //the sum of all three numbers.
    }
}
const a1 = solution1(1, 2);//a1 is now a newly created function
//because the a1 variable contains function capabilities.

a1(1);//new function is called three times.
a1(2);
a1(3);

//best way to write problem #9.//A function that takes 2 nums
//returns a function that takes a number and...
//returns the sum of all three numbers when called.
const solution = (num1, num2) =>{
    return (num3) =>{
        return num1 + num2 + num3;
    }
}
const result = solution(1, 2);
a(1);
a(2);
a(9);

//write a function called solution that returns a function called console.log
//three times each time returning a number.
const aSolution1 = (_num, _num1, _num2) =>{
    return () =>{
        console.log(_num + 0101);
        console.log(_num1 + 0202);
        console.log(_num2 + 0303);

    }
}
const returnMe1 = aSolution1(1, 6, 5);
returnMe1();

const stringFun = (name, lastName) =>{
    return name + ' ' + lastName;
}
let fullName = stringFun('cyber', 'man');
fullName;


//write a function that runs a function console.log() three times 
//that returns a number.
const abSolution = () =>{
    console.log();
    console.log();
    console.log();
    return 12;
}
abSolution();

//write a function that returns a function that runs console.log
//when the function is called consle.log runs three times.
const console3Fun = () =>{
    return () =>{
        console.log('I');
        console.log('Love');
        console.log('JavaScript');
        console.log('Engineering');
    }
}
const consoleLogFunc = console3Fun();
consoleLogFunc();//how to run string function.
//function has to be called in order to work properly.

//review These concepts:
//0. Write an arrow function that returns a number.
const simpleArrow = (numb) =>{
    return numb + 2;
}
let insidefun = simpleArrow(2);
insidefun();

//1. calling an arrow function from inside another arrow function.

const callThis = () =>{
    return 1;
}
let callHere = (callMulti) =>{//
    return callMulti + callMulti + callMulti;
}
callHere(callThis(), callThis(), callThis());

//2. (js0/9.js) running a function that takes 2 numbers
//2b.and returns a function that takes a number and calcs the sum
//2c.of all three numbers.
const takeTwo = (num0, num1) =>{
    return (num2) =>{
        return num0 + num1 + num2;
    }
}
let takeThree = takeTwo(1, 2);
takeThree(1);

//3. running a function that returns console.log three times
//3b.and returns a number. 
const conslIt = () =>{
    console.log('This');
    console.log('is');
    console.log('javaScript');
    return 'number' + 1 + ' programming language';
}
conslIt();

//4. running a function that returns a console.log
//4b.three times.
const runConsleLog = () =>{
    console.log();
    console.log();
    console.log();
}
runConsleLog();

//6. parameters and arguments: Requirements to instructions.
const useParams1 = (params1) =>{
    return params1;//how to call a function that has been stored inside a variable.
}
let paramsVar1 = useParams1(17);
paramsVar1;//how to call a function that has been stored inside a variable.

const useParams2 = (params2) =>{
    return params2;
}
let paramsVar2 = useParams2('argument');
paramsVar1;//variable being called/ran.

//a function that takes two params 
//and returns a function that returns the sum of 
//the two parameters when the returned function is called. 
const useParams3 = (num1, num2) =>{
    return () =>{
        return num1 + num2;
    }
}
let returnNum = useParams3(3, 2);
returnNum();//The 2nd function now returns the sum of 
//the parent function's parameters.
//because it is equal to it's parent
//and the function is equiped to return a function.

//7. passing a function as an argument into another function.
const passIt = () =>{//passIt function created.
    return 5;
}
let caughtIt = (stillPassing) =>{//function passed into a new function as a parameter.
    return stillPassing();//function abilities will be returned.
}
caughtIt(passIt);
//caughtIt function is called 
//so it contains stillPassing as a parameter,
//which contains the passIt function as an argument.

//parameters and arguments: Requirements to instructions.
const simpFunMathPort = (num1) =>{
    num1 = 'port' + num1 + '.a';
    return num1;
}
let newMathPortFun = simpFunMathPort(400);
newMathPortFun;//newMathFun variable returns 'port400.a'.


//working with parameters & arguments
const newFun = (parameter0) =>{
    parameter0 = 'port' + parameter0 + '.b';
    return parameter0;
}
let newFun1 = newFun(500);
newFun1;//running the newFun function from inside the newFun1 variable.

//working with parameters & arguments
let codeIntData = 0;
const newFun2 = (parameter1, parameter2, parameter3) =>{
    codeIntData = 'port' + parameter1 + parameter2 + '.c-';
    return codeIntData + parameter3;
}
let newFun3 = newFun2(004, 404, 200);
newFun3;

//problem 10: Write a function that takes in 2 functions and 
//returns the sum of the result of the 2 functions.

//pass anything into a function.//
//passing a function as an argument into another function.

const returnVal = () =>{//creating a new function that returns a value.
    return 12;
}
let returnVal1 = (returnVal2) =>{//storing function 
    //in a function as parameter
    //creates...
    return returnVal2;//& returns new function.
}
returnVal1(returnVal());

//passing a function into a function as a parameter
//and returning a value.
const returnThis = () =>{//creating a function that returns a value.
    return 'vehicle port ' + 101;
}
let returnPort = (returnThisNewPort) =>{//storing a p.function in a new function
    return returnThisNewPort;//and returns that p.function.
}
returnPort(returnThis());//and stores the first function in our returned p.function as an argument.
//which will return the original value.

/*
Problem 10: Write a function that takes in 
2 functions and returns the sum of the result of the 2 functions
*/
//solved.
const aFun = () =>{
    return 5;
}
const bFun = () =>{
    return 6;
}
const solution = (aFun, bFun) =>{
    return aFun() + bFun();
}
const cFun = solution(aFun, bFun);
cFun;

//writing a function that uses a function as its parameter and argument.
const inFunction =(num1, num2)=>{
    return num1 * num2;
}
let newFun = (passedIn) =>{
    return passedIn;
}
newFun(inFunction(1, 2));

//write a function called solution that has:
//a string parameter, and returns a function.
const solution0 = (sillyString) =>{
    return () =>{
        return sillyString;
    }
}
let stringFunction = solution0('string output');
stringFunction();

//write a function that has:
//a number parameter, and returns a function.
const returnsNum = (int0) =>{
    return () =>{
        return int0;
    }
}
let numberFunction = returnsNum(55);
numberFunction();

//write a function that has:
//a boolean parameter, and returns a function.
const returnsBoolean = (True) =>{
    return () =>{
        if(True === 100){
            return true;
        }
        return false;
    }
}
let boolFunction = returnsBoolean(1000);
boolFunction();

//write a function that has:
//a function parameter, and returns a function.

const aFunction = (func0) =>{
    return ()=>{
        return func0;
    }
}
let returningFunction = aFunction('simple string');
returningFunction();

//write a function that has:
//a function parameter, and a number, and returns
//a function.
const typeFunc1 = () =>{
    return 2;
}
const twoParams = (func1, int1) =>{
    return () => {
        return func1 + int1;
    }
}
let funData = twoParams(typeFunc1(), 5);
funData();

//functions with conditional behavior.
const newIntVal = (int2) =>{
    if(int2 === 1){
        return '1 unit added';
    }
    return 'sorry, only 1 unit can be added at a time.';
}
let addUnits = newIntVal(5);
addUnits;


//functions with conditional behavior
const doMath = (lrgInt, smllInt) =>{
    lrgInt = lrgInt + 2;
    if(lrgInt > smllInt){
        return lrgInt + ' is greater than ' + smllInt;
    }
    return smllInt + ' is greater than ' + lrgInt;
}
let mathVal = doMath(2, 6);
mathVal = doMath(234, 654);

//functions with coditional behavior.
let int5 = 2;
let int6 = 1;

const doMreMath = (int3, int4) =>{
    int3 = int3 + int5;
    int4 = int4 + int6;
    if(int3 > int4){
        return int3 + ' is a larger number than ' + int4;
    }
    if(int3 < int4){
        return int4 + ' is greater than ' + int3;
    }
    if(int3 === int4){
        return 'Both are equal in size.';
    }
}
let constMath = doMreMath(3, 4);
constMath;

//function excercises.
/*
Write an arrow function called massiveOrSmall 
that adds 2 numbers and returns "massive" if 
the sum is over 100 otherwise returns "small".
*/
const massiveOrSmall = (int7, int8) =>{
    if(int7 + int8 > 100){
        return 'massive';
    }
    return 'small';
}
let whichIsGreater = massiveOrSmall(10, 10);
whichIsGreater;

/*
Write a function called sumOrTen that takes in 2 numbers. 
It should return 10 if both numbers are bigger than 10; 
otherwise it should just add them.
*/
const sumOrTen = (int9, int10) =>{
    if(int9 > 10 && int10 > 10){//if both numbers are greater than 10.
        return 10;
    }
    return int9 + int10;
}
let tenOrSum = sumOrTen(11, 9);
tenOrSum;

/*
write a function that takes two numbers
and returns a function that adds the sum
of the two numers when the function is called.
*/
const returnBoth = (a, b) =>{
    return () =>{
        return a + b;
    }
}
let pleaseSum = returnBoth(5, 6);
pleaseSum();

/*
Write a function called combineIfOver42 that 
returns either two strings combined or the empty string, 
depending on whether an input number is over 42.
*/
const combineIfOver42 = (input0, input1, input2) =>{
    if(input2 > 42){
        return input0 + input1;
    }
    return '';
}
let maybeOver42 = combineIfOver42('Over ', 'Fourty Two', 45);
maybeOver42;

/*
Write a function called compareStrings that returns true 
if two strings are equal and false if they're not.
*/
const compareStrings = (a, b) =>{
    return a === b;
}
let enterStrg = compareStrings('hi', 'bye');
enterStrg;


//html and functions

/*Run the includes function, 
which takes in 1 argument, a string.*/


const includes = (a) =>{
    return a;
}
let returnIncl = includes('run function');
returnIncl;

/*
Run the map function
that which takes 1 argument
a function.
*/

map(() =>{});

/*
Run the setTimeout function, 
which takes in 2 arguments, 
a function and a number.
*/
setTimeout(()=>{}, 1);

/*
Run the app.get function, 
which takes in 2 arguments, 
a string and a function.
*/
app.get('hi', ()=>{});

/*
Run the fs.writeFile function, 
which takes in 3 arguments: 
a string, a string, and a function.
*/
fs.writeFile('I love ', 'JavaScript', () =>{});

//write a function that takes a function and number.
const takeTypes = (a, int) =>{
    return a, int;
}
let returnBothTypes = takeTypes(() =>{}, 1);
returnBothTypes;

//solve the following:
//5.
const contain = (input) =>{//first function.
    return input;
}
const contain0 = () =>{//second function.
    return 99;
}
let release = contain0;//undefined.

release;//returns a function and name for the second function.

release = contain(contain0);//returns a function and a name and a function name.

release = contain(contain0());//returns 99 because contain0 is a function.
//stores contain function inside of release variable.

//solve the following:
//6.
const someCode = (run_it) =>{//function that returns a function and a num.
    return run_it() + 5;//return run_it parameter as a function plus 5.
}
const moreCode = () =>{//function that returns a number.
    return 11;
}
let outPut1 = moreCode;//returns undefined. No args/no function called.

outPut1 = someCode(moreCode);//#someCode func is called and uses 
//#moreCode funct as an argument.


const moreCode = () =>{//function that returns a number.
    return 11;
}
const someCode1 = (run_it1) =>{//same as...
    return run_it1() + 5;//return parameter and argument as a function.
}
someCode1(moreCode);

//write a function that returns a function that returns a value.

//first function.
const return_more = (paramThis) =>{//1st function passed as a parameter.
    return paramThis() + 1;
}

//second function.
const returnIt1 = () =>{
    return 1;
}


let returnFun = return_more(returnIt1);//2nd function passed as an argument.
returnFun;


const secondInputFun = () =>{
    return 2;
}
const anInputFun = (param1) =>{
    return param1() + 1;
}
let somefunVal = anInputFun;//returns undefined.s

somefunVal = secondInputFun(anInputFun);//returns 2.

somefunVal = secondInputFun(() =>{
    return 2;
},1);//returns 2

somefunVal = secondInputFun(() =>{
    const a = 95;
    anInputFun();
});// returns 2.




//Variables and Functions
/*
Write a function called 
solution that takes in a number and returns a function.

whenever the returned function is called, 
the next incremental number will be returned
*/
const solution = (a) =>{
    return () =>{
        return a += 1;
    }
}
let result = solution(1);
result();










































