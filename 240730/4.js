let starbucks = [
    {
      name: '카페 라떼',
      icedOnly: false,
    },
    {
      name: '콜드 브루',
      icedOnly: true,
    },
    {
      name: '돌체 라떼',
      icedOnly: false,
    },
    {
      name: '돌체 콜드 브루',
      icedOnly: true,
    },
  ];
  

 

 function isIcedOnly(starbuck) {
    return starbuck.icedOnly === true;
 }

 let icedOnly = starbucks.filter(isIcedOnly);
 
 
//화살표 함수 사용 버전  //let icedOnly = starbucks.filter(starbuck => starbuck.icedOnly);
  
  
  console.log(icedOnly);