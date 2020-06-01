import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { style } from '@angular/animations';

@Directive({
  selector: '[appChangeColoroType]'
})
export class ChangeColoroTypeDirective {
  private arrayColors: Array<string> = [
    '#3B984D',
    '#585977',
    '#5BC9D8',
    '#E1E22C',
    '#E91360',
    '#EC6430',
    '#F34755',
    '#91A3AF',
    '#313466',
    '#25C94E',
    '#6B4A1D',
    '#D5EFF3',
    '#72545C',
    '#5E2D88',
    '#F61D90',
    '#451A09',
    '#5C7269',
    '#1A51CD'
  ];
  
@Input() nameType:string;

  constructor(private el: ElementRef, private render: Renderer2) { 
  }
  public changeColor(){
    if(this.nameType=='bicho'){
      
    }
    
  }
  ngOnInit(): void {
    console.log(this.nameType);
    this.changeColor();
  
  
}
}