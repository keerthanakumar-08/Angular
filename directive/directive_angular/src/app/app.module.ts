import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { ModelComponent } from './model/model.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { SwitchComponent } from './switch/switch.component';
import { AttributeComponent } from './attribute/attribute.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    StyleComponent,
    ModelComponent,
    IfComponent,
    ForComponent,
    SwitchComponent,
    AttributeComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
