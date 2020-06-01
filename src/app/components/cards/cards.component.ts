import { Component, OnInit, Input,  } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

@Input()pokemonInput:any;

  constructor( private router:Router) {
    
  }
  
  ngOnInit(): void {
    // console.log(this.pokemonInput);
    
  
  }

  GotoDescription(id:number){
    this.router.navigate(['description',id]);
    
  }
}
