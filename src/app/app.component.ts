import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  calValue:number=0;
  funcT:any='NoFunction';
  firstNumber:number=0;
  secondNumber:number=0;
  calNumber:string="anyValue"
  onClickValue(val:string,type:any){
    if(type=='number'){
      this.onNumberClick(val);
    }
    else if(type=="function"){
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val:string){
    if(this.calNumber!='anyValue'){
      this.calNumber=this.calNumber+val;
    }
    else{
      this.calNumber=val;
    }
    this.calValue=parseFloat(this.calNumber);
  }
  onFunctionClick(val:string){
    if(this.funcT=='c'){
      this.clearAll
    }
    if(this.funcT=='NoFunction'){
      this.firstNumber=this.calValue;
      this.calValue=0;
      this.calNumber='anyValue';
      this.funcT=val;
    }
    else if(this.funcT!='NoFunction'){
      this.secondNumber=this.calValue;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val:string){
    if(this.funcT=='+'){
      const total=this.firstNumber+this.secondNumber;
      this.totalAssignValues(total,val)
      if(val=='='){
        this.onEqualPress()
      }
    }
    if(this.funcT=='-'){
      const total=this.firstNumber-this.secondNumber;
      this.totalAssignValues(total,val)
      if(val=='='){
        this.onEqualPress()
      }
    }
    if(this.funcT=='*'){
      const total=this.firstNumber*this.secondNumber;
      this.totalAssignValues(total,val)
      if(val=='='){
        this.onEqualPress()
      }
    }
    if(this.funcT=='/'){
      const total=this.firstNumber/this.secondNumber;
      this.totalAssignValues(total,val)
      if(val=='='){
        this.onEqualPress()
      }
    }
    if(this.funcT=='%'){
      const total=this.firstNumber%this.secondNumber;
      this.totalAssignValues(total,val)
      if(val=='='){
        this.onEqualPress()
      }
    }
    
  }
  totalAssignValues(total:number,val:string){
    this.calValue=total;
    this.firstNumber=total;
    this.secondNumber=0;
    this.calNumber='anyValue';
    this.funcT=val;
  }
  onEqualPress(){
    this.firstNumber=0;
    this.secondNumber=0;
    this.funcT='NoFunction';
    this.calNumber='anyValue'
  }
  clearAll(){
    this.firstNumber=0;
    this.secondNumber=0;
    this.calValue=0;
    this.funcT='NoFunction';
    this.calNumber='anyValue'
  }
}
