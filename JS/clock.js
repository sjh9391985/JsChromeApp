const clock = document.querySelector("#clock");

// Date 객체를 통하여서 현재의 날짜(시, 분, 초)를 가져옴.
function getClock(){
    const date = new Date();
    // 문자로 데이터 변환 및 문자 추가 메소드 사용.
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");


    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
getClock();
setInterval(getClock, 1000); //-> 1초마다 getClock() 함수 실행.
//