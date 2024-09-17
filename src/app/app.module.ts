import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MySubComponent } from './my-sub/my-sub.component';
import { SendValueComponent } from './send-value/send-value.component';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './service/weather.service';
@NgModule({
  declarations: [
    AppComponent,
    MySubComponent,
    SendValueComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
