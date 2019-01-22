import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrailsComponent } from './trails/trails.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    TrailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
