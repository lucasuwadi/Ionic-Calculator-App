import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public numbers: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,"=","C"];
 public functions: any = ['*', '/','+','-'];

 public input:any;
 public inputTemp:any=[];
 public firstValue:any;
 public secondvalue:any;
 public operator:any;
 public answer:number;
 //public displayValuesRealTime:any;
 
 calStarted: boolean = false; 
 operationHasBeenPressed:boolean= false;

 constructor(public navCtrl: NavController) {

  }
  public startCalculation(){

    if(this.calStarted==false){
      this.ClearAll();
      this.calStarted=true
      console.log("started calculation")
    }
  }
  

  public Input(value){
    this.startCalculation();
    if(value=="="){
      this.AssignValue();
      this.EqualsClick();
      // this.answer=0
      this.firstValue=""
      this.secondvalue="" 
    }
    else if(value=="C"){
      this.ClearAll();
    }
    else{
    this.inputTemp.push(value);
    this.input=this.inputTemp.join('');
    if(this.operationHasBeenPressed==true){
      this.operationHasBeenPressed=false;
     }
    }
    
  }

 public AssignValue(){
  if(this.firstValue!="")
    {
      if(this.answer!= null){
      this.firstValue=this.answer; 
    }

    this.secondvalue=this.input
    this.EqualsClick();
  }
  else{
    this.firstValue=this.input;
    this.inputTemp.length=0
    this.input="";
    console.log("first value is equall temp answer")
  }

 }

  public Operation(value){
    if(this.operationHasBeenPressed==false){
     this.AssignValue();
    }
    this.operator=value
    this.operationHasBeenPressed=true;
  }

  public EqualsClick(){

    if(this.operator =="*"){
      this.answer=parseInt(this.firstValue) * parseInt(this.secondvalue)
     
    }
    else if(this.operator =="+"){
      this.answer= parseInt(this.firstValue) + parseInt(this.secondvalue)
     
    } 
    else if(this.operator =="-"){
      this.answer=parseInt(this.firstValue) - parseInt(this.secondvalue)
      
    }
    else if(this.operator=="/"){
      if(this.input!="0"){
        this.answer=parseInt(this.firstValue) / parseInt(this.secondvalue)
      }else{
        console.log("errror divided by zero")
      }
    }
    this.operator=""
    this.inputTemp.length=0;
    this.input="";
  }
  public ClearAll(){
    this.input=""
    this.operator=""
    this.firstValue=""
    this.secondvalue=""
    this.answer = null
    this.inputTemp.length=0;
  }
}