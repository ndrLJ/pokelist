import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPoke: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';
  public pokemon: any;
  public isLoading: boolean = true;
  public apiError: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.getPokemon;
  }

  /**
   * returns details about selected pokemon
   */
  get getPokemon() {
    const id = this.activeRoute.snapshot.params['id'];
    const pokemon = this.pokeApiService.getPokemon(`${this.urlPoke}/${id}`);
    const name = this.pokeApiService.getPokemon(`${this.urlName}/${id}`);
    return forkJoin([pokemon, name]).subscribe(
      (res) => {
        this.pokemon = res;
        this.isLoading = false;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }
}
