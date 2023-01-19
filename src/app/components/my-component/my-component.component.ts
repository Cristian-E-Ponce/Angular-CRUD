import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent  {



  edad:number;
  nombres:Array<string>;

  constructor(){
    this.edad = 18;
    this.nombres = ['A','B'];
  }

  ngOnInit():void{

    alert('My Component Cargado') 
  }

  aumentarEdad()
  {
    this.edad++;
    alert("Aumentar")
  }
  disminuirEdad(){
    this.edad--;
    alert("Disminuir")
  }




}


