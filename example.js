// 1. variable type
// const -> constant(상수), 값이 바뀔수 없음
// let -> 새로운것을 만들때 사용하는 변수 / 업데이트시 let을 붙이지 않고 변수명을 그대로 사용가능함.
// var -> 어디서든 변수의 업데이트가 가능함.(코드의 정확한 의미를 찾기가 어려움)

// 2. data type
// true & false

// null : 아무것도 없다라는 의미.
// let something;
// console.log(something) => 결과는 undefined 으로 나옴, null과는 다르다.
//                                     -> 변수가 메모리에 만들어졌고 컴퓨터가 변수에 대해 인지하지만 값이 없는것을 의미.

// 3. Arrays
// 배열을 표현 방식: const variable = [1, 2, 3, "4", "5", 6 ,7]
// 배열 안에는 데이터 타입에 제한받지 않음.
// 원하는 값을 가지고 싶다면 variable[0] 등의 숫자를 입력해주면 된다. 배열의 길이에 따라서 다름.
// 배열에 값을 추가하는 방법:  variable.push(-- 넣고자 하는 value 입력 ---) 함수 사용.
// push 한 value는 배열의 제일 마지막에 들어감.

// 4. objects
// object 안에서는 = 를 사용하지 않음.
// object는 const type에서도 update 가능.
// 하나의 property를 사용하고 추가를 하고 싶다면 ',' 로 구분지어줌
const profile = {
    name: "son",
    age: 26,
    home: "busan"
}

profile.school = "ulsan unv" // 객체에 property를 추가할 수 있음.

- > console.log(profile)
- > console.log(profile.name)  == console.log(profile["name"])

- > console.log(profile.age)
- > console.log(profile.home)

// function 실행방법
function var1(){
    console.log("Hello!");
}
var1(); -> var1 을 실행하는 방법.

// parameter, argument
function var1(intro) { --> argument 와 parameter의 갯수에 맞게끔 입력을 할수있다.
    console.log(intro);
}
var1("hello~"); 
var1("nice to meet you")










