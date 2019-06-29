import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
   imageURL:string="https://thumbs.werkaandemuur.nl/1/0482eae3c5c72c05744fc64eb03d6792/817x600/thumbnail/fit.jpg";
   state:boolean = true;
   count1:number = 0;
   message:string="hello from ngModule"
   nom:string
   email:string
   phone:string
   about:string
   date:Date = new Date()
   FORMATION=[
     {id:1 ,name:'Raouf'},
     {id:2 ,name:'Abbes'},
     {id:3 ,name:'Tijeni'},
     {id:4 ,name:'bilel'},
     {id:5 ,name:'nizar'},
   ]

   PERSONNE=[]

   constructor() { 
     console.log ('constructor execution');
   }

  ngOnInit() {
    console.log ('OnInit execution');
  }
  clickEvent(){
    alert ('Stop touching me  !');
    alert(this.imageURL);
  }
  clickEventadd(){
   this.count1++;
  }
  clickEventsoustract(){
    this.count1--;
  }
display(){
 /* alert("nom =" + this.nom +"email=" + this.email +"phone=" + this.phone +"about=" + this.about);
  let data = {
    messnomage:this.nom ,
    email:this.email,
    phone:this.phone,
    about:this.about,
  } 

  console.log(data); */
 this.PERSONNE.push({
  nom:this.nom ,
  email:this.email,
  phone:this.phone,
  about:this.about,
} );

}
clear(){
   this.nom="";
   this.email =""; 
   this.phone ="";
   this.about="";
   alert("fields emptied");
   alert("nom =" + this.nom +"email=" + this.email +"phone=" + this.phone +"about=" + this.about);
}
}
