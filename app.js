// HTML 의 Element를 JS를 통해서 제어가능함.
// document에는 수많은 object가 존재.

//html title 제어
//document.title = "Momentum Application";
//document.getElementById("title")

// class name 가져오기.
//const hellos = document.getElementsByClassName("hello");
//console.log(hellos);

// tag name 가져오기
//const title = document.getElementsByTagName("h1");
//console.log(title);

const title = document.querySelector("h1");
                        //-> 여러개의 쿼리(배열형식)를 가져오고 싶다면 querySelectorAll()을 사용할것.
console.log(title);

