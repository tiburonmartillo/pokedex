import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, switchMap, concatMap, take } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css'],
})
export class GridCardsComponent {
  public ArraysPokemon: Array<any> = [];
  public loading: boolean = true;
  private urlApiPokemon = `https://pokeapi.co/api/v2/pokemon`;
  public indicePaginacion = 1;

  constructor(private http: HttpClient) {
    this.getPokemons(this.urlApiPokemon);
    window.scroll(0,0)
    
  }

  public getPokemons(urlApi: string) {
    this.ArraysPokemon=[];
    this.loading=true;
    this.http
      .get(urlApi)
      .pipe(
        pluck('results'),
        switchMap((PokemonsArray: any) =>
          from(PokemonsArray).pipe(
            pluck('url'),
            concatMap((url: string) => this.http.get(url))
          )
        )
      )
      .subscribe((pokemons) => {
        this.ArraysPokemon.push(pokemons);
        if (this.ArraysPokemon.length == 20) {
        
          this.loading = false;
        }
      });
  }
  public paginationRight() {
    const offset = this.indicePaginacion * 20;
    this.indicePaginacion++;
    const urlActualizado = `${this.urlApiPokemon}?offset=${offset}&limit=20`;
   
    this.getPokemons(urlActualizado)

  }

  public paginationLeft(){
    if(this.indicePaginacion==1)return;

    this.indicePaginacion--;
    const offsetleft = this.indicePaginacion*20-20;
    const urlActualizado = `${this.urlApiPokemon}?offset=${offsetleft}&limit=20`;

   console.log(urlActualizado);
   
    this.getPokemons(urlActualizado)

  }
}
