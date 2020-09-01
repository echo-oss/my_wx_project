class Calculator{
  //商业贷款
  static getCommercialLoan(number,index){
    switch(index){
      case 3:{return number = number*0.4 };break;
      case 2:{return number = number*0.3 };break;
      case 1:{return number = number*0.2};break;
      case 0:{return number = number*0.1 };break;
      default : {return number}
    }
  }
  static getCommercial(number,year){
    switch(year){
      case 4:{return number = number/(26*12)};break;
      case 3:{return number = number/(27*12)};break;
      case 2:{return number = number/(28*12) };break;
      case 1:{return number = number/(29*12) };break;
      case 0:{return number = number/(30*12) };break;
      default : {return number}
    }
  }


}
export {Calculator}