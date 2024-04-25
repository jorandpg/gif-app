import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './gifs/pages/home/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gif-app';
}
