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
import {FlexLayoutModule} from "@angular/flex-layout";
import { CommentsComponent } from './comments/comments.component';
import {ToastrModule} from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    TrailInfoComponent,
    TrailsComponent,
    TrailsOfUserComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
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
    MatToolbarModule,
    FormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

  ],
  providers: [TrailsComponent, TrailInfoComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
