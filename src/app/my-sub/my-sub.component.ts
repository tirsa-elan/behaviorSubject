import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-my-sub',
  templateUrl: './my-sub.component.html',
  styleUrls: ['./my-sub.component.scss'],
})
export class MySubComponent implements OnInit {
 constructor(private weatherServise : WeatherService){}
  ngOnInit(): void {
 this.weatherServise.get().subscribe(res=>{
  console.log(res)
 })
  }
}
