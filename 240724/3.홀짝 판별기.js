function add(number) {
    if (number % 2 === 0) {
        return "짝수";
    } else {
        return "홀수"; 
    }
}


console.log(add(10)); // 결과값 "짝수";
console.log(add(7)); // 결과값 "홀수";