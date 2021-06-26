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

/* -> listener 사용법
const title = document.querySelector("div.hello:first-child h1");
                      //-> 여러개의 쿼리(배열형식)를 가져오고 싶다면 querySelectorAll()을 사용할것.

function handleTitlcClick() {
    console.log("title was clicked");
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";
}
function handleMouseLeave() {
    title.innerText = "Moust is gone";
}
function handleWindowResize() {
    document.body.style.background = "tomato";  
    document.body.style.color = "red";
}
title.addEventListener("click", handleTitlcClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
*/


const h1 = document.querySelector("div.hello:first-child h1");
// Javascript에서는 css처리를 하는것이 효율적이지는 않다.
/*function handleTitleClick() {
    if(h1.style.color === "blue"){
        h1.style.color = "tomato";    
    }else{
        h1.style.color = "blue";
    }
    console.log(h1.style.color); 
}
h1.addEventListener("click",handleTitleClick);*/

// classList 사용하기
/*function handleTitleClick() {
    const clickedName = "active";
    if(h1.classList.contains(clickedName)){  // === h1.className === clickedName 
        h1.classList.remove(clickedName)  //h1.className = ""
    }else{
        h1.classList.add(clickedName)  //h1.className = clickedName;
    }
}
h1.addEventListener("click", handleTitleClick);*/

// toggle 사용하기
function handleTitleClick() {
    h1.classList.toggle("active"); // h1 태크의 classlist에서 active 클래스가 있는지 확인하고 있다면 제거, 없다면 생성을 해주는 역할을 하는 함수.
}
h1.addEventListener("click", handleTitleClick);
