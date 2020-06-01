import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { debounceTime, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-busqueda-component',
  templateUrl: './busqueda-component.component.html',
  styleUrls: ['./busqueda-component.component.css']
})
export class BusquedaComponentComponent implements OnInit {
// view child: decorador que sirve para hacer referencia a un elemento html por medio del id de Angular. 
//estructura: @viewchild('#nombreId)nombreelemento:tipodeelemento
@ViewChild('inputsearch') inputsearch:ElementRef;

public pokemonRecibido:any;
public loading:boolean=true;
private url=`https://pokeapi.co/api/v2/pokemon/`


//constructor funcion que se ejecuta cuando se instancia el componente.
//Cuando se instancia un componente, cuando usamos su etiqueta
  constructor(private http:HttpClient) {
    
  }
//ngOnInit funcion que se ejecuta despues del constuctor y cuando se termina de crear el html y el css
//si tengo un método que haga referencia a una etiqueta html, necesito ponerlo aquí, porque si lo pongo en el constructor, me va a marcar un error de que el elemento no existe
  ngOnInit(): void {
  }
//ng after init: es un método que se ejecuta después del ngOnInit su objetivo e sverificar que los elementos ya estén renderizados la diferencia que tiene con ngOnInit es que after espera a que sus elementos estén renderizados y el ngOnInit solo espera a que angular los haya encontrado en su logica pero sin renderizarlos por lo tanto es necesario que establezcamos aquí todo lo que tenga que 
//searchpokemon: método que nos ayuda a obtener la informacion del pokemon buscado por medio de rxjs

ngAfterViewInit(): void {
  
  console.log();
  
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
}
searchPokemon(nombrepokemon){
fromEvent(this.inputsearch.nativeElement,'keyup')
.pipe(
  debounceTime(1500),
  pluck('target','value'),
  switchMap(nombrepokemon => this.http.get(`${this.url}${nombrepokemon}`))
).subscribe(value=>{this.pokemonRecibido=value;
this.loading=false;}

)
  // this.http.get(url).subscribe(pokemonRecibido=>(pokemonRecibido))
  
}

}
