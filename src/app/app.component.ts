import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestPoject';
  age = agee;
  poste = postee;


}
interface IEmploye{
  name:string;
  poste:string;
  date_naiss:Date;
  getAge():number;
  getPoste():string;
}

class Employe implements IEmploye{
  name:string;
  poste:string;
  date_naiss:Date;

  constructor(name,poste, date_naiss){
      this.name = name;
      this.poste  = poste;
      this.date_naiss = date_naiss;
  }

  getAge():number{
      let yeatofBirth = this.date_naiss.getFullYear();
      let yearOfToDay = new Date().getFullYear();
      return yearOfToDay - yeatofBirth;
  }
  getPoste():string{
      return this.poste;
  }
}

let user = new Employe("JamelEddine","ing",new Date('10/10/2000'))
//alert(user.getAge()+"  "+user.getPoste());
var agee = user.getAge();
var postee = user.getPoste();