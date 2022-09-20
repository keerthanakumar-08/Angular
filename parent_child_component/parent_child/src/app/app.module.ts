import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemBindingComponent } from './item-binding/item-binding.component';
import { ItemOutputComponent } from './item-output/item-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemBindingComponent,
    ItemOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
