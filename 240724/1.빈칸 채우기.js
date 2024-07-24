1. let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 선언만하고 불러올 값이 없어서


2. < const > apple = "사과";
apple = "바나나"; // TypeError: Assignment to constant variable
// const는 재선언을 못해서

3. let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// - 배열의 시작은 0 부터 임으로 0 1 2 3 순서를 새어보면 19이다.

4. 
let mySchedule = "";
console.log(mySchedule || false); // < false >
console.log(!!mySchedule); // < false >
//  false false > false
//  !!false  > !true >  false 
