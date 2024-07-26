function printFruits(a, b) {
    return "제가 좋아하는 과일은 " + a + "," + b + "입니다.";
}


console.log(printFruits("사과", "오렌지"));



/////////////////////////////////////////////////////////////////////////////////////////////////////////



function checkAge(age) {
    if (age >= 19) {
        console.log("안녕하세요")
    } else { 
        console.log("나가세요")
    }
    
    }
    
    // 함수 실행

    checkAge(20);
    checkAge(12);
    



    /////////////    /////////////    /////////////    /////////////    /////////////


    function repeatWord(str, n) {
        for (let i=0; i< n; i++) {
            console.log(str);
        }
      }
      
      // 함수 실행
      repeatWord("hello", 5);
      



    /////////////    /////////////    /////////////    /////////////    /////////////



    const members = [
        {
          name: "최원장",
          role: "tutor",
        },
        {
          name: "윤창식",
          role: "tutor",
        },
        {
          name: "김병연",
          role: "tutor",
        },
        {
          name: "박가현",
          role: "tutor",
        },
        {
          name: "김멍멍",
          role: "student",
        },
        {
          name: "이야옹",
          role: "student",
        },
      ];
      
      function getStudents() {
        for (let i=0; i< members.length; i++) {
            if (members[i].role === "tutor") {
                console.log(members[i].name);
            }
        }
       // hint: 배열 안의 모든 객체를 한 번 반복한다.  (반복문)
       // hint: 반복문 안에서 role이 tutor인 객체의 name을 콘솔에 출력한다 (조건문)
      }
      
      // 함수 실행
      getStudents();