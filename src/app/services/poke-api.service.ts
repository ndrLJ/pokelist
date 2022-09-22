import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50';

  constructor(private http: HttpClient) {}

  /**
   * returns a list with pokemon data
   */
  get listPokemon(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((pokeResults: any) => {
          this.getPokemon(pokeResults.url).subscribe(
            (res) => (pokeResults.status = res)
          );
        });
      })
    );
  }

  /**
   *
   * @param url pokemon url
   * @returns observable of pokemon
   */
  public getPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
