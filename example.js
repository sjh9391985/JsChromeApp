[----------------------------------------------]
[----------- JS 기초 문법 정리 파일입니다 -----------]
[----------------------------------------------]

// 1. variable type
 const -> constant(상수), 값이 바뀔수 없음
 let -> 새로운것을 만들때 사용하는 변수 / 업데이트시 let을 붙이지 않고 변수명을 그대로 사용가능함.
 var -> 어디서든 변수의 업데이트가 가능함.(코드의 정확한 의미를 찾기가 어려움)

// 2. data type
 true & false
 null : 아무것도 없다라는 의미.
 let something;
 console.log(something) => 결과는 undefined 으로 나옴, null과는 다르다.
//                                     -> 변수가 메모리에 만들어졌고 컴퓨터가 변수에 대해 인지하지만 값이 없는것을 의미.

// 3. Arrays
 배열을 표현 방식: const variable = [1, 2, 3, "4", "5", 6 ,7]
 배열 안에는 데이터 타입에 제한받지 않음.
 원하는 값을 가지고 싶다면 variable[0] 등의 숫자를 입력해주면 된다. 배열의 길이에 따라서 다름.
 배열에 값을 추가하는 방법:  variable.push(-- 넣고자 하는 value 입력 ---) 함수 사용.
 push 한 value는 배열의 제일 마지막에 들어감.

// 4. objects
 object 안에서는 = 를 사용하지 않음.
 object는 const type에서도 update 가능.
  하나의 property를 사용하고 추가를 하고 싶다면 ',' 로 구분지어줌
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

// 5. function 실행방법
function var1(){
    console.log("Hello!");
}
var1(); -> var1 을 실행하는 방법.

// parameter, argument 전달하기, 받기
function var1(intro) { --> argument 와 parameter의 갯수에 맞게끔 입력을 할수있다.
    console.log(intro);
}
var1("hello~"); 
var1("nice to meet you")

// parseInt() 문자를 정수로 변환해주는 메소드

// 6. 데이터타입(primitive type)

// [기본타입](primitive, 유사객체)
1. number
2. boolean
3. String
4. undefined -> [var u = undefined == var u 와 같은 의미]/ 선언과 정의가 구분이 없음.

// [객체] new 생성자함수() 사용해서 생성 - (1. object type)/ (2. function type)
Number()
Boolean()
String()

var i1 = new Number(10);
var i2 = new Boolean(true);
var i3 = new String("Hello Wordl");

console.log(typeof(i1)) -> 생성자 함수를 통해서 만들어진것은 object 타입으로 나옴 
console.log(typeof(i2)) -> 생성자 함수를 통해서 만들어진것은 object 타입으로 나옴 
console.log(typeof(i3)) -> 생성자 함수를 통해서 만들어진것은 object 타입으로 나옴 
// null 도 object로 나옴.

var o = {} //객체는 object type
var a = [] //배열은 object type
JSON - 객체의 literal {} - js의 object를 표현하는 방법


// 자바 스크립트 객체를 구분하는 떠 다른 방법
6-1)
내장 객체(Built-In, Native), 자바스크립트 엔진 안에 미리 내장되어 있는 객체
 - Number, Boolean, Date RegExp ... 생성자 함수 객체
 - parseInt, setTimeout, setInterval 와 같은 일반 함수 객체
 - window 객체(브라우저에서만... 전역객체)

 6-2)
 호스트 객체, 자바스크립트 엔진이 임베디드된 호스트의 객체
 브자우저만 해당(document, location, XMLHttpRequest, ...)

 6-3)
 사용자 객체. 자바스크립트 코드가 엔진에서 실행되면서 생성되는 객체들.
 



















