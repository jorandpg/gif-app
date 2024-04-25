import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  constructor( private gifsService: GifsService ) { }

  get tags() {
    return this.gifsService.tagsHistory;
  }

  selectItem(tag: string) {
    this.gifsService.searchTag(tag);
  }
}
