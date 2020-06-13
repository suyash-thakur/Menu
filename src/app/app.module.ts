import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
  MatTabsModule, MatInputModule, MatProgressSpinnerModule, MatStepperModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { DdashboardComponent } from './ddashboard/ddashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { AuthComponent } from './auth/auth.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardFreeComponent } from './dashboard-free/dashboard-free.component';

@NgModule({
  declarations: [
    AppComponent,
    DdashboardComponent,
    AuthComponent,
    MenuComponent,
    DashboardFreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
  MatTabsModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule, MatToolbarModule, MatRadioModule, MatStepperModule,FormsModule,
  MatTooltipModule,
  AngularFireAuthModule,
  ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule, AngularFireStorageModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
