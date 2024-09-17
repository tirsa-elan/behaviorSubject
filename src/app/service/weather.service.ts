import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

  public mySubject = new BehaviorSubject('')
  public mySubject$ = this.mySubject.asObservable()

  setSubject(value: string): any {
    return this.mySubject.next(value)
  }

  get(){
    return this.mySubject$ 
  }
}

