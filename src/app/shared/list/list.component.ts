import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public setAllPokemon: any;
  public getAllPokemon: any;
  public apiError: boolean = false;
  public noMatches: boolean = false;

  constructor(private pokeService: PokeApiService) {}

  /**
   * initial handler
   */
  ngOnInit(): void {
    this.pokeService.listPokemon.subscribe(
      (res) => {
        this.setAllPokemon = res.results;
        this.getAllPokemon = res.results;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }

  /**
   *
   * @param value returns results based on search
   */
  public getSearch(value: string) {
    if (value.length !== 0) {
      const filter = this.getAllPokemon.filter((res: any) => {
        return !res.name.indexOf(value.toLowerCase());
      });

      if (filter.length !== 0) {
        this.getAllPokemon = filter;
        this.noMatches = false;
      } else {
        this.noMatches = true;
      }
    } else {
      this.getAllPokemon = this.setAllPokemon;
      this.noMatches = false;
    }
  }
}
