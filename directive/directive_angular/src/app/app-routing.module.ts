import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'class', component: ClassComponent },
    
  ]),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
