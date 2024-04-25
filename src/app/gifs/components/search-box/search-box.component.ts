import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  imports: [],
  template: `
    <h5>Buscar:</h5>
    <input 
      type="text" 
      class="form-control" 
      (keyup.enter)="searchTag()"
      #txtTagInput
      placeholder="Buscar gifs...">
  
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>

  constructor( private gifsService: GifsService ) { }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
