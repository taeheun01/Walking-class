function n(a, b, c) {
    let num;
    
    switch (b) {
        case "+":
            num = a + c;
            break;
        case "-":
            num = a - c;
            break;
        case "*":
            num = a * c;
            break;
        case "/":
            num = a / c;
            break;
        default:
            num = "x";
    }
    
    return num;
}

n(3, "+", 6); // 결과값 9
n(11, "-", 6); // 결과값 5
n(6, "*", 3); // 결과값 18
n(15, "+", 3); // 결과값 5