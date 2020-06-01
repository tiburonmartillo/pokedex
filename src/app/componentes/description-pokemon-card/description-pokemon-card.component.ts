import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, pluck, map } from 'rxjs/operators';

@Component({
  selector: 'app-description-pokemon-card',
  templateUrl: './description-pokemon-card.component.html',
  styleUrls: ['./description-pokemon-card.component.css'],
})
export class DescriptionPokemonCardComponent implements OnInit {
  constructor(
    private loading=true;
    private activatedRouter: ActivatedRoute,
    private http: HttpClient
  ) {
    this.activatedRouter.params.pipe(
      pluck('id'),
      switchMap((id) => this.getPokemon(id)),
      switchMap((pokemon) =>
        this.http.get(pokemon.species.url).pipe(
          map((nuevaDataPokemon) => ({
            ...pokemon,
            ...nuevaDataPokemon,
          }))
        )
      )
    ).subscribe((poekom)=>{
      this.pokemonRecibido=pokemon;
      this.description=this.pokemonRecibido.flavor_text_entries.find(
        (descripcion)=>
        descripcion.language.name=='es'?descripcion.flavor_text_entries:null
      );
      this.loading=false;
    });
  }

  ngOnInit(): void {}

  public getPokemon() {
    this.http
      .get(`https://pokeapi.co/api/v2/10`)
      .subscribe((pokemon) => console.log(pokemon));
  }
}
