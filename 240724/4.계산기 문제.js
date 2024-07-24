function number(a, b, c) {
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

number(3, "+", 6); // 결과값 9
number(11, "-", 6); // 결과값 5
number(6, "*", 3); // 결과값 18
number(15, "+", 3); // 결과값 5