import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { LazyImageComponent } from '../lazy-image/lazy-image.component';

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [LazyImageComponent],
  templateUrl: './gifs-card.component.html'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Propiedad Gif es requerida.');
  }

}
