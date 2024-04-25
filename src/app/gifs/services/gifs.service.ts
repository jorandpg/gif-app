import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  public gifList: Gif[] = [];
  private _tagshistory: string[] = [];
  
  private apiKey: string = environment.apiKey;
  private serviceUrl: string = environment.url;

  constructor( private http: HttpClient ) {
    this.initSearch();
  }

  get tagsHistory() {
    // Se usa el operador spread para no pasar el listado por referencia, si no una copia
    return [...this._tagshistory];
  }

  /**
   * Función para incializar búsqueda si existe historial
   */
  private initSearch() {
    this.loadLocalStorage();
    const tag = this._tagshistory[0];

    if(tag) {
      this.searchTag(tag);
    }
  }

  /**
   * Función para hacer búsqueda
   * 
   * @param tag query a buscar
   * @returns
   */
  searchTag(tag: string): void {
    if( tag.length === 0 ) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', tag);
    
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe( res => {
        this.gifList = res.data;
      })
    
  }

  /**
   * Función para organizar el listado después de la búsqueda
   * @param tag query a consultar
   */
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if(this._tagshistory.includes(tag)) {
      // Obtiene el listado de aquellos que son diferentes al tag que escribió el usuario
      this._tagshistory = this._tagshistory.filter( (oldTag) => oldTag != tag );
    }

    // Se inserta el tag al inicio del listado
    this._tagshistory.unshift(tag);

    // Se limita el listado a 10 items
    this._tagshistory = this._tagshistory.splice(0, 10);
    this.saveLocalStorage();
  }

  /**
   * Función para guardar en el local storage el historial de busqueda
   */
  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagshistory) );
  }

  /**
  * Función para extraer el historial de busqueda desde el local storage
  */
  private loadLocalStorage(): void {
    const history = localStorage.getItem('history');
    if(history) {
      this._tagshistory = JSON.parse(history);
    }
  }
}
