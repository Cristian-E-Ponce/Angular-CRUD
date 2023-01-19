import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { SegundoComponentComponent } from './components/segundo-component/segundo-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SegundoComponentComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
