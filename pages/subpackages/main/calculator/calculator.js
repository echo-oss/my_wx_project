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
}
export {Calculator}