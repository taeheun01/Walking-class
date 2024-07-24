1. let uninitialized;
console.log(uninitialized); // 결과값 < undefined >


2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const는 변하지 않는 값 이라서 ?..?


3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// - 배열의 시작은 0 부터 임으로 0 1 2 3 순서를 새어보면 19이다.

4. 
let mySchedule = "";
console.log(mySchedule || false); // < true >
console.log(!!mySchedule); // < true >
// ||은 true가 하나라도 있으면 true
// !는 ture면 false로   false면 true로 바꿈  !!가 두개니 true!
