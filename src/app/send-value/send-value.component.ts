import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-value',
  templateUrl: './send-value.component.html',
  styleUrls: ['./send-value.component.scss'],
})
export class SendValueComponent {
  myName!: string
  constructor(private weatherService: WeatherService, private router: Router) { }

  setValue() {
    this.weatherService.setSubject(this.myName)
    this.router.navigate(['/my-sub'])
  }
}
