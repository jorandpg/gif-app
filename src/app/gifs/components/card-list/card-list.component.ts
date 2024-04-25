import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsCardComponent } from '../gifs-card/gifs-card.component';

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [GifsCardComponent],
  templateUrl: './card-list.component.html'
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];
}
