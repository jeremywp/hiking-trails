import { APIKeys } from '../api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
const firebaseConfig = APIKeys.firebaseConfig;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule,
         MatSelectModule,
         MatOptionModule,
         MatButtonModule,
         MatInputModule, 
         MatCheckboxModule,
         MatToolbarModule 
        } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrailInfoComponent } from './trail-info/trail-info.component';
import { HttpClientModule } from '@angular/common/http';
import { TrailsComponent } from './trails/trails.component';
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TrailsOfUserComponent } from './trails-of-user/trails-of-user.component';
import { AuthModule } from './auth/auth.module';

import * as firebase from 'firebase';



@NgModule({
  declarations: [
    AppComponent,
    TrailInfoComponent,
    TrailsComponent,
    TrailsOfUserComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //firebase.firestore().settings({timestampsinSnapshots: true}),
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
    MatToolbarModule,
    FormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
 

  ],
  providers: [TrailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
