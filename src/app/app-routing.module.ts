import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySubComponent } from './my-sub/my-sub.component';

const routes: Routes = [
  {path : 'my-sub' , component : MySubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
