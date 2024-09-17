import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { Interface } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService]
})
export class AppComponent {
}
