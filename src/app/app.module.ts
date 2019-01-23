import { APIKeys } from '../api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
const firebaseConfig = APIKeys.firebaseConfig;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule, MatSelectModule, MatOptionModule, MatButtonModule, MatInputModule, MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrailInfoComponent } from './trail-info/trail-info.component';
import { HttpClientModule } from '@angular/common/http';
import { TrailsComponent } from './trails/trails.component';
import { MatFormFieldModule } from "@angular/material";
import { TrailsByIdComponent } from './trails-by-id/trails-by-id.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TrailsOfUserComponent } from './trails-of-user/trails-of-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TrailInfoComponent,
    TrailsComponent,
    TrailsByIdComponent,
    TrailsOfUserComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
