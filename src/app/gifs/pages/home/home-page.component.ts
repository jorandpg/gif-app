import { Component } from '@angular/core';

import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsCardComponent } from '../../components/gifs-card/gifs-card.component';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

}
